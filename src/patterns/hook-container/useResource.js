import axios from "axios";
import { useEffect, useState } from "react";
export const useResource = (resourceUrl) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getResource = async () => {
    setIsLoading(true);
    const response = await axios.get(resourceUrl);    
    setIsLoading(false);
    if (!response.data) return;
    setData(response.data);
  };

  useEffect(() => {
    getResource();
  }, [resourceUrl]);

  return { data, isLoading };
};