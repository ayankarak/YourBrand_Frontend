
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Owner",
    review:
      "The team helped us improve our business strategy and achieve better results. Their approach was professional and effective.",
    rating: 5,
    initials: "RS",
  },
  {
    id: 2,
    name: "Priya Das",
    role: "Startup Founder",
    review:
      "Their technology solutions made our workflow much smoother. I really appreciate their support and dedication.",
    rating: 5,
    initials: "PD",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Marketing Manager",
    review:
      "A great experience working with this team. Their ideas and guidance helped us move in the right direction.",
    rating: 5,
    initials: "AM",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-green-950 px-5 py-20 md:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[3px] text-lime-400">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            Discover what people say about their experience
            working with us.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-white/10 bg-white p-7 shadow-lg transition-shadow hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="mb-5 flex items-center justify-between">
                <Quote
                  size={35}
                  className="fill-lime-400 text-lime-400"
                />

                <div className="flex gap-1">
                  {Array.from(
                    { length: testimonial.rating },
                    (_, i) => (
                      <Star
                        key={i}
                        size={17}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>
              </div>

              {/* Review */}
              <p className="min-h-28 leading-relaxed text-gray-600">
                "{testimonial.review}"
              </p>

              {/* Customer Details */}
              <div className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900 font-bold text-lime-400">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="font-bold text-green-950">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
