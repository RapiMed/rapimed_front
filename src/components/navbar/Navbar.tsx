import { CaretDown, CaretUp, Heart, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import WelcomeNavbar from "./Welcomenavbar";
import { useState } from "react";
import SearchInput from "./SearchInput";
import DropCateg from "./DropCateg";
import DropProd from "./DropProd";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openCategoriesMobile, setOpenCategoriesMobile] = useState(false);
  const [openProdutoMobile, setOpenProdutoMobile] = useState(false);

  return (
    <>
      <WelcomeNavbar />
      <div className="sticky top-0 bg-branco z-20">
        <nav className="border-b border-cinza-c">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800"
                  onClick={() => setOpen(!open)}
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-[3.5rem] w-auto"
                    src="/rapimed_logo.svg"
                    alt="Imagem da logo Rapimed"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className="hover:text-turqueza rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </Link>
                    <DropCateg />
                    <DropProd/>
                    <Link
                      to="/sobre"
                      className="hover:text-turqueza rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Sobre nós
                    </Link>
                    <Link
                      to="/contato"
                      className="hover:text-turqueza rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Contato
                    </Link>

                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
                <div className="hidden sm:block">
                  <SearchInput />
                </div>
                <button
                  type="button"
                  className="relative rounded-full  text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Carrinho</span>
                  <ShoppingCart size={25} />
                </button>

                <button
                  type="button"
                  className="relative rounded-full  text-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Favoritos</span>
                  <Heart size={25} />
                </button>
              </div>
            </div>
          </div>

          <div className={open ? "sm:hidden" : "hidden"} id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 outline-none">
              <Link
                to="/"
                className="block rounded-md px-3 py-2 text-base font-medium"
              >
                Home
              </Link>

              <div className="px-3 py-2">
                <div
                  onClick={() => setOpenCategoriesMobile(!openCategoriesMobile)}
                  className="flex items-center gap-1 rounded-md text-base font-medium"
                >
                  <div>Categorias</div>
                  <CaretDown
                    size={14}
                    className={`transition-all ${
                      openCategoriesMobile && "rotate-180"
                    }`}
                  />
                </div>
                <div
                  className={` transition-all rounded-md text-base font-medium overflow-hidden h-0 ${
                    openCategoriesMobile && "h-auto"
                  }`}
                >
                  <div className="px-3 pt-2 flex flex-col gap-2">
                    <Link to='/categorias'>Ver categorias</Link>
                    <Link to='/cadastroCategoria'>Criar categoria</Link>
                  </div>
                </div>
              </div>

              
              <div className="px-3 py-2">
                <div
                  onClick={() => setOpenProdutoMobile(!openProdutoMobile)}
                  className="flex items-center gap-1 rounded-md text-base font-medium"
                >
                  <div>Produtos</div>
                  <CaretDown
                    size={14}
                    className={`transition-all ${
                      openProdutoMobile && "rotate-180"
                    }`}
                  />
                </div>
                <div
                  className={` transition-all rounded-md text-base font-medium overflow-hidden h-0 ${
                    openProdutoMobile && "h-auto"
                  }`}
                >
                  <div className="px-3 pt-2 flex flex-col gap-2">
                    <Link to='/produtos'>Ver produtos</Link>
                    <Link to='/cadastroProduto'>Criar produto</Link>
                  </div>
                </div>
              </div>

              <Link
                to="/sobre"
                className="block rounded-md px-3 py-2 text-base font-medium"
              >
                Sobre nós
              </Link>
              <Link
                to="/contato"
                className="block rounded-md px-3 py-2 text-base font-medium"
              >
                Contato
              </Link>
            </div>
          </div>
        </nav>
        <div className="sm:hidden px-5 py-3 shadow">
          <SearchInput />
        </div>
      </div>
    </>
  );
}

export default Navbar;
