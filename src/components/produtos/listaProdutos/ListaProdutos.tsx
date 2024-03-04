import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import Produto from '../../../models/Produto';
import { buscarProduto } from '../../../services/Service';

import { toastAlerta } from '../../../util/toastAlerta';
import CardProduto from '../modalProduto/CardProduto';

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      await buscarProduto('/produtos/all', setProdutos);
    } catch (error: any) {
        toastAlerta('Erro ao carregar produtos', 'info')
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>
      {produtos.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-auto mb-5'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;