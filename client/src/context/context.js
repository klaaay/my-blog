import React from "react";

import { authState } from "context/myblogState";
export default React.createContext({
  auth: authState
});