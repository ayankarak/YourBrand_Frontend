
import Button from "../atoms/Button";

function ServiceCard({ title, description, image }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="p-5">
        <h3 className="text-lg font-bold text-green-950">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {description}
        </p>

        <div className="mt-4">
          <Button href="#contact" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
