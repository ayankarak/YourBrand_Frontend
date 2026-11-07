
import { useEffect, useRef, useState } from "react";
import { Users, Trophy, Target } from "lucide-react";
import { useInView } from "framer-motion";

const stats = [
  { icon: Users, number: 10000, suffix: "+", label: "Happy Clients" },
  { icon: Trophy, number: 500, suffix: "+", label: "Projects Delivered" },
  { icon: Target, number: 98, suffix: "%", label: "Success Rate" },
];

function StatItem({ icon: Icon, number, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let animationFrame;
    let interval;
    let startTime = null;

    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(number * easeOut));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    const startAnimation = () => {
      cancelAnimationFrame(animationFrame);
      startTime = null;
      setCount(0);
      animationFrame = requestAnimationFrame(animate);
    };

    startAnimation();

    interval = setInterval(startAnimation, 4000);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, number]);

  const formattedCount =
    number === 10000 && count === number
      ? "10K"
      : count.toLocaleString("en-IN");

  return (
    <div ref={ref} className="text-center">
      <Icon className="mx-auto mb-3 h-8 w-8 text-green-700" />

      <h3 className="text-3xl font-extrabold text-green-950">
        {formattedCount}{suffix}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {label}
      </p>
    </div>
  );
}

function Statistics() {
  return (
    <section className="bg-white px-5 py-12 md:px-12">
      <div className="mx-auto max-w-7xl rounded-3xl bg-lime-50 px-6 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
