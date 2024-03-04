import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar, deletar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      handleLogout();
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    console.log(produto.nomeProduto)
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Produto apagada com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar a Produto", "erro");
    }

    retornar();
  }
  return (
    <div className="container w-2/3 mx-auto sm:w-1/3">
      <h1 className="text-4xl text-center my-4">Deletar produto</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a produto a seguir?
      </p>

      <div className="border flex flex-col rounded-[22px]">
        <header className="py-2 px-6 bg-turqueza text-white font-bold text-2xl text-center truncate">
          {produto.nomeProduto}
        </header>
        <div className="flex flex-col items-center p-2">
          <div className="w-1/2">
            <img
              src={produto.foto != "" ? produto.foto : "/remediospng.png"}
              className="object-contain max-h-full max-w-none w-full h-full"
            />
          </div>
        </div>
        <div className="flex gap-2 m-2 mt-auto">
          <button
            className="w-1/2 text-white bg-turqueza hover:bg-verde-banner flex items-center justify-center py-2 rounded-[8rem]"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-1/2 text-white bg-red-400 hover:bg-red-700 flex items-center justify-center py-2 rounded-[8rem]"
            onClick={deletarProduto}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
