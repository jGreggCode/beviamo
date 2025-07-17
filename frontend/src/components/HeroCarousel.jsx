import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";

const HeroCarousel = ({
  img,
  title,
  subtitle,
  cn,
  slides,
  currentSlide,
  setCurrentSlide,
  goBack,
  goNext,
}) => {
  return (
    <div className="w-full relative">
      <div className="w-full absolute bg-white">
        <div
          className={`z-50 flex flex-col sm:flex-row border border-gray-400 relative inset-0 transition-opacity duration-1000 ${cn}`}
        >
          {/* HERO LEFT */}
          <div className="w-full relative">
            <img
              src={img}
              className="object-cover w-full z-0 h-[300px] md:h-[700px]"
              alt=""
            />

            {/* INDICATOR */}
            <div className="flex absolute bottom-4 left-1/2 translate-x-[-50%] gap-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentSlide
                      ? "bg-white"
                      : "bg-white bg-opacity-30"
                  }`}
                ></span>
              ))}
            </div>

            {/* Navigation */}
            <button
              onClick={goBack}
              className="absolute top-1/2 z-50 left-4 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-100"
            >
              <IoChevronBackSharp />
            </button>
            <button
              onClick={goNext}
              className="absolute top-1/2 right-4 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-100"
            >
              <IoChevronForwardSharp />
            </button>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex w-full sm:w-1/2 items-center justify-center py-10 sm:py-0 absolute h-full left-[-100px]">
            <div className="text-white">
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-white"></p>
                <p className="font-medium text-sm md:text-base">{title}</p>
              </div>
              <h1 className="text-3xl sm:py-3 lg:text-3xl leading-relaxed">
                {subtitle}
              </h1>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                <p className="w-8 md:w-11 h-[1px] bg-white"></p>
              </div>
            </div>
          </div>

          {/* SMALL SCREEN */}
          <div className="sm:flex bg-[#a0805e] md:hidden items-center py-10">
            <div className="text-white ml-10 mr-10">
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-11 h-[2px] bg-white"></p>
                <p className="font-medium text-sm md:text-base">{title}</p>
              </div>
              <h1 className="text-xl sm:py-3 lg:text-5xl leading-relaxed">
                {subtitle}
              </h1>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                <p className="w-8 md:w-11 h-[1px] bg-white"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
