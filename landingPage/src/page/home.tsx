import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import datalogo from "../assets/images/database.png";
import ialogo from "../assets/images/ai.png";
import cellph from "../assets/images/smartphone.png";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Logo from "../assets/logo.png";
import Contato from "../components/Contact.tsx";
import fishinge from "../assets/images/fishing.svg";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solutions.css";
import "../styles/testimonial.css";
import "../styles/utility.css";

import agro01 from "../assets/images/agro1.jpg";
import agro02 from "../assets/images/agro2.jpeg";
import agro03 from "../assets/images/agro3.jpg";
import agro04 from "../assets/images/agro4.webp";



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






            
            <section id="hero" style={{ position: "relative", backgroundColor: "#f0f4f8", padding: "60px 20px", textAlign: "center", marginTop: "5vh" }}>
                <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "-1" }}>
                    <img src={HeroRectangleTwo} alt="Background design" style={{ position: "absolute", top: "10%", left: "5%", maxWidth: "150px" }} />
                    <img src={HeroRectangleOne} alt="Background design" style={{ position: "absolute", bottom: "10%", right: "5%", maxWidth: "150px" }} />
                </div>
                <div className="container content" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h1 style={{ fontSize: "3rem", color: "#2c3e50", marginBottom: "20px" }}>Bem-vindo à <span style={{ color: "#00a8cc" }}>ZENITH</span></h1>
                    <p style={{ fontSize: "1.2rem", color: "#7f8c8d", marginBottom: "40px", lineHeight: "1.6" }}>
                        Na Zenith, garantimos a saúde dos seus peixes com tecnologia de ponta: monitoramento preciso de pH, oxigenação e temperatura!
                    </p>
                    <div className="flex gap-1" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
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


            


           





            <section id="how-it-works" style={{ backgroundColor: "#ffffff", padding: "60px 20px", textAlign: "center" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#2c3e50", marginBottom: "20px" }}>Como Funciona</h2>
        <p style={{ fontSize: "1.2rem", color: "#7f8c8d", marginBottom: "40px" }}>
            Entenda como a Zenith utiliza tecnologia de ponta para garantir a saúde e o crescimento dos seus peixes.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            
            {/* Etapa 1 - Instalação dos Sensores */}
            <div style={{ flex: "1 1 250px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <img src={datalogo} alt="Instalação dos Sensores" style={{ width: "80px", height: "80px", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "1.5rem", color: "#2c3e50", marginBottom: "10px" }}>1. Instalação dos Sensores</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>
                    Nossos especialistas instalam sensores de pH, oxigênio e temperatura em seus tanques, garantindo monitoramento contínuo.
                </p>
            </div>
            
            {/* Etapa 2 - Monitoramento em Tempo Real */}
            <div style={{ flex: "1 1 250px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <img src={cellph} alt="Monitoramento em Tempo Real" style={{ width: "80px", height: "80px", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "1.5rem", color: "#2c3e50", marginBottom: "10px" }}>2. Monitoramento em Tempo Real</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>
                    Acompanhe todos os dados diretamente no seu smartphone ou tablet através do nosso aplicativo intuitivo.
                </p>
            </div>
            
            {/* Etapa 3 - Análise Inteligente por IA */}
            <div style={{ flex: "1 1 250px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <img src={ialogo} alt="Análise Inteligente por IA" style={{ width: "80px", height: "80px", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "1.5rem", color: "#2c3e50", marginBottom: "10px" }}>3. Análise Inteligente por IA</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>
                    Nossa inteligência artificial processa os dados coletados, identificando padrões e fornecendo recomendações para otimizar a criação.
                </p>
            </div>
            
            {/* Etapa 4 - Ações e Otimizações */}
            <div style={{ flex: "1 1 250px", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <img src={cellph} alt="Ações e Otimizações" style={{ width: "80px", height: "80px", marginBottom: "20px" }} />
                <h3 style={{ fontSize: "1.5rem", color: "#2c3e50", marginBottom: "10px" }}>4. Ações e Otimizações</h3>
                <p style={{ fontSize: "1rem", color: "#7f8c8d" }}>
                    Com base nas análises, tome decisões informadas para melhorar a saúde dos peixes e aumentar a produtividade da sua piscicultura.
                </p>
            </div>
        </div>
    </div>
</section>









            <section className="reviews-section" style={{ backgroundColor: "#f9f9f9", padding: "60px 20px", textAlign: "center" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>O que nossos clientes dizem</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>A opinião dos nossos clientes é fundamental para nossa evolução e sucesso!</p>
        
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            <SwiperSlide>
                <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                    <img src={agro01} alt="Carlos Mendes" style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "20px" }} />
                    <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Carlos Mendes</h4>
                    <p style={{ fontSize: "1rem", color: "gray" }}>Proprietário de Piscicultura</p>
                    <p>A precisão dos sensores de pH e oxigênio revolucionou nossa operação.</p>
                    <a href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>Saiba mais sobre Carlos Mendes</a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                    <img src={agro02} alt="Ana Pereira" style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "20px" }} />
                    <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Ana Pereira</h4>
                    <p style={{ fontSize: "1rem", color: "gray" }}>Engenheira Ambiental</p>
                    <p>Com a tecnologia de monitoramento constante, a qualidade dos peixes aumentou.</p>
                    <a href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>Saiba mais sobre Ana Pereira</a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                    <img src={agro03} alt="Jorge Silva" style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "20px" }} />
                    <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Jorge Silva</h4>
                    <p style={{ fontSize: "1rem", color: "gray" }}>Técnico em Piscicultura</p>
                    <p>O sistema de monitoramento de temperatura otimizou os cuidados diários.</p>
                    <a href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>Saiba mais sobre Jorge Silva</a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                    <img src={agro04} alt="Mariana Costa" style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "20px" }} />
                    <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Mariana Costa</h4>
                    <p style={{ fontSize: "1rem", color: "gray" }}>Bióloga</p>
                    <p>A integração do monitoramento de pH e temperatura garantiu a longevidade dos peixes.</p>
                    <a href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>Saiba mais sobre Mariana Costa</a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                    <img src={agro01} alt="Lucas Almeida" style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "20px" }} />
                    <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Lucas Almeida</h4>
                    <p style={{ fontSize: "1rem", color: "gray" }}>Administrador de Fazendas</p>
                    <p>A automação dos relatórios facilitou nossa tomada de decisão.</p>
                    <a href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>Saiba mais sobre Lucas Almeida</a>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                    <img src={agro02} alt="Fernanda Lopes" style={{ borderRadius: "50%", width: "80px", height: "80px", marginBottom: "20px" }} />
                    <h4 style={{ fontSize: "1.4rem", marginBottom: "5px" }}>Fernanda Lopes</h4>
                    <p style={{ fontSize: "1rem", color: "gray" }}>Gestora de Recursos Hídricos</p>
                    <p>O sistema inteligente ajudou a reduzir custos operacionais.</p>
                    <a href="#" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "#2c3e50", color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "20px" }}>Saiba mais sobre Fernanda Lopes</a>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</section>














