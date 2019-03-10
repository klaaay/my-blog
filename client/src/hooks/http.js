import axios from "axios";

import { useState, useEffect } from "react";

export const useHttp = ({ method, url, data }, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

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
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
