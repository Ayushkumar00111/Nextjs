"use client"

export default function error({error, reset}){

    return(
<div>
    <h1>somethink is wrong is {error.message}</h1>
   
    <button onClick={()=>reset()}>
        reset
    </button>
</div>
    )
}