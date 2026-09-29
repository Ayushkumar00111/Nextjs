console.log("start")
setTimeout(()=>{
    console.log("timeout")
    ,2000
})
Promise.resolve().then(()=>
    console.log("promise run")
)
console.log("end")