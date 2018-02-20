import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <li>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p> Amount: {numeral(amount / 100).format('$0,0.00')}</p>
    <p> Created At: {moment(createdAt).format('Do MMMM, YYYY')}</p>
  </li>
);

// const ExpenseListItem = (props) => (
//   <li>
//     <p> Description: {props.description}</p>
//     <p> Amount: {props.amount}</p>
//     <p> Created At: {props.createdAt}</p>
//     <button 
//       onClick={() => {
//         console.log(props.id);
//         props.dispatch(removeExpense({ id: props.id }));
//       }}
//     >
//       Remove</button>
//   </li>
// );

export default ExpenseListItem;