import React, { useContext } from "react";

import MyContext from "context/context";

const Home = props => {
  const context = useContext(MyContext);
  return <div>Home Page{context.auth.name ? "you are login" : ""}</div>;
};

export default Home;