import {
  GET_TODO_LIST
} from "./types";

import axios from "axios";

export const getTodoList = () => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/todo`);
    dispatch({
      type: GET_TODO_LIST,
      payload: {
        todos: res.data.todos
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export const addTodo = (newTodo, callback) => async dispatch => {
  try {
    await axios.post(`http://localhost:5000/todo`, {
      newTodo
    });
    callback()
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = (_id, callback) => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/todo`, {
      data: {
        _id
      }
    });
    callback()
  } catch (e) {
    console.log(e);
  }
}