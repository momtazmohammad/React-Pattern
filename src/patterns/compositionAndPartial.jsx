export const Button=({size="big",color,text,...others})=>{
    return (
        <button 
        style={{
            fontSize:size=="small"?"10px":"24px",
            backgroundColor:color,
            ...others
        }}>{text}</button>
    )
}
export const RedButton=(props)=>{
    return <Button {...props} color={"red"}/>
}
export const GreenSmallButton=(props)=>{
    return <Button {...props} color="green" size="small"/>
}
const PartialPattern=(Component,partialProps)=>{
    return (props)=> {
        return <Component {...partialProps} {...props}/>
    }
}
export const GreyButton=PartialPattern(Button,{color:"grey"})
export const GreySmallButton=PartialPattern(GreyButton,{size:"small"})