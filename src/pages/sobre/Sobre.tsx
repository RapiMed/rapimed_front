function Sobre() {
  return (
    <>
      <div className="py-16 bg-branco">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src="/aboutimg.png" />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                O Projeto Rapimed é:
              </h2>
              <p className="mt-6 text-gray-600 ">
                A Rapimed é uma plataforma de comércio eletrônico dedicada a
                fornecer medicamentos a preços acessíveis para pessoas carentes.
                Seu foco principal está em tornar os produtos mais alcançáveis
                para aqueles que enfrentam dificuldades financeiras
                permitindo-lhes adquirir os produtos de que necessitam a preços
                mais baixos.
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                Essa iniciativa busca atender às necessidades de saúde da
                comunidade, garantindo que todos tenham acesso aos medicamentos
                essenciais de forma mais econômica e conveniente.
              </p>
            </div>
          </div>
          <div className="bg-turqueza rounded-lg m-5 p-1 w-1/4 text-center text-branco mx-auto font-bold hover:bg-verde-e">
            <a href="https://linktr.ee/rapimed1">Quem Somos</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
