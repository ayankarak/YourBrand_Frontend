
import { Leaf } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = ["Blog","FAQs","Support","Privacy Policy",];

  const socialIcons = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <>
      {/* CTA Section */}
      <section className="bg-green-950 px-5 py-8 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div>
            <h2 className="text-2xl font-bold">
              Let's Grow Together
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Get in touch and start your journey.
            </p>
          </div>

          <a
            href="mailto:hello@example.com"
            className="rounded-full bg-lime-400 px-6 py-3 font-bold text-green-950 transition hover:bg-lime-300"
          >
            Contact Us →
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <footer
        id="contact"
        className="bg-[#032719] px-5 py-12 text-white md:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Leaf className="h-7 w-7 fill-lime-400 text-lime-400" />
              YourBrand
            </a>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Building a brighter future through innovation,
              technology and sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-bold">
              Quick Links
            </h3>

            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mb-3 block text-sm text-gray-400 transition hover:text-lime-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-bold">
              Resources
            </h3>

            {resources.map((item) => (
              <a
                key={item}
                href="#contact"
                className="mb-3 block text-sm text-gray-400 transition hover:text-lime-400"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 font-bold">
              Follow Us
            </h3>

            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full bg-white/10 p-3 transition hover:bg-lime-400 hover:text-green-950"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <p className="mt-5 text-sm text-gray-400">
              Stay connected with us.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-gray-500 sm:flex sm:justify-between">
          <p>
            © 2026 YourBrand. All rights reserved.
          </p>

          <p className="mt-2 sm:mt-0">
            Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
