'use client'

import CartaoProduto from "@/data/components/CartaoProduto"
import Pagina from "@/data/components/Pagina"
import produtos from "@/data/constants/produtos"
import useCarrinho from "@/data/hooks/useCarrinho"

export default function Shop(){
    const { number, increment, decrementar } = useCarrinho()
    return(
        <Pagina>
            <div className="flex bg-black h-screen flex-wrap text-white">
                <div className="w-72 h-52 flex">
                    {produtos.map(produto => (
                        <CartaoProduto key={produto.id} produto={produto} />
                    ))}
                </div>
            </div>
        </Pagina>
    )
}