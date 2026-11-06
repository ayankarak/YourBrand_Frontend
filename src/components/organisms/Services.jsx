import Button from "../atoms/Button";

const services = [
  {
    title: "Consulting",
    description: "Expert advice for greater impact.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
  },
  {
    title: "Technology",
    description: "Build smarter with modern technology.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
  },
  {
    title: "Business Growth",
    description: "Strategies for long-term success.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
  },
];

function Services() {
  return (
    <section id="services" className="bg-white px-5 py-12 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[3px] text-green-600">
            What We Offer
          </p>

          <h2 className="mt-2 text-4xl font-extrabold text-green-950">
            Our Services
          </h2>

          <p className="mt-2 text-gray-500">
            Tailored solutions to meet your needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold text-green-950">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>

                <div className="mt-4">
                  <Button href="#contact" variant="secondary">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;