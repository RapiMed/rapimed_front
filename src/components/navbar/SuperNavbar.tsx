import { HeartStraight, Pill, UserCircle, UserPlus } from "phosphor-react";
import SubNavbar from "./SubNavbar";

function SuperNavbar() {
  return (
    <>
      <nav className="bg-white text-cinza-e border-b border-cinza-c">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center space-x-1">
            <Pill size={20} weight="fill" color="#FF1616" />
            <p>Bem-vindo ao Rapimed</p>
          </div>
          <div className="flex space-x-4">
            <div className="flex space-x-1 hover:text-turqueza">     
                <UserCircle size={25} weight="light"/>
              <a href="">Logar</a>
            </div>
            <div className="flex space-x-1 hover:text-turqueza">
              <UserPlus size={24} weight="light" />
              <a href="">Cadastrar</a>
            </div>
            <div className="flex space-x-1 hover:text-vermelho">
              <HeartStraight size={24} weight="light" />
              <a href="">Favoritos</a>
            </div>
          </div>
        </div>
      </nav>
      <SubNavbar/>
    </>
  );
}

export default SuperNavbar;
