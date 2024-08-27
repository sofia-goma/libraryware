import { useEffect, useState } from "react";
import axios from "@/lib/axios.config";
import { toastError } from "./toast";

interface UseFetchResult<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export default function useAxios(url: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
}
