import Hero from "../components/Hero";
import Image_Text from "../components/Image_Text";
import img_txt_1 from "../assets/images/img-text-1.jpg" ;
import img_txt_2 from "../assets/images/img-text-2.jpg" ;
import img_txt_3 from "../assets/images/img-text-3.jpg" ;


function Home() {
  return (
    <>
      <Hero />

      <Image_Text imgLeft={true} imgSrc={img_txt_1}>
        <div className="lg:w-1/2 text-center lg:text-left text-gray-700 space-y-4">
          <h2 className="text-3xl sm:text-4xl leading-none font-semibold font-main">Bikes plan for <br className="hidden lg:block" /> employees</h2>
          <p className="w-4/5 text-sm mx-auto lg:mx-0">Veloretti Electrics benefit lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae harum ad in alias excepturi dolor necessitatibus laboriosam.</p>
          <button className="cursor-pointer text-sm">Discover More</button>
        </div>
      </Image_Text>

      <div className="h-24 bg-amber-200"></div>

      <Image_Text imgLeft={true} imgSrc={img_txt_2}>
        <div className="lg:w-1/2 text-center lg:text-left text-gray-700 space-y-4">
          <h2 className="text-3xl sm:text-4xl leading-none font-semibold font-main">Free of charge for <br className="hidden lg:block" /> employers</h2>
          <p className="w-4/5 text-sm mx-auto lg:mx-0">That bike plan is totally lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae harum ad in alias excepturi dolor necessitatibus laboriosam.</p>
          <button className="cursor-pointer text-sm">Cost Example</button>
        </div>
      </Image_Text>

      <div className="h-24 bg-amber-200"></div>

      <Image_Text imgLeft={false} imgSrc={img_txt_3}>
        <div className="lg:w-1/2 text-center lg:text-left text-gray-700 space-y-4">
          <h2 className="text-3xl sm:text-4xl leading-none font-semibold font-main">How it works</h2>
          
        </div>
      </Image_Text>

      <div className="h-[1000px] bg-cyan-700"></div>


    </>
  )
}

export default Home;