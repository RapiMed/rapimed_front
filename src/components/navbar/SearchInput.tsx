import { MagnifyingGlass } from "phosphor-react";

function SearchInput() {
  return (
    <div className="flex border border-cinza-c p-2 rounded-3xl w-full">
      <input
        type="text"
        placeholder="Pesquisar"
        className="outline-none w-full h-5"
      />
      <MagnifyingGlass size={18} weight="light" />
    </div>
  );
}

export default SearchInput;
