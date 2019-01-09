import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button class="btn btn-secondary btn-sm">Increment</button> */}
        {this.state.tags.length == 0 && <p>Please create a new tag</p>}
        {this.renderTags()}
      </React.Fragment>
    );
  }

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
    classes += this.state.count == 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
