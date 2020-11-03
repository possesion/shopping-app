import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from './Todo'
import { store } from '../../components/App'

afterEach(cleanup);

const vdom = () => render(<Provider store={store}><Todo/></Provider>);

it('render Todo component', () => {
    render(<Provider store={store}><Todo/></Provider>)
});

it('add new Task', () => {
   const { getByTestId, getByText } = vdom();
   fireEvent.change(getByTestId('input'), { target: { value: 'firstTask' } })
   fireEvent.click(getByText('add to list'))
   expect(getByTestId('element').textContent).toBe('firstTask')
})

it('add second Task', () => {
    const { getByTestId, getByText, getAllByTestId } = vdom()
    fireEvent.change(getByTestId('input'), { target: { value: 'anotherTask' } })
    fireEvent.click(getByText('add to list'))
    expect(getAllByTestId('elements').length).toBe(2)
 })

it('remove task', () => {
    const { getAllByText, getAllByTestId } = vdom()
    const task = getAllByText('×');
    fireEvent.click(task[0])
    expect(getAllByTestId('elements').length).toBe(1)
})

it('switch state to finished', () => {
    const { getByTestId} = vdom();
    const task = getByTestId('element')
    fireEvent.click(task)
    expect(task.style.textDecoration).toBe('line-through')
})
