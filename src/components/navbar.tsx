import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/llg.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#pricing", label: "Pricing" },
    ];

    return (
        <>
            <nav className="z-50 flex items-center justify-between w-full h-20 px-4 md:px-16 lg:px-24 xl:px-40 text-sm">
                {/* Logo */}
                <Link to="/" className="flex items-center h-full">
                    <img
                        src={logo}
                        alt="Pure Clean Solutions"
                        className="h-37.5 w-auto object-contain mx-auto" // <-- Fixed height 50px
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
                    {navLinks.map((link) => (
                        <Link key={link.href} to={link.href} className="hover:text-green-600 transition">{link.label}</Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <Link to="/" className="hidden md:block px-7 py-2 bg-green-500 hover:bg-green-600 active:scale-95 transition-all rounded-full text-white">
                        Get a Quote
                    </Link>
                    <Link to="/" className="hidden md:block px-7 py-2 border border-gray-200 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition">
                    <MenuIcon />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-50 bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {navLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="text-white">{link.label}</Link>
                ))}
                <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex">
                    X
                </button>
            </div>
        </>
    );
}
