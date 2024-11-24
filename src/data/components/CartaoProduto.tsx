import Image from "next/image";
import Produto from "../model/Produto";

export interface CartaoProdutoProps{
    produto: Produto
}

export default function CartaoProduto( props: CartaoProdutoProps ){
    const { nome, descricao, preco, imagem } = props.produto;

    return(
        <div className="flex flex-col">
            <div style={{width: '14rem', height: '12rem', position: 'relative', marginTop: '10px'}}>
            {/* <div className="w-[100px] h-[100px] relative mt-10"> */}
                <Image src={imagem} alt={nome} height={100} width={300}  className="cursor-pointer object-cover" />
            </div>
            <div className="flex-1 bg-slate-900 p-2">
                <h2 className="text-xl font-bold text-center p-2">{nome}</h2>
                <p className="flex-1 text-sm text-slate-400"> {descricao} </p>

                <div className="flex items-center justify-around p-5">
                    <p className="text-lg  font-semibold mt-2 text-slate-200"> {preco} </p>
                    <button className="p-2 bg-green-600 ">Adicionar</button>
                </div>
            </div>
        </div>
    )
}