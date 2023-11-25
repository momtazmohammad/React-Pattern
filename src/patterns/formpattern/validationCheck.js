export const validationCheck=(errors,setErrors,vldCheck,dataSource)=>{
    let vld = true;
    for (const fld in errors) {
      const errs=[]
      for(const fldCheck of vldCheck[fld]) {
        const fldErr=fldCheck(dataSource[fld])              
        if(!!fldErr) {vld=false,errs.push(fldErr)}
      }
      setErrors((errors) => ({ ...errors, [fld]: errs.join(" , ") }));
      // switch (fld) {
      //   case "firstname":
      //   case "lastname":
      //     if (!person[fld]) {
      //       vld = false;
      //       setErrors((errors) => ({
      //         ...errors,
      //         [fld]: "لطفا فیلد مربوطه تکمیل گردد",
      //       }));
      //     } else {
      //       setErrors((errors) => ({ ...errors, [fld]: "" }));
      //     }
      //     break;
      //   case "age":
      //     if (person[fld] < 20) {
      //       vld = false;
      //       setErrors((errors) => ({
      //         ...errors,
      //         [fld]: "سن بايد بزرگتر از 19 سال باشد",
      //       }));
      //     } else {
      //       setErrors((errors) => ({ ...errors, [fld]: "" }));
      //     }
      //     break;
      //   default:
      // }
    }
    return vld
}