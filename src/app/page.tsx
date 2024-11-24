'use client'
import { Carrinho } from "@/data/components/Carrinho";
import Pagina from "@/data/components/Pagina";

export default function Home() {
  return (
      <Pagina>
      <div className="text-white flex flex-col">
        <div className="text-5xl pt-12 pl-12 text-black bg-blue-700 h-screen overflow-hidden">
          <Carrinho />  
        </div>  
      </div>
    </Pagina>
  );
}
