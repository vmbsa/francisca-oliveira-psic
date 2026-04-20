import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import ersLogo from "../assets/ers_logo.png";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

function Footer() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          mensagem: formData.mensagem,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSuccessMessage("Obrigado pela confiança. Entrarei em contacto brevemente.");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setErrorMessage("Não foi possível enviar a mensagem. Tente novamente daqui a pouco.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer id="footer" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-stretch">
          <div className="bg-[#50311D] text-white p-12 flex flex-col justify-between rounded-2xl">
            <div className="text-center">
              <h3 className="font-heading text-3xl font-bold mb-2">Conte comigo.</h3>
              <h3 className="font-heading text-3xl font-bold">Entre em contacto.</h3>
            </div>

            

            <div className="flex flex-col items-center justify-center py-10">
  
              <div className="flex flex-col items-center gap-2 py-6">
                <Mail className="w-7 h-7 text-[#D4CABC]" />
                <p className="text-lg break-all text-center">
                  francisca.oliveira.psic@gmail.com
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 py-6">
                <Phone className="w-7 h-7 text-[#D4CABC]" />
                <p className="text-lg">+351 916 638 161</p>
              </div>

            </div>

            <div className="flex justify-center gap-8 pt-6">
              <a
                href="https://www.instagram.com/francisca.oliveira.psic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-80 transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>

              <a
                href="https://pt.linkedin.com/in/francisca-oliveira-71279a195"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-80 transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#50311D]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#50311D]"
              />

              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                required
                value={formData.telefone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#50311D]"
              />

              <textarea
                name="mensagem"
                placeholder="Mensagem"
                rows={5}
                required
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#50311D]"
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#50311D] hover:bg-[#7A5C48] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition"
              >
                {isSending ? "A enviar..." : "Enviar Mensagem"}
              </button>

              {successMessage && (
                <p className="text-green-700 text-sm text-center pt-2">
                  {successMessage}
                </p>
              )}

              {errorMessage && (
                <p className="text-red-700 text-sm text-center pt-2">
                  {errorMessage}
                </p>
              )}
            </form>

            <div className="text-center my-4 text-gray-400">— Sem mais questões? —</div>

            <a
              href="https://docs.google.com/forms/d/1gelG6bb5q5cFLBGHRkJlcydtJFheVEpfUz_m81ljJjg/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#50311D] hover:bg-[#7A5C48] text-white font-semibold py-3 rounded-xl transition"
            >
              Agende uma sessão
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-600">
          <div className="flex flex-wrap justify-center items-center gap-3 text-center">
            <img src={ersLogo} alt="ERS Logo" className="h-6" />
            <span>ERS 45874</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <Link
              to="/politica-de-privacidade"
              className="hover:text-[#50311D] underline transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>

          <p className="mt-4 text-center text-gray-500">
            © 2026 Francisca Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;