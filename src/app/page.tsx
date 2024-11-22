import Pagina from "@/data/components/Pagina";
import Link from "next/link";

export default function Home() {
  return (
    <Pagina>
      <div className="text-white flex flex-col">
        <header className="bg-slate-800 p-5 flex items-center justify-between">
          <div className="
              p-2 
              w-20 
              h-20 
              flex 
              flex-col 
              items-center 
              justify-center
              rounded-full 
              cursor-pointer
              duration-300 
              hover:scale-110 
              bg-blue-600
              hover:bg-green-700">
            <h2>A Z</h2>
            <img width={35} src="image/logo.png" alt="logo" />
          </div>
          <Link href="/login" className="bg-blue-600 p-2 px-5 rounded-md hover:bg-green-700 hover:scale-110 duration-300">Login</Link>
        </header>
      </div>
    </Pagina>
  );
}
