
function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#50311D] mb-10">Política de Privacidade</h1>

        <div className="prose prose-lg text-gray-700">
          <h2 className="text-2xl font-semibold text-[#50311D] mt-12 mb-4">Responsável pelo Tratamento</h2>
          <p>
            Francisca Oliveira<br />
            Psicóloga Clínica<br />
            E-mail: francisca.oliveira.psic@gmail.com
          </p>

          <h2 className="text-2xl font-semibold text-[#50311D] mt-12 mb-4">Dados Recolhidos</h2>
          <p>
            Este website recolhe os seguintes dados quando preenche um formulário:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Nome</li>
            <li>Endereço de email</li>
            <li>Número de telefone</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#50311D] mt-12 mb-4">Finalidade</h2>
          <p>
            Os dados são utilizados para responder aos seus contactos, agendar consultas e cumprir obrigações legais.
          </p>

          <h2 className="text-2xl font-semibold text-[#50311D] mt-12 mb-4">Sigilo Profissional</h2>
          <p>
            Como psicóloga clínica, todos os dados de saúde são tratados sob estrito sigilo profissional, conforme o Código Deontológico da Ordem dos Psicólogos Portugueses.
          </p>

          <h2 className="text-2xl font-semibold text-[#50311D] mt-12 mb-4">Direitos do Utilizador</h2>
          <p>
            Pode exercer os direitos de acesso, retificação, apagamento, limitação, oposição e portabilidade dos seus dados enviando um email para francisca.oliveira.psic@gmail.com.
          </p>

          <p className="mt-12 text-sm text-gray-500">
            Última atualização: Abril 2026
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;