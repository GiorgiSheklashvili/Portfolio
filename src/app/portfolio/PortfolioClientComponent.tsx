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

  const openScreens = (index: number) => {
    setSelectedProject(index);
    setSelectedScreenIndex(0);
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

  // Handle keyboard events
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
    <div>
      <ol>
        {projects.map((project, index) => (
          <li key={index} className="mb-8">
            <div>
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p>{project.description}</p>
              <p>
                <strong>Languages:</strong> {project.languages}
              </p>
              <p>
                <strong>Frameworks:</strong> {project.frameworks}
              </p>
              <p>
                <strong>Tools:</strong> {project.tools}
              </p>
              {project.screens.length > 0 && (
                <button
                  onClick={() => openScreens(index)}
                  className="mt-2 text-sm text-blue-500 underline"
                >
                  View Screens
                </button>
              )}
            </div>
          </li>
        ))}
      </ol>

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
                  src={projects[selectedProject].screens[selectedScreenIndex]}
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
