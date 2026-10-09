import { NextResponse } from "next/server";

export default function Midleware(request){
    const isLoggin=false;
    if(!isLoggin){
        return NextResponse.redirect(
            new URL("/login",request.url)
        );
    }
    return NextResponse.next();
       
    
}
export const config={
    matcher:['/dashboard']
};