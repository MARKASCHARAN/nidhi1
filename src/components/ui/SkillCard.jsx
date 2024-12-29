import React from 'react';

const SkillCard = ({ icon: Icon, title, level, color }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col items-center">
        <Icon className={`w-8 h-8 ${color}`} />
        <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
        <div className="w-full mt-3 bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${color}`}
            style={{ width: `${level}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">{level}% Proficiency</p>
      </div>
    </div>
  );
};

export default SkillCard;
