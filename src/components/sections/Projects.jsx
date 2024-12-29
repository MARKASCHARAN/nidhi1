import React, { useState, useEffect } from 'react';
import SectionTitle from '../shared/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const [isUpdating, setIsUpdating] = useState(true);
  const [projectsData, setProjectsData] = useState([]);

  // Simulating data fetching or updating
  useEffect(() => {
    // Simulate a delay to show the "still updating" message
    setTimeout(() => {
      setProjectsData([
        // Example of updated project data, replace with your actual data
        {
          title: 'Still Updating...',
          description: 'Project details are being updated.',
          image: 'https://cdn.vectorstock.com/i/2000v/65/25/web-online-page-with-404-not-found-error-vector-27386525.avif',
          tech: ['Updating...'],
          github: '#',
          demo: '#',
        },
        {
          title: 'Still Updating...',
          description: 'Project details are being updated.',
          image: 'https://cdn.vectorstock.com/i/2000v/65/25/web-online-page-with-404-not-found-error-vector-27386525.avif',
          tech: ['Updating...'],
          github: '#',
          demo: '#',
        }
        
      ]);
      setIsUpdating(false); // Set to false once data is fetched/updated
    }, 2000); // Simulated delay of 2 seconds
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Projects"
          subtitle="A selection of my recent data engineering projects"
        />
        
        {isUpdating ? (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">Still updating the projects. Please check back later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
