import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import ContextoCarrinho from "../contexts/ContextoCarrinho";

export function Carrinho() {
    const { number } = useContext(ContextoCarrinho)
    return (

        <div className="relative w-10">
            <FaCartShopping className="text-white text-3xl" />
            <div className="text-white text-xs bg-red-600 h-5 w-5 flex 
        items-center justify-center rounded-full absolute -top-3 right-0">{number}</div>
        </div>
    )
}