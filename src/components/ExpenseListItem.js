import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <li>
    <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
    <p> Amount: {amount}</p>
    <p> Created At: {createdAt}</p>
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