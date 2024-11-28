import React, { useState } from "react";

const Contato: React.FC = () => {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const body = {
            toMail: email,
            content: content,
        };

        try {
            await fetch("/funcao", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2MjgyNTg2MDExMTNlNjU3NmE0NTMzNzM2NWZlOGI4OTczZDE2NzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAyMjA5MTU0MzY5MjEyMzI2NjU3IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJwc2FsbWVpZGExQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjAtcGZTNEhnSU1SLXJBc1F2ZHBsaUEiLCJpYXQiOjE3MzI4MzQxNjQsImV4cCI6MTczMjgzNzc2NH0.dT0Txe1_ehN-nm_RJZoMuRZ4JDlY1EoLoHNWpAbbThD1ms1IAtyFNDdUeN49AJe98-f61XmTfOqJbJEnxPha-KLD_jmhInTPr-XU0Pi3W7jxc5ofFRv2tN6_bSqTObi8TIarzJmg7emRFeCOAXNo40Ci4b-G7wcpKlNieqcoAooNywmz1Bd7ydes64hHOakmPRnTB9YrnTPUi2pcnN0Agk3viF-ilHdRV1ZaHsGdE4n5coaEN-HUVSx05q04z6b5UrhydNEhE4DVNnPfzh3sl3rQvO1_tPeyFNTDaWSfcgEvehQ4i3joBvZBvfozFF0FH5GIVOgpEIeP_JlLqcJHcg",
                },
                body: JSON.stringify(body),
            });
        } catch (error) {
            alert("Ocorreu um erro ao enviar o formulário.");
            console.error("Erro na requisição:", error);
        }
    };

    return (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Fale Conosco</h2>
            <p className="text-gray-600 mb-6">
                Preencha o formulário abaixo para entrar em contato conosco.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        E-mail:
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Mensagem:
                    </label>
                    <textarea
                        id="message"
                        placeholder="Escreva sua mensagem aqui"
                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contato;
