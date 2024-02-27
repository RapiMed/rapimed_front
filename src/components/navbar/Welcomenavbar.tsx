import { Link } from "react-router-dom";
import {  Pill, UserCircle } from "phosphor-react";

function WelcomeNavbar() {
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
            <Link to="/login" className="hover:underline">
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t w-full border-cinza-c">
    </div>
    </>
  );
}

export default WelcomeNavbar;
