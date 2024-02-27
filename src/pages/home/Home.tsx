import Style from "./style.module.css";

function Home() {
  return (
    <>
      <main className="bg-verde-banner">
        <div className="pt-5 flex flex-wrap items-center justify-center">
          <div className={`w-[19rem] h-[8rem] rounded-[22px] flex items-end p-2 ${Style.banner1}`}>
            <button className=" bg-laranja-btn text-branco p-2 rounded-[22px] font-bold ml-auto">Medicamentos</button>
          </div>
        </div>

        <div className="p-5 flex flex-wrap items-center justify-center">
          <div className={`w-[19rem] h-[8rem] rounded-[22px] flex items-end p-2 ${Style.banner3}`}>
            <button className=" bg-laranja-btn text-branco p-2 rounded-[22px] font-bold ml-auto">Equipamentos</button>
          </div>
        </div>

        <div className="pb-5 flex flex-wrap items-center justify-center">
          <div className={`w-[19rem] h-[8rem] rounded-[22px] flex items-end p-2 ${Style.banner2}`}>
            <button className=" bg-laranja-btn text-branco p-2 rounded-[22px] font-bold ml-auto">Naturais</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
