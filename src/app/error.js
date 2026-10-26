"use client"

export default function error({error, reset}){

    return(
<div>
    <h1>somethink ON  error{error.message}</h1>
   
    <button onClick={()=>reset()}>
        reset
    </button>
</div>
    )
}