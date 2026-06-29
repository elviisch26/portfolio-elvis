import { NavbarCv } from "../components/NavbarCv/NavbarCv";
import { FooterCv } from "../components/FooterCv/FooterCv";
import { InfoCard } from "../components/InfoCard/InfoCard";
import dev from '../../src/assets/img/dev.png'
import git from '../../src/assets/img/git.png'
import sql from '../../src/assets/img/sql.png'

export const Conocimientos = () => {
    return (
        <div className="page-layout">
            <NavbarCv claseConoc={'titulos-cv-style-conoc'} />
            <div className="container row d-flex flex-wrap justify-content-center">
                <div className="col-12 col-sm-8">
                    <InfoCard title={'Lenguajes de Programación'} url={"JavaScript, TypeScript, Python, Dart"} urlTitle={"Lenguajes"} img={dev} description={"Manejo múltiples lenguajes de programación para desarrollo web y móvil. JavaScript y TypeScript para frontend y backend, Python para análisis de datos e IA, y Dart para aplicaciones móviles con Flutter."} />

                    <InfoCard title={'Frontend & Backend'} url={"Angular, Vue.js, Bootstrap, NestJS, Laravel"} urlTitle={"Frameworks"} img={dev} description={"Experiencia en desarrollo frontend con Angular, Vue.js y Bootstrap, y backend con NestJS (Node.js) y Laravel (PHP). Desarrollo de APIs RESTful, autenticación, autorización y arquitecturas modulares y escalables."} />

                    <InfoCard title={'Desarrollo Móvil'} url={"Flutter, Dart, Firebase"} urlTitle={"Mobile"} img={dev} description={"Desarrollo de aplicaciones móviles multi-plataforma con Flutter y Dart. Integración de Firebase para autenticación, base de datos en tiempo real y notificaciones push."} />

                    <InfoCard title={'Inteligencia Artificial'} url={"Python, LSTM, GRU, NLP, Streamlit"} urlTitle={"AI & Machine Learning"} img={dev} description={"Conocimientos en deep learning y procesamiento de lenguaje natural (NLP) con redes neuronales recurrentes (LSTM y GRU). Desarrollo de modelos de análisis de sentimientos y visualización interactiva con Streamlit."} />

                    <InfoCard title={'Bases de Datos'} url={"SQL Server, PostgreSQL, MongoDB"} urlTitle={"Bases de datos"} img={sql} description={"Experiencia en bases de datos relacionales (SQL Server, PostgreSQL) y no relacionales (MongoDB). Diseño de esquemas, consultas complejas, replicación distribuida con MongoDB ReplicaSet y optimización de consultas."} />

                    <InfoCard title={'DevOps & Herramientas'} url={"Docker, Kubernetes, Git, GitHub, GitLab"} urlTitle={"DevOps"} img={git} description={"Uso de Docker para entornos estandarizados y Kubernetes para orquestación de contenedores. Control de versiones con Git, GitHub y GitLab. Administración de entornos Windows y Linux."} />

                    <InfoCard title={'Visualización de Datos'} url={"Power BI, Streamlit"} urlTitle={"Visualización"} img={dev} description={"Creación de dashboards interactivos y reportes visuales con Power BI. Desarrollo de aplicaciones de datos con Streamlit para visualización de modelos de IA y análisis en tiempo real."} />

                    <InfoCard title={'Metodologías Ágiles'} url={"Scrum, Kanban"} urlTitle={"Metodologías"} img={dev} description={"Trabajo bajo metodologías ágiles como Scrum y Kanban para la gestión eficiente de proyectos. Organización de sprints, reuniones diarias y retrospectivas para mejora continua."} />
                </div>
            </div>
            <FooterCv />
        </div>
    )
}
