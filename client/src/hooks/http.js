import axios from "axios";

import { useState, useEffect, useContext } from "react";

import MyContext from "context/context";

export const useHttp = ({ method, url, data }, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const context = useContext(MyContext);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: method,
      url: url,
      data: data
    })
      .then(res => {
        setIsLoading(false);
        setFetchedData(res.data);
        if (res.data.password) {
          context.authAction.login({
            name: res.data.name,
            avatar: res.data.avatar,
            bio: res.data.bio,
            gender: res.data.gender
          });
        }
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
