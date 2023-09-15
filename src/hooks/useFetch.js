import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../API";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const ApiCall = async () => {
      await fetchDataFromAPI(url)
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setLoading(false);
        });
    };
    ApiCall();
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
