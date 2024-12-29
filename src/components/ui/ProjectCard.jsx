import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, image, tech, github, demo }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-delayed">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5 mr-2" />
              Code
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
              <ExternalLink className="w-5 h-5 mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;