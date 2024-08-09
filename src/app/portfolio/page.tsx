const projects = [
  {
    title: 'cvGenerator',
    description: `blablabla blablabla blablabla blablabla blablabla blablabla  blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla`,
    languages: `Java`,
    frameworks: `Spring boot`,
    tools: `Velocity`,
    github: ``,
    screens: [],
  },

];

const PortfolioPage: React.FC = () => {
  return (
    <section className="flex flex-wrap justify-around p-4">
      {projects.map((project, index) => (
        <span>{project.title}</span>
      ))}
    </section>
  );
};

export default PortfolioPage;
