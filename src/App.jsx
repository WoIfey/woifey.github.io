const App = () => {
  function smooth() {
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="h-screen flex flex-wrap font-nunito text-white select-none overflow-x-hidden bg-[#1b1b1b]">
      <div className="bg-gradient-to-r from-orange-500 via-orange-500 to-yellow-500 h-full w-full md:w-[50%] flex flex-col justify-center md:justify-evenly items-center">
        <a href="https://github.com/WoIfey" target="_blank">
          <h1 className="text-[70px] lg:text-[110px] md:text-[80px] px-16 md:p-5 drop-shadow-xl text-orange-100 transition-all duration-300 ease-in-out transform hover:scale-110">
            WOLFEY
          </h1>
        </a>
        <div className="w-full flex justify-center">
          <a
            href="https://github.com/WoIfey/woifey.github.io"
            target="_blank"
            className="transition-all duration-300 ease-in-out transform hover:scale-110 drop-shadow-xl"
          >
            <p className="text-[70px] lg:text-[110px] md:text-[80px] px-16 md:p-5 mb-4">
              GITHUB
            </p>
          </a>
        </div>
        <div className="md:hidden block">
          <button href="#projects" className="m-2" onClick={smooth}>
            <img
              src="arrow-down.svg"
              alt="Down"
              className="bg-orange-200 rounded-full p-2 w-12 h-12"
            />
          </button>
        </div>
      </div>

      <div id="projects" className="h-full w-full md:w-[50%] flex flex-col">
        <div className="bg-[#2c2c2c] p-5 w-full">
          <div className="h-[50px] md:h-[100px]">
            <h1 className="text-[40px] md:text-[70px] mb-2 text-center">
              PROJECTS
            </h1>
          </div>
        </div>
        <div className="flex items-center flex-col mt-1 font-source">
          <div className="flex w-[90%] mb-16">
            <div className="h-[200px] w-[70%] mr-10 mt-5 transition-all duration-300 ease-in-out transform hover:scale-105">
              <p className="text-xl md:text-[25px] mb-1.5 text-center">
                SHORTENER
              </p>
              <a href="https://woifey.github.io/Shortener/" target="_blank">
                <img
                  src="1.webp"
                  alt="Shortener"
                  className="rounded-xl bg-cover bg-no-repeat w-full h-full object-cover"
                />
              </a>
              <p className="text-gray-400 text-[11px] md:text-[13px] ml-1 mt-1">
                SCHOOL PROJECT #1
              </p>
            </div>

            <div className="h-[200px] w-[70%] mt-5 transition-all duration-300 ease-in-out transform hover:scale-105">
              <p className="text-xl md:text-[25px] mb-1.5 text-center">
                ZERONETWORK
              </p>
              <a href="https://woifey.github.io/ZeroNetwork/" target="_blank">
                <img
                  src="3.webp"
                  alt="Shortener"
                  className="rounded-xl bg-cover bg-no-repeat w-full h-full object-cover"
                />
              </a>
              <p className="text-gray-400 text-[11px] md:text-[13px] ml-1 mt-1">
                MINECRAFT WEBSITE (OUTDATED)
              </p>
            </div>
          </div>

          <div className="flex w-[90%]">
            <div className="h-[200px] w-[70%] mr-10 mt-5 transition-all duration-300 ease-in-out transform hover:scale-105">
              <p className="text-xl md:text-[25px] mb-1.5 text-center">
                TRULLU
              </p>
              <a href="https://woifey.github.io/Trullu/" target="_blank">
                <img
                  src="2.webp"
                  alt="Trullu"
                  className="rounded-xl bg-cover bg-no-repeat w-full h-full object-cover"
                />
              </a>
              <p className="text-gray-400 text-[11px] md:text-[13px] ml-1 mt-1">
                SCHOOL PROJECT #2
              </p>
            </div>
            <div className="h-[200px] w-[70%] mt-5 transition-all duration-300 ease-in-out transform hover:scale-105">
              <p className="text-xl md:text-[25px] mb-1.5 text-center">
                JSEXERCISES
              </p>
              <a href="https://github.com/WoIfey/jsExercises" target="_blank">
                <img
                  src="4.webp"
                  alt="Shortener"
                  className="rounded-xl bg-cover bg-no-repeat w-full h-full object-cover"
                />
              </a>
              <p className="text-gray-400 text-[11px] md:text-[13px] ml-1 mt-1">
                PRACTICING JAVASCRIPT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
