import 'jest-dom/extend-expect'
import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { render, cleanup } from '@testing-library/react'
import useInput from './useInput'

describe('useInput', () => {
  afterEach(() => cleanup())

  test('initial value is empty', () => {
    const { result } = renderHook(() => useInput())
    expect(result.current[0]).toBe('')
  })

  test('can change value', () => {
    const typed = 'a'
    const onSubmit = jest.fn()
    const { result } = renderHook(() => useInput(onSubmit))
    act(() => {
      result.current[2].onChange(typed)
    })
    expect(result.current[0]).toBe(typed)
    expect(onSubmit).not.toBeCalled()
  })

  test('can submit value', () => {
    const onSubmit = jest.fn()
    const { result } = renderHook(() => useInput(onSubmit, true))
    act(() => {
      result.current[2].onSubmit('hello')
    })
    expect(result.current[0]).toBe('')
    expect(onSubmit).toBeCalled()
  })

  test('autofocus at init and after submit', () => {
    const onSubmit = jest.fn()
    const { result } = renderHook(() => useInput(onSubmit, true))
    const { getByTestId } = render(
      <div>
        <input ref={result.current[1]} data-testid="element-to-focus" />
      </div>
    )

    // autofocus at init
    const input = getByTestId('element-to-focus')
    act(() => result.current[2].onChange('a'))
    expect(input).toHaveFocus()

    // autofocus after submit
    act(() => input.blur())
    expect(input).not.toHaveFocus()
    act(() => {
      result.current[2].onSubmit('hello')
    })
    expect(onSubmit).toBeCalled()
    expect(input).toHaveFocus()
  })

  test('example: test focus', () => {
    const { getByTestId } = render(
      <div>
        <input data-testid="element-to-focus" />
      </div>
    )
    const input = getByTestId('element-to-focus')

    act(() => input.focus())
    expect(input).toHaveFocus()

    act(() => input.blur())
    expect(input).not.toHaveFocus()
  })
})
