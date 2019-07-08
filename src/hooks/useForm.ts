import { useState, useEffect } from 'react'

const noop = (what = 'validate') => (inputs: any) => {
  console.log(what + ' called with:', inputs)
  return {}
}

const useForm = (
  {
    initialValues = {},
    callback = noop('submit'),
    validate = noop('validate')
  }: {
    initialValues?: any
    callback?: Function
    validate?: Function
  } = {
    initialValues: {},
    callback: noop('submit'),
    validate: noop('validate')
  }
) => {
  const [inputs, setInputs] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  const onSubmit = (event: any) => {
    if (event && event.preventDefault) {
      event.preventDefault()
    }
    setErrors(validate(inputs) || {})
    setIsSubmitting(true)
  }
  const onChange = (event: any) => {
    const { name = '', value } = event.target ? event.target : event
    setInputs((inputs: any) => ({
      ...inputs,
      [name]: value
    }))
  }
  return {
    onSubmit,
    onChange,
    inputs,
    errors
  }
}
export default useForm
