import { FC } from "react";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaBehance,
  FaItchIo,
} from "react-icons/fa";

const Footer: FC = () => {
  const socialLinks = [
    { icon: FaItchIo, label: "Itch.io", href: "https://alvaropd.itch.io/" },
    {
      icon: FaYoutube,
      label: "YouTube",
      href: "https://www.youtube.com/@AlvaroDec%C3%A1podo",
    },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/alvaroPD00" },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%C3%A1lvaro-p%C3%A9rez-dom%C3%ADnguez/",
    },
    { icon: FaEnvelope, label: "Email", 
      href: "https://mail.google.com/mail/?view=cm&to=alvaroperezdominguez00@gmail.com", },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/decapodo.gd/",
    },
    { icon: FaBehance, label: "Behance", href: "https://www.behance.net/AlvaroPerezDominguez#" },
  ];

  return (
    <footer className="bg-light-sky-blue py-6 relative z-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="mx-auto flex items-center justify-center mb-6"> 
              <a href="#inicio">
  <Image
    src="/images/decapodo-logo.png"
    alt="Decápodo Logo"
    width={80}
    height={80}
    className="w-28 h-28"
  />
</a>
            </div>
          </div>
          <div className="flex space-x-4 justify-center flex-grow md:mr-24">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-duke-blue hover:text-indigo transition-colors duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={30} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
