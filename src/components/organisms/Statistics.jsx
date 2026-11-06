import { Users, Trophy, Target } from "lucide-react";

const stats = [
  { icon: Users, number: "10K+", label: "Happy Clients" },
  { icon: Trophy, number: "500+", label: "Projects Delivered" },
  { icon: Target, number: "98%", label: "Success Rate" },
];

function Statistics() {
  return (
    <section className="bg-white px-5 pb-12 md:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-3 rounded-2xl bg-lime-50 p-6">
        {stats.map(({ icon: Icon, number, label }) => (
          <div key={label} className="text-center">
            <Icon className="mx-auto mb-2 text-green-800" size={28} />
            <h3 className="text-2xl font-extrabold text-green-950">
              {number}
            </h3>
            <p className="mt-1 text-xs text-gray-600 md:text-sm">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;