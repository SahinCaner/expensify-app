import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    <ul>
      {
        props.expenses.length === 0 ? (
          <p>No expense</p>
        ) : (
            props.expenses.map((expense) => (
              <ExpenseListItem
                // key={expense.id}
                // description={expense.description}
                // amount={expense.amount}
                // createdAt={expense.createdAt}
                key={expense.id}
                {...expense} // sends all expense props to child component
              />
            ))
          )
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