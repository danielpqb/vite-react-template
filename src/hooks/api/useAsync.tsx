import { useState, useEffect } from "react";
import { useRequestRetry } from "./useRequestRetry";

export default function useAsync(handler: any, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const act = async (...args: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await useRequestRetry(handler(...args), { retries: 2 }) as any;
      console.log("fora");
      if (response.success === false) {
        console.log("response.fail");
        setLoading(false);
        throw response.error;
      }
      if (response.success === true) {
        console.log("response.success");
        setData(response as any);
        return response.data;
      }
    }
    catch (err: any) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
