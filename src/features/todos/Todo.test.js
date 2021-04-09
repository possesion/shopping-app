import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Todo from './Todo';
import { store } from '../../components/App';

beforeEach(cleanup);

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn((props) => (
    <FakeTransition>{props.children}</FakeTransition>
  ));
  return { CSSTransition: FakeCSSTransition, TransitionGroup: FakeTransition };
});

const vdom = () =>
  render(
    <Provider store={store}>
      <Todo />
    </Provider>
  );

it('render Todo component', () => {
  render(
    <Provider store={store}>
      <Todo />
    </Provider>
  );
});

it('add new Task', () => {
  const { getByTestId, getByText } = vdom();
  fireEvent.change(getByTestId('input'), { target: { value: 'firstTask' } });
  fireEvent.click(getByText('add to list'));
  // screen.debug();
  expect(getByTestId('element').textContent).toBe('firstTask');
});
it('change filter', () => {
  const { queryByTestId, getByText } = vdom();
  expect(queryByTestId('element')).toBeInTheDocument();
  userEvent.click(getByText(/Done/gi));
  expect(queryByTestId('element')).not.toBeInTheDocument();
});

it('add second Task', () => {
  const { getByTestId, getByText, getAllByTestId } = vdom();
  fireEvent.click(getByText(/All/gi));
  fireEvent.change(getByTestId('input'), { target: { value: 'anotherTask' } });
  fireEvent.click(getByText('add to list'));
  expect(getAllByTestId('listEl').length).toBe(2);
});

it('remove task', () => {
  const { queryAllByTestId } = vdom();
  const task = queryAllByTestId('close');
  expect(queryAllByTestId('listEl').length).toBe(2);
  fireEvent.click(task[0]);
  expect(queryAllByTestId('listEl').length).toBe(1);
});

it('switch state to finished', () => {
  const { getByTestId } = vdom();
  const task = getByTestId('listEl');
  expect(task).toHaveClass('alert-warning');
  userEvent.click(task);
  // screen.debug();
  expect(task).toHaveClass('alert-warning');
});
