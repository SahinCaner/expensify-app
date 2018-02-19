import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('Should render ExpenseList with expense', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('Should render ExpenseList with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

