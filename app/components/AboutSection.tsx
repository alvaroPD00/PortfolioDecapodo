import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-12 md:py-7 z-10 bg-duke-blue">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8 relative z-10">
        <h2 className="text-4xl text-white lg:mb-14 mb-8 font-bold">
          Sobre Decápodo
        </h2>
        <div className="text-white space-y-6 text-lg leading-relaxed mb-12">
          <p>
            Soy Álvaro, graduado de la Licenciatura en Diseño Multimedial (UNLP), una disciplina que integra diseño, programación y comunicación para el desarrollo de experiencias, sistemas interactivos y proyectos digitales.</p>
          <p>
            Trabajo desde una mirada práctica y transversal, conectando personas, áreas y necesidades para ayudar a transformar ideas y desafíos en soluciones viables. Me interesa facilitar la comunicación, organizar procesos y acompañar la toma de decisiones durante el desarrollo de los proyectos.
          </p>
          <p>
            Puedo sumarme a distintas etapas de producción aportando prototipado, implementación, seguimiento y resolución de obstáculos. Mi objetivo es contribuir a que los equipos trabajen con mayor claridad, autonomía y capacidad de avance.
          </p>


        </div>
        <div className="flex items-center justify-end space-x-4">
          <span className="text-white text-lg font-medium">
            ¡Encontrame en redes!
          </span>
          <a
            href="https://www.instagram.com/decapodo.gd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-light-sky-blue transition-colors duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://www.youtube.com/@AlvaroDec%C3%A1podo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-light-sky-blue transition-colors duration-300 transform hover:scale-110"
            aria-label="YouTube"
          >
            <FaYoutube size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
