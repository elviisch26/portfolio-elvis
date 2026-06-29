import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { useLayoutEffect } from "react";
import proyectosImg from '../assets/img/proyectos.png'

const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
};

export const Proyectos = () => {
    useLayoutEffect(() => {
        scrollToTop();
    }, []);

    return (
        <div className="page-layout">
            <NavbarCv claseProy={'titulos-cv-style-proy'} />
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">

                    <InfoCard
                        title={"Modelo de IA y Deep Learning"}
                        url={"Python, LSTM, GRU, NLP, Streamlit"}
                        urlTitle={"Análisis de sentimientos con redes neuronales recurrentes"}
                        img={proyectosImg}
                        description={"Proyecto de deep learning para análisis de sentimientos utilizando redes neuronales recurrentes (LSTM y GRU). Implementa procesamiento de lenguaje natural (NLP) para clasificar texto según su carga emocional. Interfaz interactiva construida con Streamlit."}
                        LinkTo={'https://github.com/elviisch26/Redes-Neuronales-Recurrentes'}
                    />

                    <InfoCard
                        title={"Sistema de Gestión de Tareas Académicas"}
                        url={"Laravel 12, PHPUnit, Tailwind CSS, Alpine.js"}
                        urlTitle={"Sistema web educativo con arquitectura limpia"}
                        img={proyectosImg}
                        description={"Sistema web integral para gestión de tareas académicas desarrollado con Laravel 12. Implementa arquitectura limpia, pruebas automatizadas con PHPUnit, interfaz moderna con Tailwind CSS y componentes interactivos con Alpine.js."}
                        LinkTo={'https://github.com/elviisch26/edu-uleam'}
                    />

                    <InfoCard
                        title={"Bcados Rappys Delivery"}
                        url={"Flutter, Dart, Firebase"}
                        urlTitle={"App móvil de delivery multi-plataforma"}
                        img={proyectosImg}
                        description={"Aplicación móvil de delivery desarrollada con Flutter y Dart. Cuenta con autenticación de usuarios, catálogo de productos, integración con WhatsApp para pedidos y base de datos en tiempo real con Firebase."}
                        LinkTo={'https://github.com/elviisch26/Moviles-Proyectoo'}
                    />

                    <InfoCard
                        title={"ODSIE - Sistema de Historias Clínicas Digitales"}
                        url={"NestJS 10, React 18, TypeScript, Supabase, TailwindCSS"}
                        urlTitle={"Gestión digital de historias clínicas con QR"}
                        img={proyectosImg}
                        description={"Sistema integral de gestión de historias clínicas digitales con generación de códigos QR, roles multinivel (administrador, médico, paciente), módulo de pagos integrado y dashboard de reportes. Backend en NestJS con arquitectura modular y frontend en React 18 con TypeScript."}
                        LinkTo={'https://github.com/elviisch26/ODSIE'}
                    />

                    <InfoCard
                        title={"Gps-sd - Rastreo GPS para Ganado"}
                        url={"JavaScript"}
                        urlTitle={"Aplicación web de rastreo GPS en tiempo real"}
                        img={proyectosImg}
                        description={"Aplicación web de rastreo GPS para ganado en tiempo real. Permite monitorear la ubicación de animales mediante dispositivos GPS, visualizar rutas y generar reportes de geolocalización."}
                        LinkTo={'https://gps-sd.vercel.app'}
                    />

                    <InfoCard
                        title={"SD-Replicaset - Sistema Bancario Distribuido"}
                        url={"Python, MongoDB ReplicaSet, CustomTkinter"}
                        urlTitle={"Sistema bancario con replicación distribuida"}
                        img={proyectosImg}
                        description={"Sistema bancario distribuido con replicación en tiempo real entre 3 nodos utilizando MongoDB ReplicaSet. Interfaz gráfica desarrollada con CustomTkinter, operaciones bancarias transaccionales y sincronización automática de datos entre nodos."}
                        LinkTo={'https://github.com/elviisch26/SD-Replicaset'}
                    />

                </div>
            </div>
            <FooterCv />
        </div>
    )
}
