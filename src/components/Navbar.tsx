import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  // Close mobile menu on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills & Tools' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://github.com/nidhi', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/nidhi-thakore-10b9b825b/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:nidhi@example.com', icon: Mail, label: 'Email' }
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <span className="text-3xl font-bold bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              NT
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setActiveSection(href.slice(1))}
                className={`px-4 py-2 rounded-full text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-all duration-200
                  ${activeSection === href.slice(1) ? 'bg-gray-50 text-teal-600' : ''}`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-full transition-all duration-200"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 space-y-1 bg-white border-t border-gray-100">
          {menuItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                setActiveSection(href.slice(1));
                setIsOpen(false);
              }}
              className={`block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-all duration-200
                ${activeSection === href.slice(1) ? 'bg-gray-50 text-teal-600' : ''}`}
            >
              {label}
            </a>
          ))}
          
          {/* Mobile Social Links */}
          <div className="flex items-center space-x-2 px-4 py-3 border-t border-gray-100 mt-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-full transition-all duration-200"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;