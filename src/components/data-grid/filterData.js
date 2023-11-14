export const filterData=(row,fields)=>{        
    let vld=true
    for(const fld of fields){            
        if(!!fld.filterValue){
            if((row[fld?.fieldName]+"")?.includes(fld?.filterValue)){
                vld=true
            } else {
                vld=false
            }
        }
    }
    return vld
}
