import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // console.log(expense);
    // console.log(this.props.expense.id);
    // console.log(this.props.editExpense());
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
    //console.log('updated: ', expense);
  };

  onClick = (e) => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({ 
  expense: state.expenses.find((expense) => expense.id === props.match.params.id) 
});

// we can use props whenever we need it. In this example it is irrelevant
const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
