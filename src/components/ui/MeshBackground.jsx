import React from 'react';

const MeshBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="mesh-gradient mesh-1" />
      <div className="mesh-gradient mesh-2" />
      <div className="mesh-gradient mesh-3" />
      <div className="absolute inset-0 bg-white/50" />
    </div>
  );
};

export default MeshBackground;