<section id="our-story" style={{ backgroundColor: "#ffffff", padding: "60px 20px", textAlign: "center" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#2c3e50", marginBottom: "20px" }}>Nossa História</h2>
        <p style={{ fontSize: "1.2rem", color: "#7f8c8d", marginBottom: "40px" }}>
            Conheça a jornada da Zenith, desde a sua concepção até se tornar referência em tecnologia para piscicultura.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}>
            
            {/* História da Empresa */}
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "center" }}>
                
                {/* Texto da História */}
                <div style={{ flex: "1 1 500px", textAlign: "left" }}>
                    <h3 style={{ fontSize: "2rem", color: "#2c3e50", marginBottom: "15px" }}>O Início</h3>
                    <p style={{ fontSize: "1rem", color: "#7f8c8d", marginBottom: "15px", lineHeight: "1.6" }}>
                        Em 2024, durante o renomado Show Rural, nossos fundadores identificaram uma lacuna significativa no monitoramento e gestão da piscicultura. Observando os desafios enfrentados pelos piscicultores, surgiu a ideia de desenvolver uma solução tecnológica inovadora para otimizar a criação de peixes.
                    </p>
                    
                    <h3 style={{ fontSize: "2rem", color: "#2c3e50", marginBottom: "15px" }}>A Fundação da Zenith</h3>
                    <p style={{ fontSize: "1rem", color: "#7f8c8d", marginBottom: "15px", lineHeight: "1.6" }}>
                        Com paixão pela tecnologia e compromisso com a sustentabilidade, a Zenith foi oficialmente fundada no início de 2025. Nossa missão sempre foi fornecer ferramentas precisas e acessíveis para que piscicultores possam maximizar sua produtividade enquanto mantêm a saúde e o bem-estar dos peixes.
                    </p>
                    
                    <h3 style={{ fontSize: "2rem", color: "#2c3e50", marginBottom: "15px" }}>Crescimento e Inovação</h3>
                    <p style={{ fontSize: "1rem", color: "#7f8c8d", lineHeight: "1.6" }}>
                        Desde então, a Zenith tem se dedicado a inovar continuamente, integrando inteligência artificial e análises de dados avançadas em nossas soluções. Hoje, somos reconhecidos como líderes no setor, ajudando piscicultores a alcançar excelência operacional e sustentabilidade ambiental.
                    </p>
                </div>
                
                {/* Imagem Representativa */}
                <div style={{ flex: "1 1 400px" }}>
                    <img 
                        src={fishinge} 
                        alt="Nossa História" 
                        style={{ width: "100%", height: "auto", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }} 
                    />
                </div>
            </div>
            
            {/* Citação Inspiradora */}
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <p style={{ fontSize: "1.2rem", color: "#2c3e50", fontStyle: "italic" }}>
                    "Transformamos desafios em oportunidades, utilizando a tecnologia para promover uma piscicultura mais eficiente e sustentável."
                </p>
                <p style={{ fontSize: "1rem", color: "#7f8c8d", textAlign: "right", marginTop: "10px" }}>
                    — Fundador da Zenith
                </p>
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
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <p style={{ fontSize: "1.1rem", color: "#2c3e50" }}>
            Endereço: Rua da Piscicultura, 123 - Cascavel, PR
        </p>
    </div>
</section>





        <main className="flex justify-center items-center h-screen bg-gray-100">
            <Contato />
        </main>















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
