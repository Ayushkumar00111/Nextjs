import Link from "next/link";

export default function Home() {
 
  return (
  <div>
    <h1>
    home is sweet home 
    </h1>
    <h1>   <Link href={'./dashboard'}>dashboard</Link>
</h1>


  </div>
   
  );
}
