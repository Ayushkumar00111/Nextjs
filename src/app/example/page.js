import { NextResponse } from "next/server";

export const instant=false

export default async function Example(){
    let age =12
    if(age>12){
        return NextResponse.redirect(new URL('/dynamic',Request.URL))
    }
    await new Promise((resolve)=>setTimeout(resolve,3000));
    return(
<div>

      <h1>hello user please login </h1>
</div>

    )
}