import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../API";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ApiCall = async () => {
      await fetchDataFromAPI(url)
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log("SomeThing was Wrong!", err);
        });
    };
    ApiCall();
  }, [url]);

  return { data, loading };
};
export default useFetch;
