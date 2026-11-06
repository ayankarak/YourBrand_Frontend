import Button from "../atoms/Button";
import about from "../../assets/about.png";

function About() {
  return (
    <section id="about" className="bg-white px-5 py-16 md:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-green-600">
            About Us
          </p>

          <h2 className="text-4xl font-extrabold text-green-950">
            Your Partner
            <br />
            in Progress
          </h2>

          <p className="mt-5 max-w-md leading-7 text-gray-600">
            We're committed to helping you achieve your goals with innovative
            solutions and dedicated support.
          </p>

          <div className="mt-6">
            <Button href="#services" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>

        <img
            src={about}
            alt="About our company"
            className="h-72 w-full rounded-3xl object-cover md:h-80"
        />
      </div>
    </section>
  );
}

export default About;