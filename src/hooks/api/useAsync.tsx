import { useState, useEffect } from "react";
import { useRequestRetry } from "./useRequestRetry";

export default function useAsync(handler: any, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const act = async (...args: any) => {
    setLoading(true);
    setError(null);

    const response = (await useRequestRetry(handler(...args), { retries: 2, minTimeout: 500 })) as any;

    if (response.success === false) {
      setLoading(false);
      setError(response.error);
      return response.error;
    }

    setLoading(false);
    setData(response.data);
    return response.data;
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
