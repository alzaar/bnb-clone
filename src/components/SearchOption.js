import React from 'react';
import './css/searchoption.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class SearchOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    return (
      <div className="searchOption">
        <p className="font-style">Welcome to BNB</p>
        <input className="descriptors" placeholder="Where to next?" type="text"/>
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="p-2 bd-highlight"><p className="descriptors">From</p></div>
          <div className="p-2 bd-highlight"><DatePicker className="datepicker" selected={this.state.startDate} onChange={this.handleChange}/></div>
          <div className="p-2 bd-highlight"><p className="descriptors">To</p></div>
          <div className="p-2 bd-highlight"><DatePicker className="datepicker" selected={this.state.startDate} onChange={this.handleChange}/></div>
        </div>
      </div>
    );
  }
}

export default SearchOption;
