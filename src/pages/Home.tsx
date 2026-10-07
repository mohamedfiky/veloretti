import Hero from "../components/Hero";
import Image_Text from "../components/Image_Text";
import img_txt_1 from "../assets/images/img-text-1.jpg";
import img_txt_2 from "../assets/images/img-text-2.jpg";
import img_txt_3 from "../assets/images/img-text-3.jpg";

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

      <Image_Text imgLeft={false} imgSrc={img_txt_3}>
        <div className="lg:w-1/2 text-left text-gray-700 space-y-4 lg:ml-30">
          <h2 className=" text-center lg:text-left text-3xl sm:text-4xl leading-none font-semibold font-main mb-6">How it works</h2>
          <ul className="space-y-4 flex flex-col sm:flex-row sm:flex-wrap lg:flex-col items-start w-full">

            <li className="flex items-start gap-3 w-full sm:w-1/2 lg:w-full">
              <span className="shrink-0 w-6 h-7 rounded-[26px] bg-gray-200 "></span>
              <div className="">
                <h3 className="text-lg sm:text-base font-semibold font-main mb-2">Register your company</h3>
                <p className="w-full sm:w-4/5 text-sm mx-0 text-gray-400" >Fill in our registration form with your company details. After
                   your registration, our leasing partner will do a credit check. You
                   will hear whether your application has been approved within 24
                   hours.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3 w-full sm:w-1/2 lg:w-full">
              <span className="shrink-0 w-6 h-7 rounded-[26px] bg-gray-200 "></span>
              <div className="">
                <h3 className="text-lg sm:text-base font-semibold font-main mb-2">Determine the requirements</h3>
                <p className="w-full sm:w-4/5 text-sm mx-0 text-gray-400" >You get acces to the digital platform. Set the requirements for
                  your employees and share the registration link.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3 w-full sm:w-1/2 lg:w-full">
              <span className="shrink-0 w-6 h-7 rounded-[26px] bg-gray-200 "></span>
              <div className="">
                <h3 className="text-lg sm:text-base font-semibold font-main mb-2">Ride your bike!</h3>
                <p className="w-full sm:w-4/5 text-sm mx-0 text-gray-400" >Let's go! Your employees can choose their bikes and they'll be
                  delivered straight to their homes.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3 w-full sm:w-1/2 lg:w-full">
              <span className="shrink-0 w-6 h-7 rounded-[26px] bg-gray-200 "></span>
              <div className="">
                <h3 className="text-lg sm:text-base font-semibold font-main mb-2">Administration</h3>
                <p className="w-full sm:w-4/5 text-sm mx-0 text-gray-400" >Everything in one place. The digital platform gives you an easy
                  overview of all the information for your payroll.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </Image_Text>

      <div className="h-[1000px] bg-cyan-700"></div>


    </>
  )
}

export default Home;