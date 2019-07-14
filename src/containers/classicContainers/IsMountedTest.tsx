import React, { Component } from 'react'

const myFetch: () => Promise<string> = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve('This text is the result'), 3000)
  )

class CalleeWithIsMounted extends Component<{}, { saveMe: string }> {
  state = { saveMe: '' }
  _isMounted = false

  componentDidMount() {
    this._isMounted = true
    myFetch().then(result => {
      if (this._isMounted) {
        this.setState({ saveMe: result }, () => {
          console.log('saveMe', this.state.saveMe)
        })
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { saveMe } = this.state
    return (
      <div style={{ border: '1px solid blue', padding: 8 }}>
        Callee with _isMount
        <div>saveMe: {saveMe}</div>
      </div>
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
      console.log('setting true')
      hasCanceled_ = true
    }
  }
}

class CalleeWithCancellablePromise extends Component<{}, { saveMe: string }> {
  state = { saveMe: '' }

  cancelablePromise = makeCancelable(myFetch())

  componentDidMount() {
    this.cancelablePromise.promise
      .then(result => {
        console.log('resolved', result)
        this.setState({ saveMe: result as string }, () => {
          console.log('saveMe', this.state.saveMe)
        })
      })
      .catch(reason => console.log('isCanceled', reason.isCanceled))
  }

  componentWillUnmount() {
    this.cancelablePromise.cancel()
  }

  render() {
    const { saveMe } = this.state
    return (
      <div style={{ border: '1px solid blue', padding: 8 }}>
        Callee with cancelled Promise
        <div>saveMe: {saveMe}</div>
      </div>
    )
  }
}

class IsMountedTest extends Component<{}, { show: boolean }> {
  state = { show: false }

  toggleShow = () => this.setState({ show: !this.state.show })

  render() {
    const { show } = this.state
    return (
      <div style={{ border: '1px solid red', padding: 8 }}>
        <div>Caller</div>
        <button onClick={this.toggleShow}>Toggle</button>
        {show && <CalleeWithCancellablePromise />}
      </div>
    )
  }
}

export default IsMountedTest
