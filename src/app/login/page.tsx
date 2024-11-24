'use client'
import { Carrinho } from "@/data/components/Carrinho";
import useCarrinho from "@/data/hooks/useCarrinho";

export default function Login(){
    const { number, increment, decrementar } =  useCarrinho()
    return(
        <div className="h-screen w-full flex relative">
            <div className="absolute -top-16 right-5">
                <Carrinho />
            </div>
            <img className="flex-1" src="https://hypescience.com/wp-content/uploads/2016/05/espaco-tres-dimensoes-3d.jpg" alt="" />
            <form className="h-80 absolute rounded-lg flex-col flex gap-5 top-36 left-[42%] opacity-50 bg-slate-900 p-10">
                
                <div className="form-container flex flex-col items-center justify-center gap-10">
                    <h1 className="text-white text-3xl mb-4">Seja bem vindo</h1>

                    <Carrinho />

                    <div className="bg-yellow-500 text-center py-2 text-white rounded-md"> 
                        <button className="bg-green-500 p-2 px-4 rounded-full mr-2" onClick={ increment } > + </button>
                            { number }
                        <button className="bg-red-500 p-2 px-4 rounded-full ml-2" onClick={ decrementar }> - </button>
                    </div>
                </div>
            </form>
        </div>
    )
}