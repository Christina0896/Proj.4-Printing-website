import Slider from './slide';
function HeroSection() {
  return (
    <div className="heroSection container mx-auto flex items-center justify-center ">
      {/*Typewrite slide*/}
      <div className="leftSlide p-4 ">
        <h3 className="flex font-bold items-center justify-center mt-15">Create your own</h3>
        <h2 className=" flex flex-col text-[68px] font-bold mt-5">
          <span>Make the most</span>
          <ul className=" typewriter ">
            <li>
              <span>of our t-shirt</span>
            </li>
            <li>
              <span>favourite custom</span>
            </li>
            <li>
              <span>designer ideas</span>
            </li>
          </ul>
          <span>printing</span>
        </h2>
        <p className="text-[18px] max-w-[550px] mt-5 mb-2.5">
          What’s more, we do it right! A full administration printing background. Print shirts for yourself or your
          online business
        </p>
         {/*Button*/}
        <div className="leftSlidebtn flex pb-15">
          <button className="defaultbtn  font-bold">Shop Now </button>
          <button className="flex ms-6  font-bold items-center">
            How We Work <img className="ms-3" src="/src/assets/play.svg" alt="" />
          </button>
        </div>
        {/*Numbers*/}
        <div className="numbers flex">
          <h2 className="flex flex-col ">
            12k+ <span>Collections</span>
          </h2>
          <div className="smallBorder mx-10"></div>
          <h2 className=" flex flex-col">
            26k+ <span>Items trusted to deliver</span>
          </h2>
        </div>
      </div>
       {/*Image Carousel*/}
      <div className="rightSlide">
        <Slider />
      </div>
    </div>
  );
}
export default HeroSection;
