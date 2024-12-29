import React from 'react';
import { Award } from 'lucide-react';

const CertificationCard = ({ title, issuer, date, logo, link, badge }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-delayed relative">
      {logo ? (
        <img 
          src={logo} 
          alt={`${title} Logo`} 
          className="w-12 h-12 object-contain" 
          aria-label={`Logo of ${issuer}`} 
        />
      ) : (
        <Award className="w-12 h-12 text-teal-600" />
      )}

      {/* Badge Section */}
      {badge && (
        <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-tl-lg">
          {badge}
        </div>
      )}

      <div>
        <h3 className="font-semibold text-gray-900 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-1">{issuer}</p>
        <p className="text-sm text-gray-500">{date}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-teal-600 text-sm hover:underline mt-1 block"
          >
            View Certification
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
