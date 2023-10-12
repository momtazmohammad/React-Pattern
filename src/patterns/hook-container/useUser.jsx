import axios from "axios";
import { useEffect, useState } from "react";
export const useUser = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async () => {
    setIsLoading(true);
    const response = await axios.get("/api/users");    
    setIsLoading(false);
    if (!response.data) return;
    setData(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return { data, isLoading };
};