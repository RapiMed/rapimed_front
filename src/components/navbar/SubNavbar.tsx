import { MagnifyingGlass, ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";

function SubNavbar(){
    return(
        <>  
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-2">
                <div className="w-28">
                    <img src="/rapimed_logo.svg" alt="Imagem da logo Rapimed"/>
                </div>
                <div className="flex items-center space-x-5">
                    
                <Link to="/" className="hover:text-turqueza">Home</Link>
                    <Link to="/categorias" className="hover:text-turqueza">Categorias</Link>
                    <Link to="/cadastrarCategorias" className="hover:text-turqueza">Cadastrar Categorias</Link>
                    <Link to="/sobre" className="hover:text-turqueza">Sobre nós</Link>
                    <Link to="/contato" className="hover:text-turqueza">Contato</Link>
                </div>
                <div className="flex items-center space-x-5">
                    <div className="flex border p-2 rounded-3xl">
                        <input type="text" placeholder="Pesquisar" className="outline-none"/>
                        <MagnifyingGlass size={20} weight="light" />
                    </div>
                    <div className="flex items-center space-x-2 bg-turqueza text-branco outline-none p-3 rounded-3xl font-bold shadow hover:bg-verde-e">
                        <ShoppingCartSimple size={25} weight="light" />
                        <a href="">Carrinho</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubNavbar;