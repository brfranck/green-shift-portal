import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  const location = useLocation();

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projets" },
    { href: "/blog", label: "Blog" },
    { href: "/team", label: "Équipe" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-primary">
            Green Shift
          </Link>
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-primary bottom-0"
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="p-2 text-gray-600 hover:text-primary">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};