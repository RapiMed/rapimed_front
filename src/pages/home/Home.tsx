import { CarouselCustomArrows } from "../../components/CarouselCustomArrows";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";

function Home() {
  return (
    <>
      <main >
        <div className="bg-azul-bg p-2">
          <div className="w-full px-6 my-4 sm:w-2/3 m-auto sm:my-6">
            <CarouselCustomArrows />
          </div>
        </div>
        <div className="bg-gradient-to-r from-turqueza to-blue-400">
          <h3 className="text-center bold p-2 font-bold text-white text-3xl">
            Produtos
          </h3>
        </div>
        <div className="my-6">
          <ListaProdutos />
        </div>
      </main>
    </>
  );
}

export default Home;
