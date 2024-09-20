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
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={150} height={120} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
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
                    <h1>Bem vindo a Zenith</h1>
                    <p>Na Zenith, garantimos a saúde dos seus peixes com tecnologia de ponta: monitoramento preciso de pH, oxigenação e temperatura!</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section id="solutions" className="container py-lg">
                <h2 className="section-title">Um novo passo para a piscicultura</h2>
                <p className="section-description">
                Transforme a sua psicultura com a Zenith: controle completo de pH, oxigenação e temperatura para garantir a saúde dos seus peixes!
                </p>
                <div className="solutions-grid">
                    <div className="solution-card">
                        <img src={datalogo} alt="Raspagem Python" className="raspagem-logo" />
                        <h3>Precisão de dados</h3>
                        <p>Na Zenith, cuidamos da qualidade da sua água: monitore pH, oxigenação e temperatura com precisão e alcance o sucesso na psicultura!</p>
                    </div>
                    <div className="solution-card">
                        <img src={cellph} alt="Analise Python" className="analise-logo" />
                        <h3>Os dados na palma da mão</h3>
                        <p>Na Zenith os dados dos sensores estão disponiveis em tempo real no seu smartphone.</p>
                    </div>
                    <div className="solution-card">
                        <img src={ialogo} alt="Logo Python" className="python-logo" />
                        <h3>Analise de dados por IA</h3>
                        <p>Nossa IA pode monitorar e cuidar e os tanques, em caso de alertas ela podera avisar e dar dicas de como resolver o problema.</p>
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



    <section className="testimonials-section">
        <div className="testimonials-container">
            <h2 className="section-title">Cada cliente é essencial!</h2>
            <p className="section-description">
                Trabalhamos continuamente para garantir a saúde e a qualidade da água em todos os momentos, proporcionando a melhor experiência em piscicultura.
            </p>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <img
                        src={agro01}
                        alt="Carlos Mendes"
                        className="testimonial-image"
                    />
                    <p className="testimonial-text">
                        A precisão dos sensores de pH e oxigênio da água revolucionou nossa operação, garantindo um ambiente seguro para os peixes e maximizando nosso rendimento.
                    </p>
                    <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                    <h4 className="testimonial-name">Carlos Mendes</h4>
                    <p className="testimonial-role">Proprietário de Piscicultura</p>
                </div>

                <div className="testimonial-card">
                    <img
                        src={agro02}
                        alt="Ana Pereira"
                        className="testimonial-image"
                    />
                    <p className="testimonial-text">
                        Com a tecnologia de monitoramento constante da água, tivemos um aumento significativo na qualidade dos peixes e na segurança da produção.
                    </p>
                    <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                    <h4 className="testimonial-name">Ana Pereira</h4>
                    <p className="testimonial-role">Engenheira Ambiental</p>
                </div>

                <div className="testimonial-card">
                    <img
                        src={agro03}
                        alt="Jorge Silva"
                        className="testimonial-image"
                    />
                    <p className="testimonial-text">
                        A facilidade de usar o sistema de monitoramento de temperatura e oxigenação fez toda a diferença na nossa produção, otimizando os cuidados diários com os tanques.
                    </p>
                    <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                    <h4 className="testimonial-name">Jorge Silva</h4>
                    <p className="testimonial-role">Técnico em Piscicultura</p>
                </div>

                <div className="testimonial-card">
                    <img
                        src={agro04}
                        alt="Mariana Costa"
                        className="testimonial-image"
                    />
                    <p className="testimonial-text">
                        A integração da tecnologia de monitoramento de pH e temperatura foi um divisor de águas para garantir a longevidade e a qualidade dos nossos peixes.
                    </p>
                    <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                    <h4 className="testimonial-name">Mariana Costa</h4>
                    <p className="testimonial-role">Bióloga</p>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
