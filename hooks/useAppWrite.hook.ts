import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { AsyncFunction, UseAppWriteReturn } from "@/types/useAppWrite.type";

const useAppWrite = <T, R>(fn: AsyncFunction<T, R>): UseAppWriteReturn<R> => {
  const [data, setData] = useState<R[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (arg?: T) => {
    setLoading(true);
    try {
      const res = await fn(arg);
      setData(Array.isArray(res) ? res : [res]);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = (arg?: T) => fetchData(arg);

  return { data, loading, refetch };
};

export default useAppWrite;
