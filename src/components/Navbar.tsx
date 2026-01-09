import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          if (location.pathname !== '/') {
            // If not on home page, active section logic might be simpler or different
            // For now, if on certifications page, keep it active
            if (location.pathname === '/certifications') {
              setActiveSection('Certifications');
            }
            ticking = false;
            return;
          }

          // Only update active section if not manually scrolling (clicked a link)
          if (!isManualScroll) {
            const sections = navLinks
              .filter(link => link.href.startsWith('/#'))
              .map(link => link.href.substring(2)); // remove '/#'

            for (const section of sections) {
              const element = document.getElementById(section);
              if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                  const foundLink = navLinks.find(link => link.href === `/#${section}`);
                  if (foundLink) {
                    setActiveSection(prev => prev !== foundLink.name ? foundLink.name : prev);
                  }
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManualScroll]); // Depend on isManualScroll

  /* Update active section based on path changes immediately */
  useEffect(() => {
    if (location.pathname === '/certifications') {
      setActiveSection('Certifications');
      window.scrollTo(0, 0);
    } else if (location.pathname === '/experience') {
      setActiveSection('Experience');
      window.scrollTo(0, 0);
    } else if (location.pathname === '/') {
      // If we just landed on home, we might want to check hash
      if (location.hash) {
        const section = location.hash.substring(1);
        const element = document.getElementById(section);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        window.scrollTo(0, 0);
        setActiveSection('Home');
      }
    }
  }, [location]);

  const handleNavClick = (name: string, href: string) => {
    setActiveSection(name);
    setIsManualScroll(true);
    setIsOpen(false);

    if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        // The useEffect above will handle the scroll after navigation
        // But we can also use a timeout here to try to ensure it
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }

    // Reset manual scroll lock after animation completes
    setTimeout(() => {
      setIsManualScroll(false);
    }, 1000);
  };

  const sidebarVariants: Variants = {
    closed: { x: "100%", transition: { type: "tween", duration: 0.5, ease: "easeInOut" } },
    open: { x: "0%", transition: { type: "tween", duration: 0.5, ease: "easeInOut" } }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled ? "py-3 bg-black/50 backdrop-blur-xl border-b border-white/10" : "py-5 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/#home" className="flex items-center gap-2 group z-50" onClick={(e) => { e.preventDefault(); handleNavClick('Home', '/#home'); }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <h2 className="text-2xl font-black tracking-[0.2em] uppercase">
                NIDHI <span className="text-blue-600 font-light">THAKORE</span>
              </h2>
            </motion.div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.name, link.href); }}
                className={clsx(
                  'relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeSection === link.name ? 'text-white' : 'text-gray-400 hover:text-white'
                )}
              >
                {activeSection === link.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-full border border-primary-500/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                    transition={{ type: "tween", duration: 0.3, ease: "circOut" }}
                  />
                )}
                {link.name}
              </a>
            ))}
          </div>

          {/* Social & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <div className="hidden md:flex items-center gap-3">
              <a href="https://github.com/tech-nidhi" target="_blank" rel="noopener" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/nidhi-thakore-10b9b825b/" target="_blank" rel="noopener" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Linkedin size={20} /></a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-6 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.name, link.href); }}
                  className={clsx(
                    "text-3xl font-heading font-bold transition-colors",
                    activeSection === link.name ? "text-primary-400" : "text-white hover:text-primary-400"
                  )}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 mt-8 p-6 border-t border-white/10 w-full justify-center"
            >
              <a href="https://github.com/tech-nidhi" target="_blank" rel="noopener" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/nidhi-thakore-10b9b825b/" target="_blank" rel="noopener" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Mail size={24} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;