import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";

function FormularioProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nomeCategoria: "",
    descricaoCategoria: "",
    Produto: null,
  });

  const [produto, setProduto] = useState<Produto>({
    nomeProduto: "",
    descricaoProduto: "",
    preco: 0,
    fabricante: "",
    foto: "",
    categoria: null,
    usuario: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("Produto atualizada com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar o Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
            headers: {
                Authorization: token,
            },
        });;

        toastAlerta("Produto cadastrado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar o Produto", "erro");
        }
      }
    }
  }

  const carregandoCategoria = categoria.descricaoCategoria === "";

  return (
    <div className="container flex flex-col mx-auto items-center mb-10">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4 bg-azul-bg p-10 rounded-[22px] shadow">
        <div className="flex flex-col gap-2">
          <label htmlFor="nomeProduto">Nome</label>
          <input
            value={produto.nomeProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome do produto"
            name="nomeProduto"
            required
            className="border-2 border-slate-700 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricaoProduto">Descrição</label>
          <input
            value={produto.descricaoProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Texto"
            name="descricaoProduto"
            required
            className="border-2 border-slate-700 rounded p-2 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="fabricante">Fabricante</label>
          <input
            value={produto.fabricante}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Fabricante"
            name="fabricante"
            required
            className="border-2 border-slate-700 rounded p-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            name="preco"
            value={produto.preco}
            placeholder="Preço"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="border-2 border-slate-700 rounded p-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto">Foto</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Foto do Produto"
            name="foto"
            className="border-2 border-slate-700 rounded p-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Categoria do produto</p>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded outline-none"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>
                  {categoria.nomeCategoria}
                </option>
              </>
            ))}
          </select>
        </div>
        <button
          disabled={carregandoCategoria}
          type="submit"
          className="rounded disabled:bg-slate-200 bg-turqueza hover:bg-verde-banner text-white font-bold w-1/2 mx-auto block py-2"
        >
          {carregandoCategoria ? (
            <span>Carregando</span>
          ) : id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormularioProduto;
