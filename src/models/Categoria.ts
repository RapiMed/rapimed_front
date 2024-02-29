import Produto from "./Produto";

export default interface Categoria{
    id: number;
    nomeCategoria: string;
    descricaoCategoria: string;    
    Produto?: Produto | null;
    
}