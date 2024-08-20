"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  languages: string;
  frameworks: string;
  tools: string;
  github: string;
  screens: string[];
}

interface PortfolioClientComponentProps {
  projects: Project[];
}

const PortfolioClientComponent: React.FC<PortfolioClientComponentProps> = ({
  projects,
}) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number>(0);

  const openScreens = (projectIndex: number, screenIndex: number = 0) => {
    setSelectedProject(projectIndex);
    setSelectedScreenIndex(screenIndex);
  };

  const closeScreens = () => {
    setSelectedProject(null);
  };

  const prevScreen = () => {
    setSelectedScreenIndex((prevIndex) =>
      prevIndex === 0
        ? projects[selectedProject!].screens.length - 1
        : prevIndex - 1
    );
  };

  const nextScreen = () => {
    setSelectedScreenIndex((prevIndex) =>
      prevIndex === projects[selectedProject!].screens.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedProject !== null) {
        switch (event.key) {
          case "ArrowLeft":
            prevScreen();
            break;
          case "ArrowRight":
            nextScreen();
            break;
          case "Escape":
            closeScreens();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          {project.screens.length > 0 ? (
            <div
              className="relative w-full h-32 md:h-48 cursor-pointer"
              onClick={() => openScreens(index)}
            >
              <Image
                fill={true}
                src={project.screens[0]}
                alt={`Thumbnail for ${project.title}`}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative w-full h-32 md:h-48 flex items-center justify-center bg-gray-200 text-gray-600">
              No Image
            </div>
          )}
          <div className="p-4">
            <h2 className="text-lg font-bold">{project.title}</h2>
            <p className="text-sm">{project.description}</p>
            <p className="text-sm mt-2">
              <strong>Languages:</strong> {project.languages}
            </p>
            <p className="text-sm">
              <strong>Frameworks:</strong> {project.frameworks}
            </p>
            <p className="text-sm">
              <strong>Tools:</strong> {project.tools}
            </p>
          </div>
        </div>
      ))}

      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeScreens}
        >
          <div
            className="relative w-full max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <button onClick={prevScreen} className="text-white text-2xl px-4">
                &#8592;
              </button>
              <div className="w-full h-96 relative">
                <Image
                  fill={true}
                  src={projects[selectedProject!].screens[selectedScreenIndex]}
                  alt={`Screen ${selectedScreenIndex + 1}`}
                  className="object-contain rounded-lg"
                />
              </div>
              <button onClick={nextScreen} className="text-white text-2xl px-4">
                &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioClientComponent;
