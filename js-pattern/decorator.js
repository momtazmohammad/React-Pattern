function locked(target,key,descriptor){
    return { ...descriptor,writable:false}
}
class Data {
    @locked
    password="mypass";
}
const data=new Data()
data.password="hacked"