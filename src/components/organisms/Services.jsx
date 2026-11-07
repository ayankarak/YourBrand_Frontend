
import ServiceCard from "../molecules/ServiceCard";

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
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
