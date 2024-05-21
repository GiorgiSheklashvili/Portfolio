import Card from '../components/Card';
import styles from '../styles/Services.module.css'; // Assuming you have a CSS module for your services page

const services = [
  {
    title: 'Our specialty',
    description: `We specialize in tailored Spring Boot development services for your unique business needs and goals. We provide comprehensive services ranging from requirement gathering, system architecture design, coding, testing, deployment, and maintenance.`,
  },
  {
    title: 'Strategy',
    description: `Before designing, we ask the right questions and delve into market research, competitive analyses, and consulting to tackle challenges effectively. This stage includes market research, competitive analyses, consulting and exploring possible solutions.`,
  },
  {
    title: 'Microservices',
    description: `Building microservices that communicate through well-defined APIs and ensure scalability and quick adaptation to changing demands. We design Microservices with right design patterns for capabilities such as service discovery, messaging, network routing, failure detection, logging, storage, identity etc.`,
  },
  {
    title: 'API development',
    description: `Create secure APIs that exchange data and functionality across applications and external systems`,
  },
  {
    title: 'Migration services',
    description: `Many businesses rely on Legacy software. Transform your software ecosystem from legacy to modern with our migration services. We help businesses unlock improved performance and maintainability while mitigating the risks associated with legacy applications.`,
  },
  {
    title: 'Support and Maintenance',
    description: `Our commitment doesn’t end with project completion. We provide ongoing support and maintenance to ensure your web applications remain up-to-date and perform optimally. This includes delivering updates, upgrades, patches, and technical support.`,
  },
  {
    title: 'DevOps',
    description: `Optimize deployment procedures and establish resilient DevOps methodologies to ensure high availability and peak performance across diverse Spring Boot applications.`,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <section className={styles.services}>
      {services.map((service, index) => (
        <Card key={index} title={service.title} description={service.description} />
      ))}
    </section>
  );
};

export default ServicesPage;