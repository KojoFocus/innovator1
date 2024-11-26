import { useState } from "react";
import logo from "../assets/logo3.png"; // Replace with your logo for "SME Brand"

const NavBar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <nav className="bg-white w-full py-4 fixed top-0 z-50 shadow">
      <div className="flex justify-between items-center px-4 md:px-8">
        <a href="#" className="flex items-center space-x-2 text-primary text-2xl font-bold">
          <img src={logo} alt="SME Brand logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <span>SME Brand</span>
        </a>

        {/* Desktop Navigation (Hidden on mobile) */}
        <div className="hidden md:flex space-x-8">
          {["About", "Services", "Products", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-primary text-lg hover:underline"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-primary">
          {isMenuVisible ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation (Visible only when menu is toggled) */}
      {isMenuVisible && (
        <div className="md:hidden bg-white shadow-lg py-4">
          {["About", "Services", "Products", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="block px-4 py-2 text-primary hover:bg-gray-100"
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
