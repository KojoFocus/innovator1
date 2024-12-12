import { useState } from "react";
import { FaBars, FaFacebook, FaTimes, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll
import snailProduct1 from "../assets/SnailProduct1.webp";
import snailProduct2 from "../assets/SnailProduct2.png";
import snailProduct3 from "../assets/SnailProduct3.webp";
import { FaInstagram } from "react-icons/fa6";

const HomePage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <div className="bg-[#F4F9F4] text-[#3E4B3A] font-sans">
      {/* Navbar */}
      <nav className="bg-[#FFFFFF] w-full py-4 fixed top-0 z-50 shadow-xl">
        <div className="flex justify-between items-center px-4 md:px-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-[#1A501E] text-2xl font-extrabold"
          >
            <span>Jeffery Snail Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["About", "Products", "Contact"].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()} // Updated to match section ID for smooth scroll
                spy={true} // Smooth scroll feature
                smooth={true}
                offset={-70} // Adjust for navbar height
                duration={500}
                className="text-[#1A501E] text-lg hover:text-[#90EE90] transition-all"
              >
                {section}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <button onClick={toggleMenu} className="md:hidden text-[#1A501E]">
            {isMenuVisible ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {isMenuVisible && (
          <div className="md:hidden bg-[#FFFFFF] shadow-xl py-4">
            {["About", "Products", "Contact"].map((section) => (
              <Link
                key={section}
                to={section.toLowerCase()} // Updated to match section ID for smooth scroll
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-4 py-2 text-[#1A501E] hover:bg-[#90EE90] transition-all"
              >
                {section}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero min-h-screen bg-[#1A501E] text-white flex items-center justify-center px-4 sm:px-12">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#F4F9F4] leading-tight">
            Revolutionizing Animal Nutrition
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-6">
            Eco-friendly organic snail shell supplements for optimal animal
            health and performance.
          </p>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <button className="px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-semibold text-white bg-[#90EE90] rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#F0FFF0] px-4 sm:px-8" id="about">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A501E]">
            Who We Are
          </h2>
          <p className="py-4 text-lg sm:text-xl">
            Jeffery Snail Hub is dedicated to creating innovative, eco-friendly
            solutions that improve animal health and performance sustainably.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Our Mission",
              content:
                "To provide innovative, effective, and sustainable organic snail shell supplements that enhance animal well-being.",
            },
            {
              title: "Our Vision",
              content:
                "To revolutionize animal nutrition with eco-friendly solutions that impact industries globally.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="card bg-[#FFFFFF] shadow-lg border border-[#1A501E] rounded-xl p-8 max-w-xs w-full"
            >
              <h3 className="text-2xl text-[#1A501E] font-semibold">
                {card.title}
              </h3>
              <p className="mt-4 text-lg">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-[#F9FFF9] px-4 sm:px-8" id="products">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A501E]">
            Our Products
          </h2>
          <p className="py-4 text-lg sm:text-xl">
            Premium organic snail shell supplements tailored for the poultry
            industry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[snailProduct1, snailProduct2, snailProduct3].map(
            (product, index) => (
              <div
                key={index}
                className="card bg-[#FFFFFF] shadow-lg border border-[#1A501E] rounded-xl hover:scale-105 transition-all"
              >
                <figure>
                  <img
                    src={product}
                    alt={`Product ${index + 1}`}
                    className="rounded-t-lg w-full h-56 sm:h-64 object-cover"
                  />
                </figure>
                <div className="card-body text-center p-8">
                  <h3 className="text-xl text-[#1A501E] font-semibold">
                    Snail Shell Product {index + 1}
                  </h3>
                  <p className="mt-4 text-lg">
                    Eco-friendly and sustainable solutions for animal nutrition.
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[#E8FFE8] px-4 sm:px-8" id="vision">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A501E]">
            Our Core Values
          </h2>
          <p className="py-4 text-lg sm:text-xl">
            We prioritize integrity, innovation, integration, and customer focus
            to drive growth and positive impact.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#F4F9F4] px-4 sm:px-8" id="contact">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A501E]">
            Contact Us
          </h2>
          <p className="py-4 text-lg sm:text-xl">
            We'd love to hear from you! Reach out for collaborations or
            inquiries.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <form>
              {/* Form Inputs */}
              <button
                type="button"
                onClick={() => {
                  const message = "Hello, I would like more information.";
                  const phoneNumber = "+233540484052";
                  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappLink, "_blank");
                }}
                className="w-full py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-[#1A501E] to-[#8FBC8F] rounded-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A501E] text-white py-6">
        {/* <div className="text-center">
          <p>© 2024 Jeffery Snail Hub. All Rights Reserved.</p>
        </div> */}
        <div className="text-center">
        <p>© 2024 Jeffery Snail Hub. All Rights Reserved.</p>
          <div className="flex justify-center space-x-8 pt-4">
            <a href="#" className="text-white hover:text-[#90EE90]">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="text-white hover:text-[#90EE90]">
              <FaTwitter size={30} />
            </a>
            <a href="#" className="text-white hover:text-[#90EE90]">
              <FaInstagram size={30} />
            </a>
          </div>
          </div>
      </footer>
    </div>
  );
};

export default HomePage;
