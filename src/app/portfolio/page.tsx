import { useState } from "react";
import PortfolioClientComponent from "./PortfolioClientComponent";

interface Project {
  title: string;
  description: string;
  languages: string;
  frameworks: string;
  tools: string;
  github: string;
  screens: string[];
}

const projects: Project[] = [
  {
    title: "OpenBanking",
    description: `The Open Banking Group is a member of the Berlin Group OpenFinance Task Force, working to align Georgia's open banking standards with European ones. The group is actively engaged in global open banking initiatives, focusing on enhancing standards and implementing them within Georgia's financial sector. We collaborate with the National Bank of Georgia, commercial banks, and other interested parties, such as fintech companies.`,
    languages: `Java`,
    frameworks: `Spring boot`,
    tools: `Velocity, AWS ECS, Docker, Cucumber, TestNG, Rest Assured `,
    github: ``,
    screens: [],
  },
  {
    title: "AudioClass",
    description: `Solo project. Learning with audio courses while commuting or doing chores. Audioclass ensures that the pronunciation and pace of its audio files are of the highest quality, so you can easily listen and understand the content with ease.`,
    languages: `Java`,
    frameworks: `Android`,
    tools: ``,
    github: `https://www.producthunt.com/products/audioclass`,
    screens: [
      "/Audioclass/Screenshot_2.png",
      "/Audioclass/Screenshot_1.png",
      "/Audioclass/Screenshot_3.png",
      "/Audioclass/Screenshot_4.png",
    ],
  },
  {
    title: "Kraken",
    description: `The EU H2020 funded KRAKEN project aims to enable the sharing, brokerage, and trading of potentially sensitive personal data in healthcare and education by returning the control of this data to citizens throughout the entire data lifecycle`,
    languages: `Java, Typescript`,
    frameworks: `Spring boot, Express.js, React`,
    tools: `Velocity, Docke, MongoDB, AWS, Truffle, Solidity`,
    github: ``,
    screens: [],
  },
  {
    title: "Tracey",
    description: `Helps fisherfolk of philipines gain creditworthiness by tracking fish catch data in blockchain`,
    languages: `Java`,
    frameworks: `Spring boot, Android, Solidity`,
    tools: `Velocity, PostgreSQL, Web3j`,
    github: ``,
    screens: [],
  },
  {
    title: "Guest Registration",
    description: `Eases visitor management at enterprise offices. Supports self-checkin for guests visiting "hosts" at enterprise office. Hosts (office employees) are notified with SMS when guests have arrived and have performed check-in`,
    languages: `Java`,
    frameworks: `Spring boot`,
    tools: `Messente, jooq, EWS`,
    github: ``,
    screens: [
      "/GuestRegistration/Screenshot_1.png",
      "/GuestRegistration/project.jpg",
      "/GuestRegistration/page.jpg",
      "/GuestRegistration/arch.jpg",
    ],
  },
  {
    title: "RoomBooking",
    description: `Room booking solution provided billboard and tablet screens for internal and external customer offices. It also was integrated with Outlook and Google Calendar.`,
    languages: `Java, Javascript`,
    frameworks: `Spring boot`,
    tools: `Liquibase, Thymeleaf, H2, jQuery`,
    github: ``,
    screens: [
      "/RoomBooking/1 (1).png",
      "/RoomBooking/1 (2).png",
      "/RoomBooking/1 (3).png",
      "/RoomBooking/1 (4).png",
      "/RoomBooking/code.jng",
      "/RoomBooking/Screenshot_1.png",
      "/RoomBooking/Screenshot_2.png",
      "/RoomBooking/Screenshot_3.png",
      "/RoomBooking/Screenshot_4.png",
      "/RoomBooking/Screenshot_5.png",
    ],
  },
  {
    title: "CVGenerator",
    description: `CV Generator helped consulting companies provide staffing to client companies by dynamically generating CVs of their employees`,
    languages: `Java, Javascript`,
    frameworks: `Spring boot, Vue.Js`,
    tools: `Velocity, Swagger, Sinon, Chai,Bbootstrap,Aapache Velocity, MongoDB`,
    github: ``,
    screens: [
      "/CVGenerator/1.jpg",
      "/CVGenerator/2.jpg",
      "/CVGenerator/3.jpg",
      "/CVGenerator/4.jpg",
      "/CVGenerator/cvGenerator.jpg",
      "/CVGenerator/mongo.jpg",
      "/CVGenerator/pdf.jpg",
      "/CVGenerator/project_structure.jpg",
      "/CVGenerator/swagger.jpg",
    ],
  },
];

const PortfolioPage = () => {
  return (
    <section className="flex flex-wrap justify-around p-4">
      <PortfolioClientComponent projects={projects} />
    </section>
  );
};

export default PortfolioPage;
