import filterReducers from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
  const state = filterReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sortBy to amount', () => {
  const state = filterReducers(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount', // we want to see its change after action passed
    startDate: undefined, // we dont care the date
    endDate: undefined  // we dont care the date
  }

  const action = { type: 'SORT_BY_DATE' };
  const state = filterReducers(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const text = 'Rent';
  const action = {
    type: 'SET_TEXT_FILTER', 
    text
  }
  const state = filterReducers(undefined, action);
  expect(state.text).toBe(text);
});

test('Should set startDate filter', () => {
  const startDate = moment();
  const action ={
    type: 'SET_START_DATE', 
    startDate
  }
  const state = filterReducers(undefined, action)
  expect(state.startDate).toEqual(startDate);
});

test('Should set endDate filter', () => {
  const endDate = moment();
  const action ={
    type: 'SET_END_DATE', 
    endDate
  }
  const state = filterReducers(undefined, action)
  expect(state.endDate).toEqual(endDate);
});