import servicesImage from "../assets/images/service.png" ;

function Services() {
  return (
    <div className="relative">
      <div className="w-full h-full m-auto">
        <img src={servicesImage} className=" w-full h-full object-contain" />
      </div>
      <div className=" absolute top-1/2 -translate-y-1/2 px-5 sm:px-10 lg:ml-10 text-white font-main space-y-5">
        <h2 className="text-3xl sm:text-[42px] leading-none font-medium font-main">Service, <br className="hidden lg:block" /> maintenance and <br className="hidden lg:block" /> insurance</h2>
        <p className="w-full lg:w-1/4 text-sm mx-0 text-gray-200">The lease includes an all-in service package. Throughout the entire 36 months, you are fully insured against damage, theft and maintenance. In addition, you always have access to roadside assistance. </p>
      </div>
    </div>
  )
}

export default Services;