
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../atoms/Button";

import background from "../../assets/background.png";

const images = [
  background,
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600",
];

const words = ["INNOVATE. GROW", "SUCCEED"];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-green-950 px-6 py-20 md:px-12">

      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Business background"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-green-950/65" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">

        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-sm font-bold uppercase tracking-[4px] text-lime-400"
          >
            Welcome to YourBrand
          </motion.p>

          {/* Animated Heading */}
          <div className="space-y-2">
            {words.map((word, index) => (
              <motion.h1
                key={word}
                initial={{
                  opacity: 0,
                  clipPath: "inset(0 100% 0 0)",
                }}
                animate={{
                  opacity: 1,
                  clipPath: "inset(0 0% 0 0)",
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 + index * 0.45,
                  ease: "easeOut",
                }}
                className="text-2xl font-extrabold tracking-tight text-white md:text-5xl"
              >
                {word}
                {index === 0 && (
                  <span className="text-lime-400">.</span>
                )}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-gray-200 md:text-lg"
          >
            We help businesses innovate, grow and succeed
            with smart strategies and modern solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="mt-8"
          >
            <Button href="#services">
              Explore Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "w-9 bg-lime-400"
                : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;
