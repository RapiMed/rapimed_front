function Contact() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-verdinho py-6 sm:py-12">
        <div className="bg-white max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-6 h-full">
            <div className="bg-blue-900 col-span-2">
              <div>
                <img dir="ltr" src="/imgcontato.png" alt="" className="h-full w-fit rounded-lg-2xl" />
              </div>
            </div>
            <div className="bg-turqueza p-14 col-span-4 rounded-lg-2xl">
              <h2 className="mb-14 font-bold text-4xl text-branco before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4 ">
                Fale Conosco
              </h2>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                    placeholder="Nome"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                    placeholder="Sobrenome"
                  ></input>
                </div>
              </div>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-branco rounded-full px-6 placeholder:text-xs"
                    placeholder="Sugestão"
                  ></input>
                </div>
              </div>
              <div className="mb-6">
                <textarea
                  className="w-full rounded-2xl placeholder:text-xs px-6 py-4"
                  placeholder="Mensagem"
                  name=""
                  id=""
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button className="rounded-full bg-branco text-white font-bold py-4 px-6 min-w-40 hover:bg-verde-ho hover:text-branco transition-all">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
