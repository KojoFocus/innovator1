import { useState } from "react";
import {
  FaBars,
  FaTimes,
  // FaFacebook,
  // FaTwitter,
  // FaInstagram,
  // FaEnvelope,
  // FaPhone,
} from "react-icons/fa";

const LearnMore = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <>
      <div>
        <nav className="bg-[#FFFFFF] w-full py-4 fixed top-0 z-50 shadow-xl">
          <div className="flex justify-between items-center px-4 md:px-8">
            <a
              href="#"
              className="flex items-center space-x-2 text-[#6B8E23] text-2xl font-extrabold"
            >
              <span>Jeffery Snail Hub</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Products", "Vision", "Contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-[#6B8E23] text-lg hover:text-[#90EE90] transition-all"
                >
                  {section}
                </a>
              ))}
            </div>

            {/* Mobile Menu */}
            <button onClick={toggleMenu} className="md:hidden text-[#6B8E23]">
              {isMenuVisible ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {isMenuVisible && (
            <div className="md:hidden bg-[#FFFFFF] shadow-xl py-4">
              {["About", "Products", "Vision", "Contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="block px-4 py-2 text-[#6B8E23] hover:bg-[#90EE90] transition-all"
                >
                  {section}
                </a>
              ))}
            </div>
          )}
        </nav>
      </div>
      <div className="min-h-screen bg-[#F4F9F4] text-[#3E4B3A] flex items-center justify-center pt-20">
        <div className="text-center px-4 sm:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#6B8E23]">
            Learn More About Us
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed">
            At Jeffery Snail Hub, we are dedicated to pioneering sustainable
            solutions that revolutionize animal nutrition. With a strong
            commitment to eco-friendly practices, we strive to enhance the
            health, well-being, and performance of animals across the globe.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mt-4">
            Our journey began with a vision to address the growing demand for
            organic, environmentally-conscious supplements in the animal
            industry. By utilizing the power of organic snail shells, we provide
            high-quality, effective products that support both animal health and
            the planet's well-being.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mt-4">
            Our values are rooted in integrity, innovation, and sustainability.
            We believe in creating products that not only meet the needs of the
            industry today but also contribute to a greener, more sustainable
            future for tomorrow. Every step we take is guided by these
            principles, ensuring that our solutions benefit both animals and the
            environment.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mt-4">
            As we continue to grow, we aim to expand our impact, reaching more
            farmers, industries, and communities worldwide. With our
            eco-friendly approach, we aim to leave a lasting legacy of positive
            change in the animal nutrition space. Join us in making the world a
            healthier and more sustainable place for animals, one snail shell at
            a time.
          </p>
        </div>
      </div>

      <footer className="bg-[#6B8E23] text-white py-6">
        <div className="text-center">
          <p>© 2024 Jeffery Snail Hub. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default LearnMore;
