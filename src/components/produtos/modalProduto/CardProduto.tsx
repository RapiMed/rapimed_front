import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden shadow w-full h-full max-w-[250px] m-auto ">
      <div className="bg-gray-50 h-52 w-full p-4">
        <img
          src={produto.foto != "" ? produto.foto : "/remediospng.png"}
          className="object-contain max-h-full max-w-none w-full h-full"
        />
      </div>

      <div className="m-4">
        <h4 className="text-lg font-semibold uppercase line-clamp-2">
          {produto.nomeProduto}
        </h4>
        <p>{produto.descricaoProduto}</p>
        <p>Categoria: {produto.categoria?.nomeCategoria}</p>
        <p className="py-1 my-2 bg-red-100 w-1/3 text-center rounded-[22px] font-bold text-gray-700 mb-auto">R$ {produto.preco}</p>
      </div>

      <div className="flex gap-2 m-2 mt-auto">
        <Link
          to={`/editarProduto/${produto.id}`}
          className="w-1/2 text-white bg-turqueza hover:bg-verde-banner flex items-center justify-center py-2 rounded-[8rem]"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarProduto/${produto.id}`}
          className="text-white bg-red-400 hover:bg-red-700 w-1/2 flex items-center justify-center rounded-[8rem]"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
