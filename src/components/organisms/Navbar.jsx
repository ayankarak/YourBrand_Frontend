import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../atoms/Logo";
import NavLinks from "../molecules/NavLinks";
import Button from "../atoms/Button";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="absolute left-0 top-0 z-50 w-full px-5 md:px-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between py-5">
                <Logo />

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 md:flex">
                    <NavLinks />
                    <Button href="#contact">Get Started</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white md:hidden"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="absolute left-0 top-full flex w-full flex-col gap-5 bg-green-950 p-6 md:hidden">
                    <NavLinks onNavigate={closeMenu} />
                    <Button href="#contact">Get Started</Button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;