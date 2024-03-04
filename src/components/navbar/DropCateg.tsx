import { Button, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { CaretDown } from "phosphor-react";
import { Link } from "react-router-dom";

function DropCateg() {
  return (
    <>
      <Menu>
        <MenuHandler>
          <Button placeholder={undefined} className="flex items-center gap-1 hover:text-turqueza hover:shadow-none rounded-md px-3 py-2 text-sm font-medium capitalize shadow-none bg-white text-back">
            Categorias
          <CaretDown/>
          </Button>
        </MenuHandler>
        <MenuList placeholder={undefined} className="flex flex-col bg-branco gap-2 text-center z-50 sm:z-10">
          <Link to='/categorias'  className="hover:text-turqueza">Ver categorias</Link>
          <Link to='/cadastrarCategoria' className="hover:text-turqueza">Criar categoria</Link>
        </MenuList>
      </Menu>
    </>
  );
}

export default DropCateg;
