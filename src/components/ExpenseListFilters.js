import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
    //console.log(e.target.value) 
  }

  onSortByChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortByChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={this.state.calendarFocused}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (filterText) => dispatch(setTextFilter(filterText)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByDate()), 
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
    // removeExpense: (data) => dispatch(removeExpense(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);