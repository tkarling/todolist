import { useState } from 'react'

const useForm = (
  {
    initialValues,
    callback
  }: {
    initialValues: any
    callback: Function
  } = {
    initialValues: {},
    callback: (inputs: any) => console.log('submit called with:', inputs)
  }
) => {
  const [inputs, setInputs] = useState(initialValues)
  const onSubmit = (event: any) => {
    if (event) {
      event.preventDefault()
    }
    callback(inputs)
  }
  const onChange = (event: any) => {
    if (!event.target || !event.target.name) {
      console.error('no event.target or event.target.name', event)
      return
    }
    const { name = '', value } = event.target
    setInputs((inputs: any) => ({
      ...inputs,
      [name]: value
    }))
  }
  return {
    onSubmit,
    onChange,
    inputs
  }
}
export default useForm
