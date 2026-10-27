import { NextResponse } from "next/server";

export const instant=false
export async function generateMetadata() {
    const title="example"
    const description="display kara raha hu"
    return {
        title:title,
        description:description
    }
}
export default async function Example(){
    let age =12
    if(age>12){
        return NextResponse.redirect(new URL('/dynamic',Request.URL))
    }
    await new Promise((resolve)=>setTimeout(resolve,3000));
    return(
<div>

      <h1>hello user </h1>
                
</div>

    )
}
