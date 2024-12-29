import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import CertificationCard from '../ui/CertificationCard';

const certificationsData = [
  {
    title: 'CCNA',
    issuer: 'Cisco',
    date: 'March 2024',
    logo: 'https://theitacademy.org/wp-content/uploads/2021/08/ccna.png',
    link: 'https://www.credly.com/earner/dashboard',
    badge: 'Verified',
  },
  
];

const Certifications = () => {
  const gridCols = certificationsData.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2';

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Certifications"
          subtitle="Professional certifications and achievements"
        />
        
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
