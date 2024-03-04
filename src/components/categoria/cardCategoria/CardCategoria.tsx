import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    <div className='px-6 py-2 w-[19rem] font-semibold  border-l-2 border-b-[5px] shadow rounded-[15px]  bg-verde-banner border-bb5 '>
      <p className='py-6 text-center text-2xl bg-slate-200 w-full text-branco font-semibold'>{categoria.nomeCategoria}</p>
      <div className="flex justify-around m-4 text-bb3 font-semibold">
        <Link to={`/editarCategoria/${categoria.id}`} className=' py-2 px-4 border-l-2 border-b-4 rounded-[22px] bg-bb1 hover:bg-bb5 hover:text-branco hover: flex items-center justify-center border-bb5'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className=' py-2 px-4 rounded-[22px] border-l-2 border-b-4 bg-bb2 hover:bg-bb4 hover:text-branco flex items-center justify-center border-bb5'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias;