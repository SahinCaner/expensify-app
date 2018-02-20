import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseList = (props) => (
  <div>
    <ul>
      {
        props.expenses.map((expense) => (
          <ExpenseListItem
            key={expense.id}
            {...expense} // sends all expense props to child component
          />
        ))
      }
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);