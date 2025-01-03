import React, { useState } from 'react';
import { X } from 'lucide-react';

const CertificationModal = ({ isOpen, onClose, title, issuer, logo }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">Issued by: {issuer}</p>
          <div className="flex justify-center">
            <img 
              src={logo} 
              alt={`${title} certificate`}
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CertificationCard = ({ title, issuer, date, logo, link, badge }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
           onClick={() => setIsModalOpen(true)}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            {badge && (
              <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                {badge}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-16 h-16">
              <img
                src={logo}
                alt={`${title} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-gray-600">{issuer}</p>
              <p className="text-gray-500 text-sm">{date}</p>
            </div>
          </div>
        </div>
      </div>

      <CertificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        issuer={issuer}
        logo={logo}
      />
    </>
  );
};

const Certifications = () => {
  const certificationsData = [
    {
      title: 'CCNA',
      issuer: 'Cisco',
      date: 'March 2024',
      logo: 'src/1734076179371.jpeg',
      link: 'https://www.credly.com/earner/dashboard',
      badge: 'Verified',
    },
    {
      title: 'AIML Specialization',
      issuer: 'BrightGeeks',
      date: 'March 2024',
      logo: 'src/Thakore Nidhi Virendra -Python With Ai & Ml-1_page-0001.jpg',
      link: 'https://www.credly.com/earner/dashboard',
      badge: 'Verified',
    }
  ];

  const gridCols = certificationsData.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2';

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional certifications and achievements
          </p>
        </div>
        
        <div className={`grid ${gridCols} gap-6`}>
          {certificationsData.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;