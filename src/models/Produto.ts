import Categoria from "./Categoria";


export default interface Produto{
    id: number;
    nomeProduto: string;
    descricaoProduto: string;
    preco: number;
    fabricante: string
    foto: string;
    Categoria?: Categoria | null;
    
}