import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleIcons from '../../assets/img/Google-icons.png'
import './SearchBoxHome.css'

export const SearchBoxHome = () => {

    const navigate = useNavigate();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate('/curriculum_vitae');
        }
      };
    


    return (
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className="input-container">
                    <span className="material-symbols-outlined magnify-icon">
                        search
                    </span>
                    <input type="text" className='search-box' onKeyDown={handleKeyPress} />
                    <img className='google-icons' src={googleIcons} />
                </div>
                <div className='d-flex gap-3 pt-4'>
                    <Link to="/curriculum_vitae" className='btn-search-box'>Buscar con Google</Link>
                    <Link to="/curriculum_vitae" className='btn-search-box'>Voy a tener suerte</Link>
                </div>
            </div>
    )
}
