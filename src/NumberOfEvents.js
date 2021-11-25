import React, {Component} from 'react';
import { shallow, mount } from 'enzyme';
import { ErrorAlert } from './Alert'
class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  }
  handleNumberInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
  };
  render() {
    return (
      <div className="numberOfEvents">
        <input
        type="text"
        className="number-events-input"
        value={this.state.numberOfEvents}
        onChange={this.handleNumberInputChanged}
        />
      </div>
    );
  }

}

export default NumberOfEvents;