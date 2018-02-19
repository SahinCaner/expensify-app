import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('Should setup default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove Expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove Expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const expense = {
    id: '4',
    description: 'New Expense',
    note: '',
    amount: 45000,
    createdAt: 2000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('Should edit expense with given id', () => {
  const action ={
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'Updated Description'
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe('Updated Description');
});

test('Should not edit expense if expense not found', () => {
  const action ={
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      description: 'Updated Description'
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
