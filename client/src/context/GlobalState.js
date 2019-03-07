import React, { useReducer } from "react";

import GlobalContext from "context/context";
import { reducer, LOGIN, LOGOUT } from "context/reducers";

const GlobalState = props => {
  const initalAuth = {
    token: "",
    name: "",
    avatar: "",
    bio: "",
    gender: "",
    login: () => {},
    logout: () => {}
  };

  const initalState = Object.assign({}, initalAuth);
  // console.log(initalState);

  const [globalState, dispatch] = useReducer(reducer, initalState);

  const login = payload => {
    setTimeout(() => {
      dispatch({ type: LOGIN, payload });
    });
  };

  const logout = payload => {
    setTimeout(() => {
      dispatch({ type: LOGOUT, payload });
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        token: globalState.token,
        name: globalState.name,
        avatar: globalState.avatar,
        bio: globalState.bio,
        gender: globalState.gender,
        login: login,
        logout: logout
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
