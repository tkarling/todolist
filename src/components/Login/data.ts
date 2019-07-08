export interface Field {
  id: string
  label?: string
  placeholder?: string
  name?: string
  type?: string
  required?: boolean
}

export const FIELDS = {
  username: {
    id: 'username',
    label: 'Username',
    placeholder: 'Email or Username',
    required: true
  },
  password: {
    id: 'password',
    label: 'Password',
    type: 'password',
    required: true
  },
  repeatPassword: {
    id: 'repeatPassword',
    label: 'Repeat Password',
    type: 'password',
    required: true
  }
}
