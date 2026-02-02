import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/llg.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, link: "https://www.facebook.com/purecleansolutions" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/purecleansolutions" },
    { icon: FaTwitter, link: "https://twitter.com/purecleansolutions" },
    { icon: FaInstagram, link: "https://www.instagram.com/purecleansolutions" },
  ];

  return (
    <footer className="relative bg-green-50 text-gray-600 mt-52 pb-5 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        animate={{ x: [-50, 50, -50], y: [-40, 40, -40], rotate: [0, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-green-300/30 to-blue-300/20 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{ x: [40, -40, 40], y: [30, -30, 30], rotate: [0, -15, 0] }}
        transition={{ duration: 28, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-bl from-green-300/20 to-blue-400/20 blur-[120px] rounded-full"
      />

      {/* Top CTA Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 flex flex-col md:flex-row justify-between items-center bg-white/10 backdrop-blur-md rounded-xl py-6 mb-16 border border-green-200 shadow-lg"
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-600">
            Ready to make your space shine?
          </h3>
          <p className="text-gray-700/90 mt-1 text-sm">
            Experience professional cleaning solutions with clarity, trust, and reliability.
          </p>
        </div>
        <Link to="/contact">
          <button className="mt-3 md:mt-0 px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            Contact Us
          </button>
        </Link>
      </motion.div>

      {/* Footer Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <Link to="/">
            <img src={logo} alt="Pure Clean Solutions Logo" className="h-30 w-auto" />
          </Link>
          <p className="text-gray-700 text-center md:text-left text-sm">
            Making every space shine.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-gray-800 font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-green-600 group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-lg">Connect</h3>
          <div className="flex items-center gap-5 text-gray-600">
            {socialLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="hover:text-green-600 transition-colors duration-300"
              >
                <item.icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 border-t border-green-200 pt-6 text-center text-gray-400 text-sm relative z-10">
        © {new Date().getFullYear()} <Link to="/" className="hover:text-green-600 font-medium">Pure Clean Solutions</Link>. All rights reserved.
      </div>
    </footer>
  );
}
