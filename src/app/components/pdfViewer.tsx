import React from "react";

const PdfViewer: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center mb-4">
        <a
          href="/assets/Giorgi_Sheklashvili_-_Software_Architect.pdf"
          download="Giorgi_Sheklashvili_-_Software_Architect.pdf"
          className="text-blue-500 underline"
        >
          Download CV
        </a>
      </div>
      <object
        // data="https://docs.google.com/viewer?url=https://github.com/GiorgiSheklashvili/Resume/raw/main/Giorgi_Sheklashvili_-_Software_Architect.pdf&embedded=true"
        data="/assets/Giorgi_Sheklashvili_-_Software_Architect.pdf"
        className="w-full h-full"
        // frameBorder="0"
        type="application/pdf"
        title="PDF Viewer"
      >
        <p>
          Your browser does not support PDFs. Please download the PDF to view
          it:{" "}
          <a
            href="/assets/Giorgi_Sheklashvili_-_Software_Architect.pdf"
            download="Giorgi_Sheklashvili_-_Software_Architect.pdf"
          >
            Download PDF
          </a>
          .
        </p>
      </object>
    </div>
  );
};

export default PdfViewer;
