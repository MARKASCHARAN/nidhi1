
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Globe } from 'lucide-react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center max-w-2xl mx-auto mb-16">
    <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      {title}
    </h2>
    <p className="text-gray-400">{subtitle}</p>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none"
          placeholder="Your message"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl hover:opacity-90 transition-opacity duration-300 font-medium"
      >
        Send Message
      </button>
    </form>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Vadodara, Gujarat, India"
    },
    {
      icon: Phone,
      title: "Let's Talk",
      details: "Open for Opportunities"
    },
    {
      icon: Globe,
      title: "Remote Work",
      details: "Available Worldwide",
    }
    
  ];
  const socialLinks = [
    {
      href: "https://github.com/tech-nidhi",
      icon: Github,
      label: "GitHub",
      color: "hover:text-purple-400"
    },
    {
      href: "https://www.linkedin.com/in/nidhi-thakore-10b9b825b/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-pink-400"
    },
    {
      href: "mailto:nidhi@example.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.1),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle 
          title="Get in Touch"
          subtitle="Let's connect and discuss opportunities"
        />
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item) => (
            <div 
              key={item.title}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-gray-400">
                I'm always open to discussing new projects, opportunities in data engineering,
                or potential collaborations. Let's create something amazing together!
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800/50 backdrop-blur-lg rounded-xl text-gray-400 ${social.color} transition-colors duration-300 hover:bg-gray-700/50 border border-gray-700/50`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;