import { Link, useNavigate } from "react-router-dom";
import { Pill, UserCircle } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";

function WelcomeNavbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  function login() {
    console.log("to clicando no loginnnnn")
    navigate("/login");
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center space-x-1">
            <Pill size={20} weight="fill" color="#FF1616" />
            <Link to="/home" className="hover:underline">
              Bem-vindo ao Rapimed
            </Link>
          </div>
          <div className="flex space-x-4">
            <div className="flex space-x-1 hover:text-turqueza">
              <UserCircle size={25} weight="light" />
              {usuario.token !== "" ? (
                <a
                  onClick={() => logout()}
                  className="hover:underline cursor-pointer"
                >
                  Sair
                </a>
              ) : 
              (
                <a
                  onClick={() => login()}
                  className="hover:underline cursor-pointer"
                >
                  Entrar
                </a>
              )
              }
            </div>
          </div>
        </div>
      </div>
      <div className="border-t w-full border-cinza-c"></div>
    </>
  );
}

export default WelcomeNavbar;
