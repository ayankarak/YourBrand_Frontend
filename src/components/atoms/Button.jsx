import { ArrowRight } from "lucide-react";

function Button({ children, href = "#contact", variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-lime-400 text-green-950 hover:bg-lime-300"
      : "bg-green-800 text-white hover:bg-green-700";

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${styles}`}
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}

export default Button;