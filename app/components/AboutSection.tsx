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
            Soy Álvaro, graduado de la <b>Licenciatura en Diseño Multimedial</b> (UNLP), una disciplina que integra diseño, tecnología y comunicación para crear experiencias, contenidos y sistemas interactivos en entornos digitales.
          </p>
          <p>
            Me especializo en <b>game design</b> y desarrollo en <b>Unity</b>. Diseño mecánicas, narrativa y sistemas jugables, trabajando desde la programación y el prototipado para resolver problemas, orientar decisiones y asegurar coherencia técnica y creativa en cada proyecto.
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
