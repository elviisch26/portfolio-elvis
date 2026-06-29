import './SearchBoxCv.css'
import googleIconsSearchCv from '../../assets/img/iconos-google-search-cv.png'

export const SearchBoxCv = () => {
    return (
        <div className="input-container-cv container">
           
            <input type="text" className='search-box-cv' />
            <img className='magnify-icon-cv' src={googleIconsSearchCv}/>
            
        </div>
    )
}
