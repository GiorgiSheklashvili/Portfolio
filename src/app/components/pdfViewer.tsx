"use client";

import React from 'react';

const PdfViewer: React.FC = () => {

  return (
    <div className="w-full h-screen">
      <iframe
        src="https://docs.google.com/viewer?url=https://github.com/GiorgiSheklashvili/Resume/raw/main/Giorgi_Sheklashvili_-_Software_Architect.pdf&embedded=true"
        className="w-full h-full"
        frameBorder="0"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PdfViewer;
