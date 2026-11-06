const links = ["Home", "About", "Services", "Resources", "Contact"];

function NavLinks({ onNavigate }) {
  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={onNavigate}
          className="text-sm font-medium text-white transition hover:text-lime-400"
        >
          {link}
        </a>
      ))}
    </>
  );
}

export default NavLinks;