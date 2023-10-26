import axios from "axios";
import { useEffect, useState } from "react";
export const useUpdatableResource = (
  resourceUrl,
  resourceName,
  resourceIdName,
  resourceInit
) => {
  const toCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const [resource, setResource] = useState(resourceInit);
  const get = async (srl) => {    
    const res = await axios.get(`${resourceUrl}/${srl}`);
    setResource(res.data);
  };
  const onChange = (update) => {
    setResource({ ...resource, ...update });
  };
  const onPut = async () => {
    try{
    const res = await axios.put(`${resourceUrl}/${resource[resourceIdName]}`, { [resourceName]: resource });        
    }catch(err){
      console.log(err)
    }
  };
  const onPost = async () => {
    const res = await axios.post(resourceUrl, { [resourceName]: resource });    
  };
  const onDelete = async (srl) => {
    const res = await axios.delete(`${resourceUrl}/${srl}`);
  };
  const onReset = () => {
    setResource(resourceInit);
  };
  const resourceProps = {
    [resourceName]: resource,
    setResource,
    [`get${toCapital(resourceName)}`]: get,
    [`onChange${toCapital(resourceName)}`]: onChange,
    [`onDelete${toCapital(resourceName)}`]: onDelete,
    [`onPut${toCapital(resourceName)}`]: onPut,
    [`onPost${toCapital(resourceName)}`]: onPost,
    [`onReset${toCapital(resourceName)}`]: onReset,
  };
  return { ...resourceProps };
};
