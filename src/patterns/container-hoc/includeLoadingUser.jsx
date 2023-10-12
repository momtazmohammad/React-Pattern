import axios from "axios";
import { useEffect, useState } from "react";
export const includeLoadingUser = (Component,title) => {
  return (props)=>{
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
//can have include onChange and onPost and ... functionality and pass it Component as props 
//of course component should support these functionalities
  return <>
  <p>{title}</p>
  <Component {...props} isLoading={isLoading} data={data}/>
  </>;
}
};