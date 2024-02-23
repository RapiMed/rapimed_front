import { ChangeEvent, useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import "./Login.css";
import { At, LockSimple } from "phosphor-react";

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="bg-azul-bg w-full h-screen">
        <div className="w6/6 m-auto py-20 ml-20 relative">
          <img src="/bg.png" alt="Imagem de fundo ilustração" className="rounded-[22px]"/>
        </div>
        <div className="flex flex-col w-96 h-5/6 font-bold absolute  justify-center items-center bg-branco top-60 right-40 p-10 mr-20 rounded-[22px] shadow">
          <form
            className="flex justify-center items-center flex-col w-full gap-4 h-96" onSubmit={login}
          >
            <h2 className="text-cinza-text text-3xl text-center text-cinza-texto">Bem-vindo de volta!</h2>
            <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-cinza-text">Usuário</label>
            <div className="flex items-center border rounded-lg border-cinza-e pl-2">
            <At size={25} className="text-cinza-e"/>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-none rounded p-2 text-cinza-e outline-none"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
          </div>
          <div className="flex flex-col w-full text-cinza-texto">
            <label htmlFor="senha" className="text-cinza-text">Senha</label>
            <div className="flex items-center border rounded-lg border-cinza-e pl-2">
              <LockSimple size={25} className="text-cinza-e"/>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-none rounded p-2 text-cinza-e outline-none"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
          </div>
          <button  type='submit' className="rounded bg-vermelho-login-button hover:bg-vermelho-ho text-white w-1/2 py-2 flex justify-center">
           {isLoading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          /> :
            <span className="text-branco">Entrar</span>}
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-turqueza hover:underline">
              Cadastre-se
            </Link>
          </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
