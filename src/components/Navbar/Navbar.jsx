import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { PROFILE } from '../../constants/profile'
import elvis from '../../assets/img/elvis.jpg'

export const Navbar = () => {
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
        <div className='d-flex justify-content-between mt-4 px-4 navbar-style'>
            <div className='gap-4 navbar-left'>
                <Link className='nabvar-links' to='/quien-soy'>Sobre {PROFILE.shortName}</Link>
                <Link className='nabvar-links' to='/proyectos'>Proyectos</Link>
            </div>
            <div className='d-flex gap-4 align-items-center navbar-right'>
                <a className='nabvar-links' target='_blank' rel="noopener noreferrer" href={PROFILE.githubUrl} title="Github">Github</a>
                <span className="material-symbols-outlined">
                    apps
                </span>
                <img src={elvis} className="navbar-profile-photo rounded-circle" alt="profile" />
                <label>
                <input
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={() => toggleThemeChange()}
                    style={{display:"none"}}
                />
                    <span className="material-symbols-outlined sun-icon">
                        brightness_4
                    </span>
            </label>
            </div>
        </div>
    )
}
