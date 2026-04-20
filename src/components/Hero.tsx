import plants from "../assets/plants.jpg";

function Hero() {
  return (
    <section className="hero flex-1" style={{ backgroundImage: `url(${plants})` }}>
      <div className="hero-overlay bg-black/50" />
      <div className="flex-col hero-content text-neutral-content text-center p-0">
        <div className="max-w-3xl text-[#D4CABC]">
          <h1 className="flex items-center mb-5 text-[2.7rem] leading-[2.5rem] font-semibold animate-fade-up">
            “Pensar em conjunto é um ato profundamente transformador.”
          </h1>
        </div>
        <a href="#about-me" className="text-[#D4CABC] text-2xl font-semibold float-arrow">
          ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;