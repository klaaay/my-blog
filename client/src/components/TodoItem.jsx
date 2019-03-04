import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class TodoItem extends Component {
  state = {
    title: this.props.todo.title,
    completed: this.props.todo.completed
  };

  onMarkComplete = () => {
    this.setState({
      completed: !this.state.completed
    });
  };

  render() {
    return (
      <div>
        <p
          style={
            this.state.completed
              ? { textDecoration: "line-through" }
              : { textDecoration: null }
          }
        >
          <input type="checkbox" onChange={this.onMarkComplete} />
          {this.state.title}
          <button
            onClick={() => {
              this.props.deleteTodo(
                this.props.todo._id,
                this.props.getTodoList
              );
            }}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(TodoItem);
