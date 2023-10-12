const isObject=data=>typeof data ==='object' && data!==null;

export const RecuresiveComponent=({data})=>{    
    if(!isObject(data)){        
        return (
            <li>
                {data}
            </li>
        )
    }
    const entries=Object.entries(data)    
    return (
        <>
        {entries.map(([key,value])=>{
            return (<li key={key}>
                {key}:
                <ul>
                    <RecuresiveComponent data={value}/>
                </ul>
            </li>)
        })}
        </>
    )
}