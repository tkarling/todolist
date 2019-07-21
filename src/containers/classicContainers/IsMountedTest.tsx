import React, { Component } from 'react'

const myFetch: () => Promise<string> = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve('This text is the result'), 3000)
  )

const Callee = ({ result, title }: { result: string; title: string }) => {
  return (
    <div style={{ border: '1px solid blue', padding: 8, marginTop: 8 }}>
      <div style={{ padding: '8px 0px', fontWeight: 'bold' }}>{title}</div>
      {result && <div>result: {result}</div>}
      {!result && <div>Loading...</div>}
    </div>
  )
}

class CalleeWithWarning extends Component<{}, { savedResult: string }> {
  state = { savedResult: '' }

  componentDidMount() {
    myFetch().then(result => {
      this.setState({ savedResult: result }, () => {
        console.log('savedResult', this.state.savedResult)
      })
    })
  }
  render() {
    return (
      <Callee result={this.state.savedResult} title="Callee with Warning" />
    )
  }
}

class CalleeWithIsMounted extends Component<{}, { savedResult: string }> {
  state = { savedResult: '' }

  _isMounted = false
  componentDidMount() {
    this._isMounted = true
    myFetch().then(result => {
      if (this._isMounted) {
        this.setState({ savedResult: result }, () => {
          console.log('savedResult', this.state.savedResult)
        })
      }
    })
  }
  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return (
      <Callee result={this.state.savedResult} title="Callee with _isMount" />
    )
  }
}

// from: https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
const makeCancelable = (promise: any) => {
  let hasCanceled_ = false

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (val: any) =>
        hasCanceled_ ? reject({ isCanceled: true }) : resolve(val),
      (error: Error) =>
        hasCanceled_ ? reject({ isCanceled: true }) : reject(error)
    )
  })

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true
    }
  }
}

class CalleeWithCancellablePromise extends Component<
  {},
  { savedResult: string }
> {
  state = { savedResult: '' }

  cancelablePromise = makeCancelable(myFetch())

  componentDidMount() {
    this.cancelablePromise.promise
      .then(result => {
        this.setState({ savedResult: result as string }, () => {
          console.log('savedResult', this.state.savedResult)
        })
      })
      .catch(reason => console.log('isCanceled', reason.isCanceled))
  }

  componentWillUnmount() {
    this.cancelablePromise.cancel()
  }

  render() {
    return (
      <Callee
        result={this.state.savedResult}
        title="Callee with cancelled Promise"
      />
    )
  }
}

class IsMountedTest extends Component<
  {},
  { show: boolean; current: '_isMounted' | 'cancellable' | 'warning' }
> {
  state = {
    show: false,
    current: 'warning' as '_isMounted' | 'cancellable' | 'warning'
  }

  toggleShow = () => this.setState({ show: !this.state.show })

  toggleCallee = () =>
    this.setState(state => ({
      current:
        state.current === 'warning'
          ? '_isMounted'
          : state.current === '_isMounted'
          ? 'cancellable'
          : 'warning'
    }))

  render() {
    const { show, current } = this.state
    const title = `Call with ${current}`

    return (
      <div style={{ border: '1px solid red', padding: 8, marginTop: 8 }}>
        <button onClick={this.toggleCallee}>Swap Callee</button>
        <div style={{ padding: '8px 0px', fontWeight: 'bold' }}>{title}</div>
        <button onClick={this.toggleShow}>Toggle</button>
        {show && current === 'warning' && <CalleeWithWarning />}
        {show && current === '_isMounted' && <CalleeWithIsMounted />}
        {show && current === 'cancellable' && <CalleeWithCancellablePromise />}
      </div>
    )
  }
}

export default IsMountedTest
