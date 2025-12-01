import heroImage from "../assets/images/hero3.png" ;

function Hero() {
  return (
    <div className="bg-linear-to-b from-[#938D81] to-[#CFCEC9] h-[calc(100vh-50px)] md:h-[calc(100vh-44px)]">
      {/* حط الصورة جوا div وإبقى إتحكم فى مساحته براحتك عشان تظبط ال responsive */}
      <img src={heroImage} className=" h-full w-full object-contain" />
    </div>
  )
}

export default Hero;