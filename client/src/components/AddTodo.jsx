import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onChangeHandle = e => {
    this.setState({
      title: e.target.value
    });
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.addTodo(
            {
              title: this.state.title,
              completed: false
            },
            this.props.getTodoList
          );
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="AddTodo..."
          value={this.state.title}
          onChange={this.onChangeHandle}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(AddTodo);
