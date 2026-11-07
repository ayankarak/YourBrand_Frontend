
import { motion } from "framer-motion";
import {Sprout,ShieldCheck,Users,Headset,} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Sustainable Growth",
    icon: Sprout,
  },
  {
    id: 2,
    title: "Trusted Services",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Expert Team",
    icon: Users,
  },
  {
    id: 4,
    title: "24/7 Support",
    icon: Headset,
  },
];

function Highlights() {
  return (
    <section className="relative z-20 -mt-8 bg-transparent px-5 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg md:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center gap-3 px-3 py-7 text-center transition-colors hover:bg-green-50 md:py-8"
              >
                <Icon
                  size={30}
                  strokeWidth={2.5}
                  className="text-green-700"
                />

                <h3 className="max-w-32 text-sm font-bold text-green-950 md:text-base">
                  {feature.title}
                </h3>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Highlights;
