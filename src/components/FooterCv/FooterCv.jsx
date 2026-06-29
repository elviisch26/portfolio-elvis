import React from 'react';
import './FooterCv.css'
import { PROFILE } from '../../constants/profile'

export const FooterCv = () => {
    return (
        <>
            <div className='footer-cv-container'>
                <div className='footer-cv container d-flex pb-2'>
                    <div className='d-flex flex-wrap align-items-center'>
                        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
                        <span className='text-secondary mx-3'>|</span>
                        <a
                            href={PROFILE.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <hr/>
            </div>
        </>
    )
}
