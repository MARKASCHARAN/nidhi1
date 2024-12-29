import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import ContactForm from '../ui/ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get in Touch"
          subtitle="Let's connect and discuss opportunities"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600 animate-fade-in">
              I'm always open to discussing new projects, opportunities in data engineering,
              or potential collaborations.
            </p>
            
            <div className="flex space-x-6 animate-fade-in-delayed">
              <a href="https://github.com/nidhi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/nidhi-thakore-10b9b825b/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:nidhi@example.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;