import { motion } from "framer-motion";

const steps = [
  "Mestre em Psicologia Clínica – ISPA",
  "Membro Efetivo da Ordem dos Psicólogos Portugueses (29795)",
  "Curso Avançado em Parentalidade e Educação Consciente (CRIAP)",
  "Experiência com Crianças, Adolescentes e Adultos",
  "Experiência em Aconselhamento Psicológico Parental",
  "Especialização em Terapia Familiar e de Casal",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const titleAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function ProfessionalPath() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-[#5C4033] mb-16"
          variants={titleAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          Percurso Profissional
        </motion.h2>

        {/* Mobile */}
        <motion.div
          className="flex flex-col lg:hidden"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-[32px_1fr] gap-4"
              variants={item}
            >
              <div className="flex flex-col items-center">
                <div className="mt-1 w-4 h-4 rounded-full bg-[#7A5C48] ring-4 ring-[#EFE3D8]" />
                {index !== steps.length - 1 && (
                  <div className="w-[2px] flex-1 min-h-[64px] bg-[#D4CABC] mt-2" />
                )}
              </div>

              <div className="pb-8">
                <p className="text-[#7A5C48] text-base leading-relaxed">
                  {step}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-6 gap-6 relative"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="absolute top-2 left-[8%] right-[8%] h-[2px] bg-[#D4CABC] z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative z-10 flex flex-col items-center text-center"
              variants={item}
            >
              <div className="w-4 h-4 rounded-full bg-[#7A5C48] ring-4 ring-[#EFE3D8] mb-5 shadow-sm" />
              <p className="text-[#7A5C48] text-sm xl:text-base leading-relaxed max-w-[220px] mx-auto">
                {step}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProfessionalPath;