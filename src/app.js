import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 400 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 10000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
store.dispatch(addExpense({ description: 'Phone', amount: 10500, createdAt: 20000 }));

const jsx = (
  <Provider store={store}>
    < AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));