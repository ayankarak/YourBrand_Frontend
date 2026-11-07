
import Button from "../atoms/Button";
import about from "../../assets/about.png";

function About() {
  return (
    <section id="about" className="bg-white px-5 py-20 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-green-600 md:text-base">
            About Us
          </p>

          <h2 className="text-5xl font-extrabold leading-tight text-green-950 md:text-6xl">
            Your Partner
            <br />
            in Progress
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 md:text-lg md:leading-9">
            We're committed to helping you achieve your goals with innovative
            solutions and dedicated support.
          </p>

          <div className="mt-8">
            <Button href="#services" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>

        <img
          src={about}
          alt="About our company"
          className="h-72 w-full rounded-3xl object-cover md:h-96"
        />

      </div>
    </section>
  );
}

export default About;
