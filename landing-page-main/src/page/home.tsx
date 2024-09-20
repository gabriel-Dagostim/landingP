import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import datalogo from "../assets/images/database.png";
import ialogo from "../assets/images/ai.png";
import cellph from "../assets/images/smartphone.png";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Logo from "../assets/logo.png";
import Button from "../components/button.tsx";
import fishinge from "../assets/images/fishing.svg"
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solutions.css";
import "../styles/testimonial.css";
import "../styles/utility.css";

import agro01 from "../assets/images/agro1.jpg"
import agro02 from "../assets/images/agro2.jpeg"
import agro03 from "../assets/images/agro3.jpg"
import agro04 from "../assets/images/agro4.webp"



export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const toggleBodyOverflow = (isMenuOpen: boolean) => {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        };

        toggleBodyOverflow(showMobileMenu);
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu]);

    return (
        <>
            <header className="header-fixed py-sm">
    <nav className="flex items-center justify-between">
        <img src={Logo} alt="Logo DonaFrost" width={150} height={120} />
        <div className="desktop-only">
            <ul className="flex gap-1">
                <li><a href="https://zenith.gabrieldagostim.com/">Home</a></li>
                <li><a href="https://www.splabor.com.br/blog/medidor-de-ph/3-maneiras-de-se-medir-o-ph-da-agua/#:~:text=Para%20medir%20o%20pH%20da,de%20mudar%C3%A1%20de%20cor%20momentaneamente.">Soluções</a></li>
                <li><a href="https://www.peixebr.com.br/">Depoimentos</a></li>
                <li><a href="https://www.binance.com/pt-BR/markets/overview">Preços</a></li>
                <li><a href="https://www.gabrieldagostim.com/">Contato</a></li>
            </ul>
        </div>
        <div className="desktop-only">
            <div className="flex items-center">
                <a className="reverse-color ml-lg" href="#">Login</a>
                <Button text="Cadastre-se" />
            </div>
        </div>
        <div className="mobile-menu">
            {showMobileMenu ? (
                <div className="mobile-menu-content">
                    <div className="container flex">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="https://www.peixebr.com.br/">Depoimentos</a></li>
                            <li><a href="https://pointerpointer.com/">Preços</a></li>
                            <li><a href="https://www.gabrieldagostim.com/">Contato</a></li>
                            <li><a className="reverse-color" href="#">Login</a></li>
                        </ul>
                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                            <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                        </span>
                    </div>
                </div>
            ) : (
                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                    <img src={Menu} alt="ícone menu" width={24} height={24} />
                </span>
            )}
        </div>
    </nav>
</header>






            
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only"></p>
                    <h1>Bem vindo a ZENITH</h1>
                    <p>Na Zenith, garantimos a saúde dos seus peixes com tecnologia de ponta: monitoramento preciso de pH, oxigenação e temperatura!</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>


            <section id="solutions" className="solutions-container">
                <h2 className="section-title">Inovação na Piscicultura</h2>
                <p className="section-description">
                    Com a Zenith, a tecnologia se torna sua aliada. Monitore em tempo real o pH, oxigênio e temperatura da sua água com precisão e praticidade!
                </p>
                <div className="solutions-grid">
                    <div className="solution-card">
                        <img src={datalogo} alt="Precisão de dados" className="solution-logo" />
                        <h3>Precisão de dados</h3>
                        <p>
                            Garantimos dados precisos sobre o pH, oxigênio e temperatura da sua água para que você alcance o sucesso na piscicultura.
                        </p>
                        <a href="#" className="learn-more">Saiba mais</a>
                    </div>
                    <div className="solution-card">
                        <img src={cellph} alt="Dados na palma da mão" className="solution-logo" />
                        <h3>Dados na palma da mão</h3>
                        <p>
                            Acompanhe todos os dados em tempo real através de nosso aplicativo, disponível em smartphones e tablets.
                        </p>
                        <a href="#" className="learn-more">Saiba mais</a>
                    </div>
                    <div className="solution-card">
                        <img src={ialogo} alt="Análise por IA" className="solution-logo" />
                        <h3>Análise por IA</h3>
                        <p>
                            Nossa IA ajuda a monitorar e cuidar dos tanques, oferecendo dicas personalizadas para otimizar a piscicultura.
                        </p>
                        <a href="#" className="learn-more">Saiba mais</a>
                    </div>
                </div>
            </section>














            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Tecnologia que muda vida</h1>
            <img 
                src={fishinge} 
                alt="fish" 
                style={{ width: '90vw', height: '70vh' }} 
            />
            </section>



            <section className="reviews-section" style={{ backgroundColor: "#f9f9f9", padding: "60px 20px", textAlign: "center" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>O que nossos clientes dizem</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>A opinião dos nossos clientes é fundamental para nossa evolução e sucesso!</p>
        
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            {/* Testimonial 1 */}
            <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", flexBasis: "280px", flexGrow: 1, flexShrink: 0 }}>
                <img src={agro01} alt="Carlos Mendes" style={{ borderRadius: "50%", width: "80px", height: "80px", objectFit: "cover", marginBottom: "20px" }} />
                <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Carlos Mendes</h4>
                <p style={{ fontSize: "1rem", color: "gray" }}>Proprietário de Piscicultura</p>
                <p style={{ fontSize: "1rem", margin: "20px 0" }}>
                    A precisão dos sensores de pH e oxigênio da água revolucionou nossa operação, garantindo um ambiente seguro para os peixes e maximizando nosso rendimento.
                </p>

                {/* Botão responsivo */}
                <a 
                    href="https://www.google.com/search?q=Carlos+Mendes+piscicultura" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#2c3e50", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        marginTop: "20px",
                        width: "100%",
                        textAlign: "center"
                    }}
                >
                    Saiba mais sobre Carlos Mendes
                </a>
            </div>


            {/* Testimonial 2 */}
            <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", flexBasis: "280px", flexGrow: 1, flexShrink: 0 }}>
                <img src={agro02} alt="Ana Pereira" style={{ borderRadius: "50%", width: "80px", height: "80px", objectFit: "cover", marginBottom: "20px" }} />
                <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Ana Pereira</h4>
                <p style={{ fontSize: "1rem", color: "gray" }}>Engenheira Ambiental</p>
                <p style={{ fontSize: "1rem", margin: "20px 0" }}>
                    Com a tecnologia de monitoramento constante da água, tivemos um aumento significativo na qualidade dos peixes e na segurança da produção.
                </p>

                {/* Botão responsivo */}
                <a 
                    href="https://www.google.com/search?q=Ana+Pereira+engenheira+ambiental" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#2c3e50", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        marginTop: "20px",
                        width: "100%",
                        textAlign: "center"
                    }}
                >
                    Saiba mais sobre Ana Pereira
                </a>
            </div>

            {/* Testimonial 3 */}
            <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", flexBasis: "280px", flexGrow: 1, flexShrink: 0 }}>
                <img src={agro03} alt="Jorge Silva" style={{ borderRadius: "50%", width: "80px", height: "80px", objectFit: "cover", marginBottom: "20px" }} />
                <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Jorge Silva</h4>
                <p style={{ fontSize: "1rem", color: "gray" }}>Técnico em Piscicultura</p>
                <p style={{ fontSize: "1rem", margin: "20px 0" }}>
                    A facilidade de usar o sistema de monitoramento de temperatura e oxigenação fez toda a diferença na nossa produção, otimizando os cuidados diários com os tanques.
                </p>

                {/* Botão responsivo */}
                <a 
                    href="https://www.google.com/search?q=Jorge+Silva+técnico+em+piscicultura" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#2c3e50", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        marginTop: "20px",
                        width: "100%",
                        textAlign: "center"
                    }}
                >
                    Saiba mais sobre Jorge Silva
                </a>
            </div>


            {/* Testimonial 4 */}
            <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", flexBasis: "280px", flexGrow: 1, flexShrink: 0 }}>
                <img src={agro04} alt="Mariana Costa" style={{ borderRadius: "50%", width: "80px", height: "80px", objectFit: "cover", marginBottom: "20px" }} />
                <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Mariana Costa</h4>
                <p style={{ fontSize: "1rem", color: "gray" }}>Bióloga</p>
                <p style={{ fontSize: "1rem", margin: "20px 0" }}>
                    A integração da tecnologia de monitoramento de pH e temperatura foi um divisor de águas para garantir a longevidade e a qualidade dos nossos peixes.
                </p>

                {/* Botão responsivo */}
                <a 
                    href="https://www.google.com/search?q=Mariana+Costa+bióloga" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#2c3e50", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        marginTop: "20px",
                        width: "100%",
                        textAlign: "center"
                    }}
                >
                    Saiba mais sobre Mariana Costa
                </a>
            </div>

        </div>
    </div>
