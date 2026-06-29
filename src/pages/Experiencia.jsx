import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import maletin from '../../src/assets/img/maletin.png'

export const Experiencia = () => {
    return (
        <div className="page-layout">
            <NavbarCv claseExp={'titulos-cv-style-exp'} />
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">
                    <InfoCard
                        title={"Cuerpo de Bomberos de Manta"}
                        url={"Angular, NestJS, Docker, GitLab"}
                        urlTitle={"Prácticas Laborales — Programador (Mayo-Agosto 2025)"}
                        img={maletin}
                        description={"Desarrolló un sistema web integral para el área de psicología usando Angular + NestJS. Participación en análisis y mejora continua de procesos. Uso de Docker para entornos estandarizados y GitLab para control de versiones. Brindó soporte técnico y acompañamiento a usuarios."}
                        LinkTo={'https://github.com/elviisch26'}
                    />

                    <InfoCard
                        title={"Institución 'Miguel Torres Luna'"}
                        url={"SQL Server, PHP"}
                        urlTitle={"Programador (Abril-Julio 2023)"}
                        img={maletin}
                        description={"Diseñó y desarrolló un sistema de bases de datos SQL Server para digitalizar el proceso de matrícula. Redujo significativamente el tiempo de inscripción operativo. Capacitación al personal y soporte técnico continuo."}
                        LinkTo={'https://github.com/elviisch26'}
                    />
                </div>
            </div>
            <FooterCv />
        </div>
    )
}
