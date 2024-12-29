import React, { useState } from 'react';
import { Database, Code2, Cloud, BarChart3, Wrench } from 'lucide-react';

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillsData = [
    { 
      icon: Database, 
      title: 'SQL', 
      level: 100, 
      color: 'from-teal-500 to-emerald-400',
      description: 'Expert in database design & complex queries',
      features: ['Database Design', 'Query Optimization', 'Data Modeling']
    },
    { 
      icon: Database, 
      title: 'MongoDB', 
      level: 100, 
      color: 'from-green-500 to-teal-400',
      description: 'NoSQL database management & optimization',
      features: ['Schema Design', 'Indexing', 'Aggregation']
    },
    { 
      icon: Code2, 
      title: 'Python', 
      level: 100, 
      color: 'from-purple-500 to-indigo-400',
      description: 'Advanced programming & automation',
      features: ['Data Processing', 'API Development', 'Automation']
    },
    { 
      icon: Cloud, 
      title: 'Computer Network', 
      level: 100, 
      color: 'from-blue-500 to-cyan-400',
      description: 'Network architecture & security',
      features: ['Protocol Design', 'Security', 'Architecture']
    },
    { 
      icon: BarChart3, 
      title: 'Data Visualization', 
      level: 100, 
      color: 'from-rose-500 to-pink-400',
      description: 'Creating impactful visual insights',
      features: ['Dashboard Design', 'Interactive Charts', 'BI Tools']
    },
    { 
      icon: Wrench, 
      title: 'Apache Spark', 
      level: 100, 
      color: 'from-orange-500 to-amber-400',
      description: 'Big data processing & analytics',
      features: ['Data Processing', 'Stream Analytics', 'Optimization']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),rgba(0,0,0,0.5))]" />
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in modern data engineering tools and technologies
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 blur-lg transition duration-300 group-hover:opacity-100"
                   style={{
                     backgroundImage: `linear-gradient(to right, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})`
                   }} />
              
              <div className="relative flex flex-col bg-gray-800 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
                {/* Icon & Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-10`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                  </div>
                  <span className="text-sm font-semibold text-white bg-black/30 px-3 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-700 rounded-full mb-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-500 ease-out`}
                    style={{
                      width: hoveredIndex === index ? '100%' : '0%',
                      transition: 'width 1s ease-out'
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300 border border-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;