import React, { useReducer } from "react";

import GlobalContext from "context/context";
import { authState } from "context/myblogState";
import { reducer, LOGIN, LOGOUT } from "context/reducers";

const GlobalState = props => {
  const initalState = {
    auth: authState
  };

  // useEffect(() => {}, []);

  const [globalState, dispatch] = useReducer(reducer, initalState);

  const authAction = {
    login: payload => {
      dispatch({ type: LOGIN, payload });
    },
    logout: payload => {
      dispatch({ type: LOGOUT, payload });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        auth: globalState.auth,
        authAction: { ...authAction }
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
