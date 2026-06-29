import { useState, useEffect } from "react";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import elvis from '../../src/assets/img/elvis.jpg'
import github from '../../src/assets/img/github.svg'
import maletin from '../../src/assets/img/maletin.png'
import estudios from '../../src/assets/img/estudios.png'
import conocimiento from '../../src/assets/img/conocimiento.png'
import proyectos from '../../src/assets/img/proyectos.png'
import { FooterCv } from "../components/FooterCv/FooterCv";
import { PersonalCard } from "../components/PersonalCard/PersonalCard";

export const CurriculumVitae = () => {
    return (
        <div className="page-layout">
            <NavbarCv claseTodo={'titulos-cv-style-todo'} />
            <div className="row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-lg-6">
                    <InfoCard title={"Quién soy - Elvis Chávez"} url={"https://github.com/elviisch26"} urlTitle={"Quién soy"} img={elvis} description={"Te cuento brevemente quién soy y cuáles son mis intereses principales. Te recomiendo primero visitar esta sección para que sepas quién está detrás de todo lo que vas a leer."} LinkTo={'/quien-soy'} />
                    <InfoCard title={"Experiencia - Empleos"} url={"https://github.com/elviisch26"} urlTitle={"Experiencia"} img={maletin} description={"Cuento con experiencia laboral práctica en desarrollo de sistemas web y mantenimiento de infraestructura TI. He trabajado en el sector público desarrollando soluciones a medida con tecnologías modernas como Angular, NestJS, Laravel y Flutter."} LinkTo={'/experiencia'}/>
                    <InfoCard title={"Educación"} url={"https://github.com/elviisch26"} urlTitle={"Educación"} img={estudios} description={"Me encanta estudiar y seguir aprendiendo cosas nuevas todos los días. En esta sección te cuento todo lo que aprendí y estudié a lo largo de mi carrera profesional. Ingeniería en Tecnologías de la Información en la ULEAM."} LinkTo={'/educacion'} />
                    <InfoCard title={"Conocimientos - Aptitudes"} url={"https://github.com/elviisch26"} urlTitle={"Conocimientos y Aptitudes"} img={conocimiento} description={"El estudio y el aprendizaje continuo me han dado la oportunidad de desarrollar muchas habilidades, herramientas y programas que son de gran utilidad en el mundo actual. Te cuento todo lo que sé usar en esta sección."} LinkTo={'/conocimientos'}/>
                    <InfoCard title={"Proyectos"} url={"https://github.com/elviisch26"} urlTitle={"Proyectos"} img={proyectos} description={"Para aprender hay que hacer, y así hice durante mi etapa de estudio y aprendizaje. Te muestro todos los proyectos que fui desarrollando a lo largo de mi crecimiento como programador. Algunos más simples, otros más complejos, pero todos hechos con dedicación y cariño."} LinkTo={'/proyectos'}/>
                    <InfoCard title={"Elvis Chávez - Github"} LinkTo={"https://github.com/elviisch26"} url={"https://github.com/elviisch26"} urlTitle={"Github"} img={github} description={"En Github encontrarás todos mis proyectos, divididos en repositorios y en cada uno, carpetas y archivos que fueron utilizados para desarrollarlos. Te invito a revisarlos."} />
                </div>
                <div className="col-12 col-lg-3 mt-4">
                    <PersonalCard LinkTo={"/quien-soy"}/>
                </div>
            </div>
            <FooterCv />
        </div>
    )
}
