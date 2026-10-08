import Link from "next/link";

import Client from "./server-client/client";
export default function Home() {
  let  name ='ayush';
  return (
  <div>
    <h1>
      client use server content
    </h1>
   
     <Link href={"/server-client"}>Go to Cleint Component that use Server compoemnt</Link><br></br>
   <Client user={name}/>

  </div>
   
  );
}
