import Produto from "../model/Produto";

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Produto 1",
        preco: 10.99,
        descricao: "Descrição do produto 1",
        imagem: "/images/produto1.jpg"
    },
    {
        id: 2,
        nome: "Produto 2",
        preco: 15.99,
        descricao: "Descrição do produto 2",
        imagem: "/images/produto2.jpg"
    }
    // Outros produtos...
]

export default produtos;