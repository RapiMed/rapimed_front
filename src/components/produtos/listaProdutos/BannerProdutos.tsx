function BannerProdutos(){

    return (
        <>
            <div className="bg-verde-banner w-full shadow mb-5 px-20 py-5">
                <div className="flex items-center justify-around pt-4">
                    <div>
                    <p className="text-branco text-[30px] text-center">Lista de</p>
                    <p className="text-branco text-[50px] uppercase">Produtos</p>
                    </div>
                    <div className="w-[15rem]">
                        <img src="/imgprod.png"/>
                    </div>  
                </div>
            </div>
        </>
    )

}

export default BannerProdutos;