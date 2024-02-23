import { Link } from 'react-router-dom'
import { HeartStraight, Pill, UserCircle, UserPlus } from "phosphor-react";
import SubNavbar from "./SubNavbar";

function SuperNavbar() {
  return (
    <>
      <nav className="bg-white text-cinza-e border-b border-cinza-c">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center space-x-1">
            <Pill size={20} weight="fill" color="#FF1616" />
            <Link to='/home' className='hover:underline'>Bem-vindo ao Rapimed</Link>
          </div>
          <div className="flex space-x-4">
            <div className="flex space-x-1 hover:text-turqueza">     
                <UserCircle size={25} weight="light"/>
                <Link to='/login' className='hover:underline'>Logar</Link>
            </div>
            <div className="flex space-x-1 hover:text-turqueza">
              <UserPlus size={24} weight="light" />
              <Link to='/cadastro' className='hover:underline'>Cadastrar</Link>
            </div>
            <div className="flex space-x-1 hover:text-vermelho">
              <HeartStraight size={24} weight="light" />
              <div className='hover:underline'>Favoritos</div>
            </div>
          </div>
        </div>
      </nav>
      <SubNavbar/>
    </>
  );
}

export default SuperNavbar;
