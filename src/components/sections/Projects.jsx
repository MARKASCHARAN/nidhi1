import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const projectsData = [
  // {
  //   title: 'Data Pipeline Automation',
  //   description: 'Automated ETL pipeline processing 1M+ records daily using Apache Airflow',
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
  //   tech: ['Python', 'Airflow', 'AWS'],
  //   github: 'https://github.com/nidhi/data-pipeline',
  //   demo: 'https://demo.example.com/pipeline'
  // },
  // {
  //   title: 'Real-time Analytics Dashboard',
  //   description: 'Real-time data visualization platform built with React and D3.js',
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
  //   tech: ['React', 'D3.js', 'WebSocket'],
  //   github: 'https://github.com/nidhi/analytics-dashboard',
  //   demo: 'https://demo.example.com/dashboard'
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Projects"
          subtitle="A selection of my recent data engineering projects"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;