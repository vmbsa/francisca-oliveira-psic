import profilePic from "../assets/foto_perfil.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function AboutMe() {
  return (
    <section
      id="about-me"
      className="bg-[#D4CABC] min-h-[80vh] flex items-center "
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 md:grid-cols-[3fr_2fr] gap-10 md:gap-12 items-center w-full">
          <motion.div
            className="flex flex-col justify-center py-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl font-extrabold text-[#5C4033] mb-6"
            >
              Sobre mim
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-md text-[#7A5C48] mb-8 text-justify leading-relaxed"
            >
              Enquanto psicóloga clínica, acredito que cada pessoa tem uma história
              única e merece um espaço seguro sem julgamentos, onde possa
              expressar-se livremente e ser verdadeiramente ouvido/a.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-md text-[#7A5C48] mb-8 text-justify leading-relaxed"
            >
              Coloco-me ao seu lado com disponibilidade e cuidado, respeitando a sua
              individualidade em cada etapa do processo.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-md text-[#7A5C48] mb-8 text-justify leading-relaxed"
            >
              O meu trabalho tem como objetivo a construção de uma relação
              terapêutica próxima e de confiança, baseada na escuta ativa, empatia e
              acolhimento. Cada acompanhamento é pensado de forma personalizada,
              tendo em conta as suas necessidades, objetivos e ritmo.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-bold text-[#5C4033] text-center mt-2"
            >
              Sinto-me realizada em poder conectar-me verdadeiramente com a
              individualidade de cada pessoa.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex justify-center md:justify-center"
            >
              <a
                href="#footer"
                className="bg-[#50311D] text-[#D4CABC] px-6 py-3 rounded-md font-semibold text-md hover:bg-[#7A5C48] transition"
              >
                Contacte-me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="h-full flex justify-center md:justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <img
              src={profilePic}
              alt="Francisca Oliveira - Psicóloga Clínica"
              className="h-full w-full max-w-md md:max-w-none object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;