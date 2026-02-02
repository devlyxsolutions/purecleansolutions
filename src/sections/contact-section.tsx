import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative py-20 px-6 sm:px-16 overflow-hidden ">
      {/* Background Blurs */}
      <div className="absolute -top-32 -left-32 w-130 h-130 bg-green-300/20 blur-[220px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-0 w-130 h-130 bg-blue-400/10 blur-[220px] -z-10 rounded-full" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-600 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
          Have questions or want to book a cleaning? Reach out and our friendly team will help you!
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
              <FaPhoneAlt className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-green-700 mb-1">Phone</h4>
            <p className="text-gray-600 font-medium text-sm">0800 043 4416</p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
              <FaEnvelope className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-blue-700 mb-1">Email</h4>
            <p className="text-gray-600 font-medium text-sm">
              info@purecleansolutions.co.uk
            </p>
          </motion.div>

          {/* Address */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div className="bg-green-200 text-green-800 rounded-full p-4 mb-4">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-green-700 mb-1">Address</h4>
            <p className="text-gray-600 font-medium text-sm">
              25 Clean Street, London, UK
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
            Send Us a Message
          </h3>
          <form className="grid gap-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            {/* Message */}
            <textarea
              placeholder="Your Message"
              className="w-full rounded-xl border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-300 transition resize-none"
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold rounded-xl px-6 py-4 hover:bg-green-700 shadow-lg transition-transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
