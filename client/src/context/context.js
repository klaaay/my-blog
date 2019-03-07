import React from "react";

export default React.createContext({
  token: "",
  name: "",
  avatar: "",
  bio: "",
  gender: "",
  login: () => {},
  logout: () => {}
});