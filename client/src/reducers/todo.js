import {
  GET_TODO_LIST,
  ADD_TODO,
  DELETE_TODO
} from "../actions/types";

const INITIAL_STATE = {
  todos: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state,
        todos: action.payload.todos
      };
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload.todos
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: action.payload.todos
      };
    default:
      return state;
  }
}