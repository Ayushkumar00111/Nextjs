console.log("start")

const promise =  new promise((response , reject)=>{
    let status = true
    if(status){
        response("success")
    }
    else{
        reject("error !!")
    }
})
promise
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})
