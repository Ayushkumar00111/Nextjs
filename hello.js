console.log("start")

// const promise =  new promise((response , reject)=>{
//     let status = true
//     if(status){
//         response("success")
//     }
//     else{
//         reject("error !!")
//     }
// })
// promise
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })
const arr1 = [1,2,3,4,5]
const arr2 =[5,4,3,2,1]
const arr3 =[...arr1 ,...arr2]
const arr4= arr3.sort((x,y) =>x-y)
console.log(arr4)