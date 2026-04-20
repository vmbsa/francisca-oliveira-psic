import sofa from "../assets/sofa.png";
import { motion } from "framer-motion";

const services = [
  {
    title: "Adultos",
    description:
      "Oferece um espaço seguro e de confiança para compreender emoções e desafios pessoais, promovendo bem-estar emocional, autoconhecimento e estratégias para lidar com dificuldades pessoais e relacionais.",
  },
  {
    title: "Crianças e Adolescentes",
    description:
      "Abordagem centrada na relação terapêutica e na escuta ativa, é criado um espaço seguro onde crianças e adolescentes podem explorar emoções, dificuldades e desafios do seu desenvolvimento.",
  },
  {
    title: "Aconselhamento Psicológico Parental",
    description:
      "Oferece um espaço de reflexão e diálogo, apoiando pais e cuidadores na compreensão das necessidades emocionais dos seus filhos e no fortalecimento de uma parentalidade mais consciente e segura.",
  },
];

function Services() {
  return (
    <section className="relative py-20" style={{ backgroundImage: `url(${sofa})`, backgroundSize: "cover" }}>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-[#50311D] text-4xl font-bold text-center mb-12">
          Consultas de Psicologia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-[#50311D] bg-opacity-90 p-8 rounded-xl shadow-xl max-w-xs w-full text-center border border-white hover:bg-opacity-100 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-[#D4CABC] text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Extra info boxes */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
          <div className="bg-[#50311D] py-3 px-8 rounded-xl text-center md:w-72">
            <h3 className="text-white font-semibold text-sm">Presencial na zona de Lisboa</h3>
          </div>
          <div className="bg-[#50311D] py-3 px-8 rounded-xl text-center md:w-72">
            <h3 className="text-white font-semibold text-sm">Online</h3>
          </div>
          <div className="bg-[#50311D] py-3 px-8 rounded-xl text-center md:w-72">
            <h3 className="text-white font-semibold text-sm">English available</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;