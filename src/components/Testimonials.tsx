import { motion } from "framer-motion";
import paperTexture from "../assets/paper.png";

const testimonials = [
  "A mudança ocorre quando há espaço para a autenticidade, a presença e escuta.",
  "A relação terapêutica oferece um espaço seguro onde é possível existir sem julgamento.",
];

function Testimonials() {
  return (
    <section className="bg-[#50311D] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {testimonials.map((text, index) => (
            <motion.div
              key={index}
              className={`group relative bg-cover bg-center p-8 shadow-xl max-w-md w-full text-center rounded-xl overflow-hidden float-soft`}
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundImage: `url(${paperTexture})`,
                backgroundColor: "#f5e6c856",
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                animationDelay: `${index * 2}s`, // 👈 important
              }}
            >
              <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300" />
              <p className="text-md italic text-[#FFFFFF] relative z-10">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;