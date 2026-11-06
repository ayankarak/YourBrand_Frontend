import Button from "../atoms/Button";
import background from "../../assets/background.png";

function Hero() {
  return (
    <section
        id="home"
        className="relative flex min-h-[600px] items-center overflow-hidden bg-cover bg-center px-5 pt-24 md:min-h-[650px] md:px-12"
        style={{
            backgroundImage: `linear-gradient(
            90deg,
            rgba(0,35,20,0.85),
            rgba(0,35,20,0.25)
            ), url(${background})`,
        }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl pb-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Innovate. Grow.
            <span className="block text-lime-400">
              Succeed.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-200 md:text-lg">
            Smart solutions for a brighter and more successful future.
          </p>

          <div className="mt-8">
            <Button href="#about">Explore More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;