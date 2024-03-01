import Categoria from "./Categoria";
import Usuario from "./Usuario";


export default interface Produto{
    id?: number;
    nomeProduto: string;
    descricaoProduto: string;
    preco: number;
    fabricante: string
    foto: string;
    categoria?: Categoria | null; 
    usuario?: Usuario | null;
}