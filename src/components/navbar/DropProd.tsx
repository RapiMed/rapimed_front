import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { CaretDown } from "phosphor-react";
import { Link } from "react-router-dom";

function DropProd() {
    return (
      <>
        <Menu>
          <MenuHandler>
            <Button placeholder={undefined} className="flex items-center gap-1 hover:shadow-none shadow-none hover:text-turqueza rounded-md px-3 py-2 text-sm font-medium capitalize bg-white text-back">
              Produtos
              <CaretDown/>
            </Button>
          </MenuHandler>
          <MenuList placeholder={undefined} className="flex flex-col bg-branco gap-2 text-center z-50 sm:z-10">
            <Link to='/produtos'  className="hover:text-turqueza">Ver produtos</Link>
            <Link to='/cadastroProduto' className="hover:text-turqueza">Criar produto</Link>
          </MenuList>
        </Menu>
      </>
    );
  }
  
  export default DropProd;
  