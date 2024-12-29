import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
              NT
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-700 hover:text-teal-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-teal-600 transition-colors">Projects</a>
            <a href="#certifications" className="text-gray-700 hover:text-teal-600 transition-colors">Certifications</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/nidhi" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/nidhi-thakore-10b9b825b/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:nidhi@example.com"
               className="text-gray-600 hover:text-gray-900">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-teal-600 bg">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-teal-600">About</a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Skills</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Projects</a>
            <a href="#certifications" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Certifications</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;