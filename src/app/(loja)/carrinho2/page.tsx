import produtos from "@/data/constants/produtos";

    // export default function Carrinho2( props: CartaoProdutoProps ) {
    export default function Carrinho2( ){

    return (
        <div className="flex gap-2 items-center justify-center px-10 mt-5 w-[900px]">
                {produtos.map(item => (
                    <div key={item.id} className="">
                        <div className="img h-[100] w-64">
                            <img src={item.imagem} alt="imagem produto" height={300} width={300} />
                        </div>
                        <div className="h-64 bg-slate-900 p-2">
                            <h2 className="text-xl font-bold text-center p-2 text-white">{item.nome}</h2>
                            <p className="flex-1 text-sm text-slate-400"> {item.descricao} </p>
                            <div className="flex items-center justify-around p-5">
                                <p className="text-lg  font-semibold mt-2 text-slate-200"> R$ {item.preco} </p>
                                <button className="p-2 bg-green-600 rounded-lg">Adicionar</button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>

    )
}