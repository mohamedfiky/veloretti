import heroImage from "../assets/images/hero.png" ;

function Hero() {
  return (
    <div className="relative bg-linear-to-b from-[#938D81] to-[#CFCEC9] h-auto sm:h-[calc(100vh-50px)] md:h-[calc(100vh-44px)]">
      <div className="w-full sm:w-3/4 h-full m-auto">
        <img src={heroImage} className=" w-full h-full object-contain" />
      </div>
      <div className=" absolute top-1/2 -translate-y-1/2 px-5 sm:px-10 text-white font-main space-y-1">
        <h1 className="uppercase">Veloretti Business</h1>
        <h2 className=" capitalize text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] font-semibold">A bike to keep you fit and healthy.</h2>
      </div>
    </div>
  )
}

export default Hero;