import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { toastAlerta } from "../../../util/toastAlerta";
import Categoria from "../../../models/Categoria";

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "erro");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar o Categoria", "erro");
    }

    retornar();
  }
  return (
    <div className="container w-2/3 mx-auto sm:w-1/3">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-[22px]">
        <header className="py-2 px-6 bg-turqueza text-white font-bold text-2xl text-center truncate">
          {categoria.nomeCategoria}
        </header>
        <div className="flex flex-col items-center p-2">
          <div className="w-1/2"></div>
        </div>
        <div className="flex gap-2 m-2 mt-aut">
          <button
            className="w-1/2 text-white bg-turqueza hover:bg-verde-banner flex items-center justify-center py-2 rounded-[8rem]"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-1/2 text-white bg-red-400 hover:bg-red-700 flex items-center justify-center py-2 rounded-[8rem]"
            onClick={deletarCategoria}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
