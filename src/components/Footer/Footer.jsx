import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div className='footer-block '>
                <div className='px-4 py-3'>
                    <p>Ecuador</p>
                </div>
                <hr className='text-secondary' />
                <div className='d-flex justify-content-between py-3 flex-wrap'>
                    <div className='px-4 d-flex gap-4'>
                        <Link className='footer-links' to="/quien-soy">Quién soy</Link>
                        <Link className='footer-links' to="/experiencia">Experiencia</Link>
                        <Link className='footer-links' to="/educacion">Estudios</Link>
                    </div>
                    <div className='px-4 d-flex gap-4 flex-wrap'>
                        <Link className='footer-links' to="/conocimientos">Conocimientos</Link>
                        <Link className='footer-links' to="/curriculum_vitae">Curriculum</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
