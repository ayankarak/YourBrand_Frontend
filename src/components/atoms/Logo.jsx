import { Leaf } from "lucide-react";

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 text-white">
      <Leaf className="h-7 w-7 fill-lime-400 text-lime-400" />
      <span className="text-xl font-bold">YourBrand</span>
    </a>
  );
}

export default Logo;