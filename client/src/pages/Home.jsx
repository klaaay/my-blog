import React, { useContext, useEffect } from "react";

import MyContext from "context/context";

const Home = props => {
  const context = useContext(MyContext);

  useEffect(() => {
    console.log(context);
  });

  return <div>Home Page{context.token ? "you are login" : ""}</div>;
};

export default Home;