import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectedExpenses from '../selectors/expenses';
import selectedExpensesTotalAmount from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount.length === 1 ? "expense" : "expenses";
  const formatedAmount = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      {
        expenseCount.length > 0 ?
          <h1> Viewing {expenseCount} {expenseWord} totalling {formatedAmount} </h1> :
          <h1> No visible expenses </h1>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectedExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectedExpensesTotalAmount(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary);