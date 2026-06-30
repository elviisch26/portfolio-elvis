import React from "react"
import './PersonalCard.css'
import { Link } from "react-router-dom"
import logoGithub from '../../assets/img/logo-github.webp'
import { PROFILE } from '../../constants/profile'
import elvis from '../../assets/img/elvis.jpg'
import { CV_PDF_DOWNLOAD_NAME, CV_PDF_PATH } from '../../constants/cvPdf'

export const PersonalCard = ({LinkTo}) => {
    return (
        <div className="personal-card container px-4">
            <div>
                <p className="profile-name pb-2">{PROFILE.name}</p>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <p className="pe-2 profile-rol">{PROFILE.role}</p>
                        <span className="material-symbols-outlined">
                            more_vert
                        </span>
                    </div>
                    <div>
                        <Link to={LinkTo}>
                            <span className="material-symbols-outlined arrow-icon">
                                chevron_right
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="photo-block text-center">
                <img src={elvis} className="img-fluid" alt="profile" style={{maxWidth:'100%', height:'auto', borderRadius:'8px'}} />
            </div>
            <div className="pb-4">
                <p className="pt-4 pb-3 profile-description">{PROFILE.name} es un desarrollador web y móvil ecuatoriano, nacido en Manta, Manabí. Estudiante de Ingeniería en Tecnologías de la Información en la ULEAM. Apasionado por la tecnología, la resolución de problemas y el aprendizaje continuo.</p>
                <p className="pb-2"><span className="fw-bold">Nacimiento:</span> Manta, Ecuador</p>
                <p className="pb-2"><span className="fw-bold">Títulos:</span> Ingeniería en Tecnologías de la Información</p>
                <p className="pb-2"><span className="fw-bold">Habilidades blandas:</span> Resolución de problemas complejos, pensamiento analítico, curiosidad intelectual, aprendizaje acelerado, trabajo en equipos multidisciplinarios.</p>
                <p className="pb-2"><span className="fw-bold">Idiomas:</span> Español </p>
                <p className="pb-2"><span className="fw-bold">Intereses:</span> Desarrollo web y móvil, inteligencia artificial.</p>
            </div>
            <div className="perfiles">
                <p className="fs-2 pb-2">Perfiles</p>
                <div className="d-flex gap-3 align-items-center">
                    <a target="_blank" href={PROFILE.githubUrl} rel="noopener noreferrer" title="Github"><img className="profile-icons" src={logoGithub}/></a>
                    <a
                        href={CV_PDF_PATH}
                        download={CV_PDF_DOWNLOAD_NAME}
                        className="profile-cv-download"
                        title="Descargar currículum (PDF)"
                        aria-label="Descargar currículum (PDF)"
                    >
                        <span className="profile-cv-download-face" aria-hidden="true">
                            <span className="profile-cv-download-label">CV</span>
                        </span>
                    </a>
                </div>
            </div>

            <div className="perfiles">
                <p className="fs-2 pb-2">Tecnologías</p>
                <div className="d-flex flex-wrap gap-2">
                    <span className="tech-badge badge bg-primary">Angular</span>
                    <span className="tech-badge badge bg-success">Vue.js</span>
                    <span className="tech-badge badge bg-danger">NestJS</span>
                    <span className="tech-badge badge bg-warning text-dark">Laravel</span>
                    <span className="tech-badge badge bg-info text-dark">Flutter</span>
                    <span className="tech-badge badge bg-secondary">Python</span>
                    <span className="tech-badge badge bg-dark">Docker</span>
                    <span className="tech-badge badge bg-primary">TypeScript</span>
                    <span className="tech-badge badge bg-success">JavaScript</span>
                    <span className="tech-badge badge bg-danger">SQL</span>
                    <span className="tech-badge badge bg-info text-dark">MongoDB</span>
                    <span className="tech-badge badge bg-warning text-dark">PostgreSQL</span>
                </div>
            </div>
        </div>
    )
}
