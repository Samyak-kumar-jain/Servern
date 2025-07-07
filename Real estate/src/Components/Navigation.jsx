import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";

const Navigation = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "properties", label: "Properties" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    handleScroll(); // Run once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-14 right-14 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md top-5 left-20 right-20 rounded-2xl " : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Home className="h-8 w-8 text-primary text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">DreamHome</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 ">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors duration-200  ${
                activeSection === item.id
                  ? "text-primary  bg-blue-500 text-white px-5 py-1 rounded-xl"
                  : "text-gray-600"
              } hover:text-primary`}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("contact")}
            className="rounded-full text-white bg-blue-600 hover:bg-primary/90 px-6"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t px-4 py-4 space-y-4 animate-slide-in-down">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left text-base font-medium ${
                activeSection === item.id ? "text-primary" : "text-gray-700"
              } hover:text-primary`}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => handleNavClick("contact")}
            className="w-full rounded-full text-white bg-primary hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
