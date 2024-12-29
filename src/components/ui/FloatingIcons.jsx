import React from 'react';
import { Database, Network, LineChart } from 'lucide-react';

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 animate-float">
        <Database className="w-12 h-12 text-teal-500/30" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float-delayed">
        <Network className="w-16 h-16 text-purple-500/30" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float">
        <LineChart className="w-14 h-14 text-blue-500/30" />
      </div>
    </div>
  );
};

export default FloatingIcons;