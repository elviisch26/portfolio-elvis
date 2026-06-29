import React, { useEffect, useState } from "react"
import { SearchBoxCv } from "../SearchBoxCv/SearchBoxCv"
import './NavbarCv.css'
import { Link, useLocation } from "react-router-dom"
import { COLORS, PROFILE } from "../../constants/profile"
import elvis from '../../assets/img/elvis.jpg'
import { CV_PDF_DOWNLOAD_NAME, CV_PDF_PATH } from "../../constants/cvPdf"

export const NavbarCv = ({claseTodo, claseProy, claseConoc, claseEdu, claseExp}) => {
    const { pathname } = useLocation()
    const shouldHighlightDownload = pathname === "/curriculum_vitae" || pathname === "/curriculum_vitae/"

    const [checked, setChecked] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    );

    useEffect(() => {
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
    }, [checked]);

    const toggleThemeChange = () => {
        if (checked === false) {
            localStorage.setItem("theme", "dark");
            setChecked(true);
        } else {
            localStorage.setItem("theme", "light");
            setChecked(false);
        }
    };

    return (
        <div className="container-fluid row">
            <div className="text-center ">
                <Link to="/home" className="text-decoration-none elvis-logo-mobile">
                    {COLORS.map((item, index) => (
                        <span key={index} className={item.color}>{item.letter}</span>
                    ))}
                </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center container mt-4 col-12 col-sm-9">
                <div className="d-flex align-items-center">
                    <div>
                        <Link to="/home" className="text-decoration-none elvis-logo">
                            {COLORS.map((item, index) => (
                                <span key={index} className={item.color}>{item.letter}</span>
                            ))}
                        </Link>
                    </div>
                    <div>
                        <SearchBoxCv />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-3 icon-photo-cv">
                    <a
                        href={CV_PDF_PATH}
                        download={CV_PDF_DOWNLOAD_NAME}
                        className={`cv-download-link ${shouldHighlightDownload ? "cv-download-link--highlight" : ""}`}
                        title="Descargar currículum (PDF)"
                    >
                        <span className="material-symbols-outlined">download</span>
                    </a>
                    <span className="material-symbols-outlined">
                        apps
                    </span>
                    <img src={elvis} className="rounded-circle" style={{width:'2rem', height:'2rem', objectFit:'cover'}} alt="profile" />
                    <label className="ps-2 pt-2">
                        <input
                            type="checkbox"
                            defaultChecked={checked}
                            onChange={() => toggleThemeChange()}
                            style={{ display: "none" }}
                        />
                        <span className="material-symbols-outlined sun-icon-cv">
                            brightness_4
                        </span>
                        <span className="material-symbols-outlined sun-icon-mobile">
                            brightness_4
                        </span>
                    </label>
                </div>
            </div>
            <div className="titulos-cv container col-12 col-lg-9">
                <div className="swiper-container-paginas">
                    <div className="swiper-wrapper-paginas scrollableDiv-paginas d-flex">
                        <div className='swiper-slide-paginas ps-4 pt-3 fade-in'>
                            <div className="d-flex gap-4">
                                <Link className={`${claseTodo} titulos-cv-style`} to="/curriculum_vitae">Todo</Link>
                                <Link className={`${claseExp} titulos-cv-style`}  to="/experiencia">Experiencia</Link>
                                <Link className={`${claseEdu} titulos-cv-style`}  to="/educacion">Educación</Link>
                                <Link className={`${claseConoc} titulos-cv-style`}  to="/conocimientos">Conocimientos</Link>
                                <Link className={`${claseProy} titulos-cv-style`}  to="/proyectos">Proyectos</Link>
                                <a className="titulos-cv-style" target="_blank" href={PROFILE.githubUrl}>Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
