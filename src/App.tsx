import { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import product1 from "./assets/product1.png"
import product2 from "./assets/product2.png"
import product3 from "./assets/product3.png"


const App = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

  return (
    <div className="bg-[#F7F7F7] text-[#3D3D3D] font-sans">
      {/* Navbar */}
      <nav className="bg-[#FFFFFF] w-full py-4 fixed top-0 z-50 shadow-xl">
        <div className="flex justify-between items-center px-4 md:px-8">
          <a href="#" className="flex items-center space-x-2 text-[#388E3C] text-2xl font-extrabold">
            <span>Company Name</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["About", "Services", "Products", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-[#388E3C] text-lg hover:text-[#FFEB3B] transition-all"
              >
                {section}
              </a>
            ))}
          </div>

          {/* Mobile Menu */}
          <button onClick={toggleMenu} className="md:hidden text-[#388E3C]">
            {isMenuVisible ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuVisible && (
          <div className="md:hidden bg-[#FFFFFF] shadow-xl py-4">
            {["About", "Services", "Products", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="block px-4 py-2 text-[#388E3C] hover:bg-[#FFEB3B] transition-all"
              >
                {section}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero min-h-screen bg-[#388E3C] text-white flex items-center px-4 sm:px-12">
        <div className="text-center w-full">
          <h1 className="text-4xl sm:text-5xl font-bold">Welcome to Company Name</h1>
          <p className="py-6 text-lg sm:text-xl">
            Empowering industries with innovative solutions for a sustainable future.
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-[#2ECC71] to-[#27AE60] rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#F0F4F1] px-4 sm:px-8" id="about">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#388E3C]">Who We Are</h2>
          <p className="py-4 text-lg sm:text-xl">
            We are dedicated to providing sustainable and innovative solutions that drive growth in various sectors.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[ 
            { title: "Our Mission", content: "To promote sustainability and innovation in industries." },
            { title: "Our Vision", content: "To be the leading provider of eco-friendly solutions across industries." },
          ].map((card, index) => (
            <div
              key={index}
              className="card bg-[#FFFFFF] shadow-lg border border-[#388E3C] rounded-xl p-8 max-w-xs w-full"
            >
              <h3 className="text-2xl text-[#388E3C] font-semibold">{card.title}</h3>
              <p className="mt-4 text-lg">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#E8F5E9] px-4 sm:px-8" id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#388E3C]">Our Services</h2>
          <p className="py-4 text-lg sm:text-xl">Explore our innovative services designed to support your business.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Consulting", "Industry Solutions", "Training"].map((service, index) => (
            <div
              key={index}
              className="card bg-[#FFFFFF] shadow-lg border border-[#388E3C] rounded-xl hover:scale-105 transition-all"
            >
              <div className="card-body text-center p-8">
                <h3 className="text-xl text-[#388E3C] font-semibold">{service}</h3>
                <p className="mt-4 text-lg">Customized solutions to help you achieve your goals.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* Products Section */}
     <section className="py-16 bg-[#FFFFFF] px-4 sm:px-8" id="products">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#388E3C]">Our Products</h2>
          <p className="py-4 text-lg sm:text-xl">High-quality products for productivity and sustainability.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[product1, product2, product3].map((product, index) => (
            <div
              key={index}
              className="card bg-[#FFFFFF] shadow-lg border border-[#388E3C] rounded-xl hover:scale-105 transition-all"
            >
              <figure>
                <img
                  src={product}
                  alt={`Product ${index + 1}`}
                  className="rounded-t-lg w-full h-56 sm:h-64 object-cover"
                />
              </figure>
              <div className="card-body text-center p-8">
                <h3 className="text-xl text-[#388E3C] font-semibold">Product {index + 1}</h3>
                <p className="mt-4 text-lg">Eco-friendly products for sustainable experiences.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#F7F9F9] px-4 sm:px-8" id="contact">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2ECC71]">Contact Us</h2>
          <p className="py-4 text-lg sm:text-xl text-[#145A32]">We’d love to hear from you. Get in touch with us today.</p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-600 focus:border-green-600 transition duration-150 bg-white"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-600 focus:border-green-600 transition duration-150 bg-white"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-600 focus:border-green-600 transition duration-150 bg-white"
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-[#27AE60] to-[#2ECC71] rounded-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#388E3C] text-white py-6">
        <div className="text-center">
          <p className="text-lg">© 2024 Company Name. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-white hover:text-[#FFEB3B]"><FaFacebook size={24} /></a>
            <a href="#" className="text-white hover:text-[#FFEB3B]"><FaTwitter size={24} /></a>
            <a href="#" className="text-white hover:text-[#FFEB3B]"><FaInstagram size={24} /></a>
            <a href="mailto:contact@company.com" className="text-white hover:text-[#FFEB3B]"><FaEnvelope size={24} /></a>
            <a href="tel:+123456789" className="text-white hover:text-[#FFEB3B]"><FaPhone size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
