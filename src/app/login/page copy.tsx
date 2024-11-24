'use client'
import { useContext } from "react";

import ContextoCarrinho from "@/data/contexts/ContextoCarrinho";

export default function Login(){

    const { number, name } =  useContext(ContextoCarrinho)

    return(
        <div className="h-screen w-full flex">
            <img className="flex-1" src="https://hypescience.com/wp-content/uploads/2016/05/espaco-tres-dimensoes-3d.jpg" alt="" />
            <form className="h-96 absolute rounded-lg flex-col flex gap-5 top-40 left-[42%] opacity-50 bg-slate-900 p-10">
                <h1 className="text-white text-3xl mb-4">Seja bem vindo</h1>

                <h3 className="bg-red-500 text-center py-2 text-white rounded-md"> { number } - { name } </h3>

                <input type="text" placeholder="E-mail" className="p-2 rounded-md"/>
                <input type="password" className="p-2 rounded-md" placeholder="Senha"/>
                
                <button type="submit" className="bg-blue-600 hover:bg-green-600 duration-300 hover:scale-105 p-2 rounded-md 
                text-white font-bold">
                    Login
                </button>
            </form>
        </div>
    )
}