import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import uleam from '../assets/img/uleam.png'

export const Educacion = () => {
    return (
        <div className="page-layout">
            <NavbarCv claseEdu={'titulos-cv-style-edu'}/>
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">
                    <InfoCard
                        title={'Ingeniería en Tecnologías de la Información'}
                        url={"2019 - 2025"}
                        urlTitle={"Universidad Laica Eloy Alfaro de Manabí (ULEAM)"}
                        img={uleam}
                        description={"Formación integral en tecnologías de la información, desarrollo de software, bases de datos, redes y sistemas. La carrera me permitió adquirir una sólida base técnica en programación, arquitectura de software, gestión de proyectos tecnológicos y administración de infraestructura TI. (Ubicación: Manta, Ecuador)"}
                        LinkTo={'https://www.uleam.edu.ec/'}
                    />
                </div>
            </div>
            <FooterCv />
        </div>
    )
}
