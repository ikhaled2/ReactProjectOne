import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h4>No Children Counter Number: {this.props.id}</h4>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} class="btn btn-secondary btn-sm">
          Increment
        </button>
        <button
          onClick={this.handleIncrementDown}
          class="btn btn-secondary btn-sm"
        >
          Increment Down
        </button>
        {this.state.tags.length === 0 && <p>Please create a new tag</p>}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    console.log("Increment Clicked " + this.state.value);
    this.setState({ value: (this.state.value += 1) });
  };

  handleIncrementDown = () => {
    console.log("Increment Clicked " + this.state.value);
    this.setState({ value: (this.state.value -= 1) });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    var classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
