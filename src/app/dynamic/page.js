import { Gmetadata } from "../metadata"
export default function Dyanmic(){
    
    return (
        <>
        {Gmetadata.title}
             {Gmetadata.description}
   <a href="/dynamic/1">go to 1</a><br></br>
   
        </>
    )
}
export const metadata = {
    ...Gmetadata ,
    title:"dyanm",
}