import Style from "./style.module.css";

function Home() {
  return (
    <>
      <main className={Style.container}>
        <div className="p-24 flex flex-wrap items-center justify-center">
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center w-80">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
              <img className="relative w-40" src="/img1.jpg" alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">Indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Categoria</span>
                <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                  {">"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center w-80">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
              <img className="relative w-40" src="/img2.jpg" alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">Outdoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Categoria</span>
                <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                  {">"}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
            <svg
              className="absolute bottom-0 left-0 mb-8"
              viewBox="0 0 375 283"
              fill="none"
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center w-80">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
              <img className="relative w-40" src="/img3.jpg" alt="" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">Outdoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">Categoria</span>
                <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                  {">"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
