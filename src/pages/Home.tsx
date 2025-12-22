import Hero from "../components/Hero";
import ImageText from "../components/ImageText";
import img_txt_1 from "../assets/images/img-txt-1.jpg" ;
import img_txt_2 from "../assets/images/img-text-2.jpg" ;


function Home() {
  return (
    <>
      <Hero />
      <ImageText imgLeft={true} imgSrc={img_txt_1}>
        <div className="w-1/2">
          <h2>Bikes plan for everyone</h2>
          <p className="w-4/5">Veloretti Electrics benefit lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae harum ad in alias excepturi dolor necessitatibus laboriosam.</p>
          <button className="cursor-pointer">Discover More</button>
        </div>
      </ImageText>

      <div className="h-24 bg-amber-200"></div>

      <ImageText imgLeft={true} imgSrc={img_txt_2}>
        <div>

        </div>
      </ImageText>
    </>
  )
}

export default Home;