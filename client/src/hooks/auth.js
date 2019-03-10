import axios from "axios";

import { useEffect, useContext } from "react";

import MyContext from "context/context";
import apis from "message/apis.js";

const { AUTH } = apis;

export const useAuth = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    axios({
      method: "get",
      url: AUTH
    })
      .then(res => {
        console.log(res.data);
        context.authAction.login({
          name: res.data.name,
          avatar: res.data.avatar,
          bio: res.data.bio,
          gender: res.data.gender
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
};
