import bcrypt from "bcrypt";

const testPromise = async (val) => {
  if (val === 0) {
    return Promise.reject({
      message: "value is equal zero",
    });
  }
  return Promise.resolve("value is ok");
};

/********/  
const hashPass=async ()=>{
  try {
  const saltRounds=10;
  const hash = await new Promise((resolve, reject) => {
    bcrypt.hash("userpass", saltRounds, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });
  console.log({hash});  
} catch (err) {
  console.log(err);
}
}

/********/
const hashPass2=async (pass)=>{
  const saltRounds=10;
  const hash = await new Promise((resolve, reject) => {
    bcrypt.hash(pass, saltRounds, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });
  //return Promise.resolve(hash)
  return hash
}

/********/
const divide =(a,b)=>{  
  if (b===0) return Promise.reject("divide by 0");
  return Promise.resolve(a/b);      
}

const divideV2 =(a,b)=>{  
const promise=new Promise((resolve, reject) => {
  if (b===0) reject(new Error('Cannot divide by 0'));
  resolve(a/b);      
});
return promise
}

// testPromise(0)
//   .then((msg) => console.log("success message", msg))
//   .catch((err) => console.log(err));

//hashPass()

// hashPass2("jafar")
// .then((result) =>console.log({result}));
//  const hash2=await hashPass2("farshad");console.log({hash2})
// divide(15,0).then(res=>console.log(res))
// .catch(err=>console.log(err))

divideV2(10,2).then(res=>console.log(res))
.catch(err=>console.log(err))