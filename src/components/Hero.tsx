import heroImage from "../assets/images/hero3.png" ;

function Hero() {
  return (
    <div className="relative bg-linear-to-b from-[#938D81] to-[#CFCEC9] h-[calc(100vh-50px)] md:h-[calc(100vh-44px)]">
      <div className="w-3/4 h-full m-auto">
        <img src={heroImage} className=" w-full h-full object-contain" />
      </div>
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white font-main">
        <h1 className="uppercase">Veloretti Business</h1>
        <h2 className=" capitalize text-[52px] font-semibold">A Bike for better health and shape.</h2>
      </div>
    </div>
  )
}

export default Hero;