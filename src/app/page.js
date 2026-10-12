"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 

  return (
  <div>
    <h1>
    home is sweet home 
    </h1>
    <h1>   <Link href={'./dashboard'}>dashboard</Link></h1>
     <h1>   <Link href={'./dynamic'}>dynaic</Link>
</h1>
<div>
<Image  src="/ayushimageji.jpg"

height={200}
width={200}
alt="whatshapp img"
/>
</div>


  </div>
   
  );
}
