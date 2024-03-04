function BannerCategoria(){

    return (
        <>
            <div className="bg-verde-banner w-full shadow mb-10 px-20">
                <div className="flex items-center justify-around p-5">
                    <div>
                    <p className="text-branco text-[30px] text-center">Lista de</p>
                    <p className="text-branco text-[50px] uppercase">Categorias</p>
                    </div>
                    <div className="w-[13rem]">
                        <img src="/imgcateg.png"/>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default BannerCategoria;