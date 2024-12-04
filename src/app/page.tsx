import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center ">
     <Link href={'/dashboard'}><button className="bg-orange-300 px-5 py-2 rounded-2xl">Go to Dashboard</button></Link>
    </div>
  );
}
