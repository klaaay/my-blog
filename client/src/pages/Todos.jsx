import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

import AddTodo from "components/AddTodo";
import TodoItem from "components/TodoItem";

class Todos extends Component {
  renderTodoList = () =>
    this.props.todos.map(todo => <TodoItem key={todo._id} todo={todo} />);

  componentDidMount = () => {
    this.props.getTodoList();
  };

  render() {
    return (
      <div>
        <AddTodo />
        {this.renderTodoList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todo.todos
  };
}

export default connect(
  mapStateToProps,
  actions
)(Todos);