</section>



<section style={{ backgroundColor: "#f4f4f4", padding: "60px 20px", textAlign: "center" }}>
    
</section>





<section style={{ backgroundColor: "#f4f4f4", padding: "60px 20px", textAlign: "center" }}>
    <h2 style={{ fontSize: "2.5rem", color: "#2c3e50", marginBottom: "40px" }}>Tanques de Piscicultura</h2>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        
        {/* Primeiro Card - Tanque de Piscicultura */}
        <div style={{ flex: "1 1 300px", maxWidth: "400px", padding: "40px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "550px" }}>
            <div>
                <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#2c3e50" }}>Tanque de Piscicultura</h2>
                <p style={{ fontSize: "1rem", color: "#7f8c8d", marginBottom: "20px" }}>Este é um dos nossos tanques de piscicultura modernos, com monitoramento avançado.</p>

                <a href="https://www.google.com/maps?q=loc:35.6895,139.6917" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia24344/piscicultura-cdp.jpg" 
                        alt="Tanque de piscicultura" 
                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "12px", marginBottom: "20px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
                    />
                </a>
            </div>

            <div style={{ marginTop: "auto", display: "flex", gap: "10px", justifyContent: "center" }}>
                <a 
                    href="#" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#00a8cc", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        fontSize: "1rem", 
                        cursor: "pointer", 
                        transition: "background-color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#007d99"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#00a8cc"}
                >
                    Mais informações
                </a>

                <a 
                    href="https://www.google.com/maps?q=loc:35.6895,139.6917" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#2c3e50", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        fontSize: "1rem", 
                        cursor: "pointer", 
                        transition: "background-color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1b2836"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#2c3e50"}
                >
                    Ver localização
                </a>
            </div>
        </div>

        {/* Segundo Card - Peixe Gigante */}
        <div style={{ flex: "1 1 300px", maxWidth: "400px", padding: "40px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "550px" }}>
            <div>
                <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#2c3e50" }}>Peixe Gigante</h2>
                <p style={{ fontSize: "1rem", color: "#7f8c8d", marginBottom: "20px" }}>Exemplo de um grande peixe criado em nossas fazendas de piscicultura.</p>

                <a href="https://www.google.com/maps?q=loc:35.6895,139.6917" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://rondonia.ro.gov.br/wp-content/uploads/2017/03/Piscicultura-Itapu%C3%A3-Foto-Irene-Mendes.jpg" 
                        alt="Peixe grande" 
                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "12px", marginBottom: "20px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
                    />
                </a>
            </div>

            <div style={{ marginTop: "auto", display: "flex", gap: "10px", justifyContent: "center" }}>
                <a 
                    href="#" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#00a8cc", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        fontSize: "1rem", 
                        cursor: "pointer", 
                        transition: "background-color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#007d99"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#00a8cc"}
                >
                    Mais informações
                </a>

                <a 
                    href="https://www.google.com/maps?q=loc:35.6895,139.6917" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#2c3e50", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        fontSize: "1rem", 
                        cursor: "pointer", 
                        transition: "background-color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1b2836"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#2c3e50"}
                >
                    Ver localização
                </a>
            </div>
        </div>

        {/* Terceiro Card - Tanques em Piscinas */}
        <div style={{ flex: "1 1 300px", maxWidth: "400px", padding: "40px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "550px" }}>
            <div>
                <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#2c3e50" }}>Tanques em Piscinas</h2>
                <p style={{ fontSize: "1rem", color: "#7f8c8d", marginBottom: "20px" }}>Tanques de piscicultura instalados em piscinas, proporcionando um ambiente controlado.</p>

                <a href="https://www.google.com/maps?q=loc:35.6895,139.6917" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://aquaponia-urbana.com/wp-content/uploads/2023/10/Piscicultura-em-Piscinas.jpg" 
                        alt="Tanques em Piscinas" 
                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "12px", marginBottom: "20px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
                    />
                </a>
            </div>

            <div style={{ marginTop: "auto", display: "flex", gap: "10px", justifyContent: "center" }}>
                <a 
                    href="#" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#00a8cc", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        fontSize: "1rem", 
                        cursor: "pointer", 
                        transition: "background-color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#007d99"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#00a8cc"}
                >
                    Mais informações
                </a>

                <a 
                    href="https://www.google.com/maps?q=loc:35.6895,139.6917" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#2c3e50", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        fontSize: "1rem", 
                        cursor: "pointer", 
                        transition: "background-color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1b2836"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#2c3e50"}
                >
                    Ver localização
                </a>
            </div>
        </div>

        {/* Quarto Card - Tanques em Rio */}
        <div style={{ flex: "1 1 300px", maxWidth: "400px", padding: "40px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "550px" }}>
            <div>
                <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#2c3e50" }}>Tanques em Rio</h2>
                <p style={{ fontSize: "1rem", color: "#7f8c8d", marginBottom: "20px" }}>Tanques flutuantes instalados em um rio, garantindo uma alta qualidade da água.</p>

                <a href="https://www.google.com/maps?q=loc:35.6895,139.6917" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://nuter.com.br/wp-content/uploads/2020/11/aerial-top-view-of-the-rings-of-seabass-and-gilthe-2021-09-03-17-49-03-utc-1024x644.jpg" 
                        alt="Tanques em Rio" 
                        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "12px", marginBottom: "20px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
                    />
                </a>
            </div>

            <div style={{ marginTop: "auto", display: "flex", gap: "10px", justifyContent: "center" }}>
                <a 
                    href="#" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#00a8cc", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        fontSize: "1rem", 
                        cursor: "pointer", 
                        transition: "background-color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#007d99"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#00a8cc"}
                >
                    Mais informações
                </a>

                <a 
                    href="https://www.google.com/maps?q=loc:35.6895,139.6917" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        display: "inline-block", 
                        padding: "10px 20px", 
                        backgroundColor: "#2c3e50", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        fontSize: "1rem", 
                        cursor: "pointer", 
                        transition: "background-color 0.3s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1b2836"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#2c3e50"}
                >
                    Ver localização
                </a>
            </div>
        </div>
    </div>
</section>
































<section id="location" style={{ padding: "60px 20px", backgroundColor: "#f4f4f4", textAlign: "center" }}>
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#2c3e50" }}>Onde Estamos</h2>
        <p style={{ fontSize: "1.2rem", color: "#7f8c8d", marginBottom: "40px" }}>
            Nossa sede está localizada em Cascavel, uma cidade no coração do Paraná, cercada por natureza exuberante e com fácil acesso a todas as regiões.
        </p>
        <div style={{ marginBottom: "40px" }}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1344326701743!2d-53.53085462570978!3d-24.955420581334518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef377da857d8db%3A0x123456789abcdef!2sRua+da+Piscicultura%2C+123%2C+Cascavel+-+PR!5e0!3m2!1sen!2sbr!4v1695227896543!5m2!1sen!2sbr" 
                width="100%" 
                height="400" 
                style={{ border: "0" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <p style={{ fontSize: "1.1rem", color: "#2c3e50" }}>
            Endereço: Rua da Piscicultura, 123 - Cascavel, PR
        </p>
    </div>
</section>





<section style={{ backgroundColor: "#f4f4f4", padding: "60px 20px", textAlign: "center" }}>
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#2c3e50" }}>Fale Conosco</h2>
        <p style={{ fontSize: "1rem", color: "#7f8c8d", marginBottom: "40px" }}>Preencha o formulário abaixo para entrar em contato conosco.</p>

        <form action="mailto:seu-email@example.com" method="post" encType="text/plain">
            {/* Nome */}
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label htmlFor="name" style={{ fontSize: "1rem", color: "#2c3e50" }}>Nome:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    style={{ width: "100%", padding: "10px", marginTop: "8px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }} 
                    required 
                />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label htmlFor="email" style={{ fontSize: "1rem", color: "#2c3e50" }}>E-mail:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    style={{ width: "100%", padding: "10px", marginTop: "8px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }} 
                    required 
                />
            </div>

            {/* Assunto */}
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label htmlFor="subject" style={{ fontSize: "1rem", color: "#2c3e50" }}>Assunto:</label>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    style={{ width: "100%", padding: "10px", marginTop: "8px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }} 
                    required 
                />
            </div>

            {/* Mensagem */}
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label htmlFor="message" style={{ fontSize: "1rem", color: "#2c3e50" }}>Mensagem:</label>
                <textarea 
                    id="message" 
                    name="message"
                    style={{ width: "100%", padding: "10px", marginTop: "8px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem" }} 
                    required 
                ></textarea>
            </div>

            {/* Botão de envio */}
            <button 
                type="submit" 
                style={{ 
                    padding: "12px 30px", 
                    backgroundColor: "#2c3e50", 
                    color: "white", 
                    border: "none", 
                    borderRadius: "5px", 
                    fontSize: "1rem", 
                    cursor: "pointer", 
                    width: "100%" 
                }}
            >
                Enviar
            </button>
        </form>
    </div>
</section>















    <section 
        id="footer" 
        style={{ 
            backgroundColor: "#2c3e50", 
            padding: "40px 0", 
            color: "white" 
        }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
                <img 
                src={Logo} 
                alt="Logo Zenith" 
                width={100} 
                height={80} 
                style={{ marginBottom: "20px" }} 
                />
                <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                A tecnologia que você precisa para a piscicultura do futuro!
                </p>

                <div 
                style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    gap: "30px", 
                    marginBottom: "20px" 
                }}
                >
                <a 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Instagram
                </a>
                <a 
                    href="https://www.facebook.com" 
                    target="_blank" 
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Facebook
                </a>
                <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    style={{ color: "white", textDecoration: "none" }}
                >
                    LinkedIn
                </a>
                </div>

                <p style={{ marginBottom: "20px" }}>
                Endereço: Rua da Piscicultura, 123 - Cascavel, PR
                </p>
                <p>
                Email: <a href="mailto:contato@zenith.com" style={{ color: "white", textDecoration: "underline" }}>
                    contato@zenith.com
                </a>
                </p>
                
                <p style={{ marginTop: "30px", fontSize: "0.9rem" }}>
                &copy; 2024 Zenith. Todos os direitos reservados.
                </p>
            </div>
    </section>








        </>
    );
}
