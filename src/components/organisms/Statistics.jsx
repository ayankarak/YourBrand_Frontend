
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, Trophy, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    target: 10000,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Trophy,
    target: 500,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: Target,
    target: 98,
    suffix: "%",
    label: "Success Rate",
  },
];

function StatItem({ icon: Icon, target, suffix, label }) {
  const [count, setCount] = useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (!isInView) return;

    const duration = 3000;
    let animationFrame;
    let startTime;

    const updateCount = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Smooth easing effect
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target]);

  const displayNumber =
    target >= 10000 && count >= 1000
      ? count === target
        ? "10K+"
        : `${(count / 1000).toFixed(1)}K+`
      : `${count}${count === target ? suffix : ""}`;

  return (
    <div ref={ref} className="text-center">
      <Icon
        className="mx-auto mb-2 text-green-800"
        size={28}
      />

      <h3 className="text-2xl font-extrabold text-green-950">
        {displayNumber}
      </h3>

      <p className="mt-1 text-xs text-gray-600 md:text-sm">
        {label}
      </p>
    </div>
  );
}

function Statistics() {
  return (
    <section className="bg-white px-5 pb-12 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-3 rounded-2xl bg-lime-50 p-6">

        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            {...stat}
          />
        ))}

      </div>
    </section>
  );
}

export default Statistics;
