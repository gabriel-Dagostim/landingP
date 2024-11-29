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
                    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2MjgyNTg2MDExMTNlNjU3NmE0NTMzNzM2NWZlOGI4OTczZDE2NzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAyMjA5MTU0MzY5MjEyMzI2NjU3IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJwc2FsbWVpZGExQG1pbmhhLmZhZy5lZHUuYnIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InE1dHlBTXZaOTFXZ1NLNVpYZ2hKcmciLCJpYXQiOjE3MzI4Mzc5ODIsImV4cCI6MTczMjg0MTU4Mn0.IxqsvH4obWCBYW15IsKNLCiaShC9jkPbnrOFKC3ijJZ7U_df67DJZrh1wzOTw_CL5PIvdz27xpTXf-MhHcBmWG0v808TRmUtSIGrDqqwtu1Ek5C4yNi5fEokGFp7Ngr58_mGSwcoVZ2-gwT2Qj6EQv-UtyFcJlygFVhaurn9J59YlhgxaGxmRn1Z4542g7bLH8EpaYh_Xxb6zpGbE0FNcW84EZDXCRZb5eH9U48Ov8pTpAOUHpv6iE9XDYfyq-v4WWKTNgUSTH4fGMBDiMB7YssxIbLPfEHW5FHEIu75i0D4kYjlCc-G-LkVNDMzHcfoyK07qIx-dW9JBjfHlwBybQ",
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
