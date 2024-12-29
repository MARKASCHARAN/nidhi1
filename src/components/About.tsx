import React, { useState } from 'react';
import { Code, BookOpen, Coffee, Terminal, Database, Cpu, Cloud, Network } from 'lucide-react';

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  const experiences = [
    {
      icon: Database,
      title: "Data Engineering",
      desc: "Specializing in building scalable data pipelines and ETL processes",
      details: ["Database Design", "ETL Processing", "Data Warehousing"],
      color: "group-hover:text-teal-400"
    },
    // {
    //   icon: Cpu,
    //   title: "Backend Development",
    //   desc: "Creating robust and efficient backend systems",
    //   details: ["API Development", "System Architecture", "Performance Optimization"],
    //   color: "group-hover:text-purple-400"
    // },
    // {
    //   icon: Cloud,
    //   title: "Cloud Computing",
    //   desc: "Leveraging cloud technologies for scalable solutions",
    //   details: ["AWS", "Azure", "Cloud Architecture"],
    //   color: "group-hover:text-blue-400"
    // }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 -top-48 -right-48 bg-teal-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute h-96 w-96 top-1/2 -left-48 bg-purple-50 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            About My Journey
          </h2>
          <div className="w-20 h-1.5 mx-auto rounded-full bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 mb-8" />
          <p className="text-xl text-gray-600 leading-relaxed">
            Passionate about transforming complex data challenges into elegant solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                As a Data Engineering student, I combine my passion for technology with analytical 
                thinking to create efficient data solutions. My journey began with a curiosity about 
                how data shapes our digital world, and has evolved into a dedication to building 
                robust systems that drive insights.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not immersed in code, I actively contribute to open-source projects 
                and explore emerging technologies in the data engineering landscape.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { metric: "1", label: "Years Experience" },
                { metric: "2+", label: "Projects Completed" },
                { metric: "10+", label: "Technologies" }
              ].map((stat, index) => (
                <div key={index} 
                     className="relative group p-6 bg-white rounded-xl border border-gray-100 shadow-sm 
                              hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.metric}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 
                                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group p-6 bg-white rounded-xl border border-gray-100 shadow-sm 
                           hover:shadow-md transition-all duration-300 cursor-pointer
                           ${activeCard === index ? 'ring-2 ring-purple-500' : ''}`}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <exp.icon className={`w-8 h-8 transition-colors duration-300 ${exp.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-gray-600 mb-4">{exp.desc}</p>
                    
                    {/* Expandable Details */}
                    <div className={`grid grid-cols-2 gap-3 transition-all duration-300 
                                  ${activeCard === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                      {exp.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Current Focus */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <Terminal className="w-6 h-6 text-purple-500" />
            <h3 className="text-xl font-semibold text-gray-900">Current Focus</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Currently focusing on advanced data engineering practices, cloud architecture, 
            and machine learning operations. Always excited to tackle new challenges and 
            contribute to innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;