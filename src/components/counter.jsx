import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value // props is all property in this object
  // };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  //   if (prevProps.counter.value !== this.props.counter.value) {
  //     // Ajax call and get new data from the server
  //   }
  // }

  // componentWillUnmount(){
  //   console.log('Counter - Unmount');
  // }
  render() {

    const { onDelete, onIncrement, onDecrement, counter } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>

        <div className="col">
          <button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm">+</button>
          <button onClick={() => onDecrement(counter)} className="btn btn-secondary btn-sm m-2" disabled={counter.value === 0 ? "disabled" : ""}> - </button>
          <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm">x</button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    const { value } = this.props.counter;
    let classes = "badge m-2 badge-";
    classes += (value === 0) ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
