import axios from "axios";

import { useEffect, useContext, useState } from "react";

import MyContext from "context/context";
import apis from "message/apis.js";

const { AUTH } = apis;

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(MyContext);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: "get",
      url: AUTH
    })
      .then(res => {
        console.log(res.data);
        setIsLoading(false);
        context.authAction.login({
          name: res.data.name,
          avatar: res.data.avatar,
          bio: res.data.bio,
          gender: res.data.gender
        });
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  return isLoading;
};
