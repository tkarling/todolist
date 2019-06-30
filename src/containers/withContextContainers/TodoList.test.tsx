import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'

import { ADD_TODO_TEXTS, TODOS_TEXTS } from '../../components/texts'
import TodoList, { STORAGE_KEY } from './TodoList'

afterEach(() => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(''))
  cleanup()
})

const TASK_NAME = 'say hello'
const setup = (withItem = false) => {
  const { getByText, getByPlaceholderText, queryByText, queryByRole } = render(
    <TodoList />
  )

  const input = getByPlaceholderText(ADD_TODO_TEXTS.placeHolder)
  const submitButton = getByText(ADD_TODO_TEXTS.submitButton)

  if (withItem) {
    fireEvent.change(input, { target: { value: TASK_NAME } })
    fireEvent.click(submitButton)
  }
  const deleteButton = queryByText('X')
  const checkbox = queryByRole('checkbox')

  return {
    input,
    submitButton,
    queryByText,
    queryByRole,
    deleteButton,
    checkbox
  }
}

const expectToHaveItem = ({
  taskName = TASK_NAME,
  queryByText,
  queryByRole
}: {
  taskName: String
  queryByText: Function
  queryByRole: Function
}) => {
  expect(queryByText(TODOS_TEXTS.noItems)).toBeNull()
  expect(queryByText(taskName)).toBeVisible()
  expect(queryByText('X')).toBeVisible()
  expect(queryByRole('checkbox')).toBeVisible()
}

describe('start w list w no items', () => {
  test('loads and displays empty list with input form', () => {
    const { input, submitButton, queryByText } = setup()

    expect(input).toBeVisible()
    expect(submitButton).toBeVisible()
    expect(queryByText(TODOS_TEXTS.noItems)).toBeVisible()
  })

  test('can add item', () => {
    const { input, submitButton, queryByText, queryByRole } = setup()

    expect(queryByText(TODOS_TEXTS.noItems)).toBeVisible()

    fireEvent.change(input, { target: { value: TASK_NAME } })
    fireEvent.click(submitButton)

    expectToHaveItem({ queryByText, queryByRole, taskName: TASK_NAME })
  })
})

describe('start w list w one item', () => {
  test('loads and displays list w item', () => {
    const { queryByText, queryByRole } = setup(true)

    expectToHaveItem({ queryByText, queryByRole, taskName: TASK_NAME })
  })

  test('can toggle completed', () => {
    const { checkbox } = setup(true)

    expect((checkbox as any).checked).toEqual(false)

    fireEvent.click(checkbox as any)
    expect((checkbox as any).checked).toEqual(true)

    fireEvent.click(checkbox as any)
    expect((checkbox as any).checked).toEqual(false)
  })

  test('can delete item', () => {
    const { deleteButton, queryByText, queryByRole } = setup(true)

    fireEvent.click(deleteButton as any)

    expect(queryByText(TODOS_TEXTS.noItems)).toBeVisible()
    expect(queryByText(TASK_NAME)).toBeNull()
    expect(queryByText('X')).toBeNull()
    expect(queryByRole('checkbox')).toBeNull()
  })
})
