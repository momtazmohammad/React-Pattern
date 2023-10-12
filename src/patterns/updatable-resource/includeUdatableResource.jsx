import axios from "axios";
import { useEffect, useState } from "react";
export const includeUpdatableResource = (Component,resourceUrl,resourceName) => {
    const toCapital=str=>str.charAt(0).toUpperCase()+str.slice(1)
    return (props)=>{
        const [inintialResource,setInintialResource]=useState(null)
        const [resource,setResource]=useState(null)
        useEffect(()=>{
            (async ()=>{
                const res=await axios.get(resourceUrl)
                setInintialResource(res.data)
                setResource(res.data)
            })()
        },[])
        const onChange=(update)=>{
            setResource({...resource,...update})
        }
        const onPut=async ()=>{
            const res=await axios.put(resourceUrl,{[resourceName]:resource});
            setResource(res.data)
            setInintialResource(res.data)
        }
        const onReset=()=>{
            setResource(inintialResource)
        }
        const resourceProps={
            [resourceName]:resource ,
            [`onChange${toCapital(resourceName)}`]:onChange,
            [`onPut${toCapital(resourceName)}`]:onPut,
            [`onReset${toCapital(resourceName)}`]:onReset,
        }
        return <Component {...props} {...resourceProps} />
    }

}