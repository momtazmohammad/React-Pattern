import axios from "axios";
import { useState,useEffect } from "react";
import { UserList } from "./UserList";
export const UserContainer = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    setIsLoading(true);
    const response = await axios.get("/api/users");    
        setIsLoading(false);
    if (!response.data) return;
    setData(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return <UserList data={data} isLoading={isLoading} />;
};