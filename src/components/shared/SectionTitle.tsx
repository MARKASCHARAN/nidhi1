import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-4 animate-fade-in-delayed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;