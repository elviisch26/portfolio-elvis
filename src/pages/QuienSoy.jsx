import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";

export const QuienSoy = () => {
    return (
        <div className="page-layout">
            <NavbarCv />
            <div className="container row d-flex flex-wrap justify-content-center my-5">
                <div className="col-12 col-sm-8">
                    <h1 className="pb-5">Quién soy</h1>
                    <p className="pb-3">Soy Elvis, nacido en Manta, Manabí, Ecuador, apasionado por el desarrollo de software, la tecnología y la resolución de problemas complejos. Estudiante de Ingeniería en Tecnologías de la Información en la Universidad Laica Eloy Alfaro de Manabí (ULEAM), donde he adquirido una sólida base técnica y práctica.</p>
                    <p className="pb-3">Me defino como una persona curiosa, autodidacta y dinámica, que le gusta estar en constante movimiento buscando nuevos retos y desafíos. Durante mi formación he trabajado con tecnologías como Angular, NestJS, Laravel, Flutter, y bases de datos SQL, participando en el diseño, desarrollo y optimización de soluciones tecnológicas para el sector público y educativo.</p>
                    <p className="pb-5">Mi objetivo es consolidarme como un gran profesional en el desarrollo de software y seguir aprendiendo día a día para estar actualizado de las nuevas tendencias y tecnologías. Te invito a que sigas recorriendo mi CV para que puedas conocerme mejor.</p>
                </div>
            </div>
            <FooterCv />
        </div>
    )
}
