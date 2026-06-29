
import carousel1 from '../../assets/img/carousel-1.jpg'
import carousel2 from '../../assets/img/carousel-2.jpg'
import carousel3 from '../../assets/img/carousel-3.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className='ms-4'>
    <Slider {...settings}>
      <div>
        <img src={carousel1} alt="First slide" className='img-carousel'/>
      </div>
      
      <div>
        <img src={carousel2} alt="Second slide" className='img-carousel'/>
      </div>
      
      <div>
        <img src={carousel3} alt="Thirth slide" className='img-carousel'/>
      </div>
    </Slider>
    </div>
  );
};

export default ImageSlider;
