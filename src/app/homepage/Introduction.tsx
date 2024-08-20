import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Introduction = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-4">Hi, I&lsquo;m Giorgi</h1>
      <Image
        src="/assets/prof.jpg"
        alt="Giorgi Sheklashvili"
        width={150}
        height={150}
        className="rounded-full mb-6"
      />
      <p className="text-lg mb-6">
        Builder <br />8 years Software Dev
      </p>
      <p className="text-lg mb-6">
        Currently, I am serving as a Software Architect for an Open Banking
        project in Georgia.
      </p>
      <div className="flex space-x-6 mb-6">
        <a
          href="https://github.com/GiorgiSheklashvili"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/giorgisheklashvili/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://twitter.com/GiorgiSheklash1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="mailto:sheklashviligiorgi@gmail.com"
          className="noopener noreferrer"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
};

export default Introduction;
