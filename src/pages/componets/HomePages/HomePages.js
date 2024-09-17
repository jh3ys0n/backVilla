import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../../assets/img/img1.jpg';
import img2 from '../../../assets/img/img2.jpg';
import img3 from '../../../assets/img/img3.jpg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'animate.css'; // Si usas animate.css para las animaciones
import './css/HomePages.css'; // Importa tu archivo CSS

function HomePages() {
  const [images, setImages] = useState([
    {
      id: 1,
      src: img1,
      alt: 'Image 1',
      subTitle: 'PUEBLO INDIGENA ORIGINARIO',
      title: 'MALLKU VILLA MAR'
    },
    {
      id: 2,
      src: img2,
      alt: 'Image 2',
      subTitle: 'PUEBLO INDIGENA ORIGINARIO',
      title: 'MALLKU VILLA MAR'
    },
    {
      id: 3,
      src: img3,
      alt: 'Image 3',
      subTitle: 'PUEBLO INDIGENA ORIGINARIO',
      title: 'MALLKU VILLA MAR'
    },
  ]);

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/mediaFinder/portadas/get/')
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  function convertBase64(content) {
    const base64 = btoa(
      new Uint8Array(content)
        .reduce((content, byte) => content + String.fromCharCode(byte), '')
    );
    return 'data:image/png;base64,' + base64;
  }

  return (
    <>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="relative text-center w-full overflow-hidden  h-[600px] md:h-[1000px]" key={index}>
            <div className="static">
              <TransitionGroup>
                <CSSTransition
                  key={image.id}
                  timeout={500}
                  classNames="fade "
                >
                  <img className="object-cover  brightness-100 absolute block w-full h-full md:h-[1000px] zoom" src={image.src} alt={image.alt} />
                  
                </CSSTransition>
              </TransitionGroup>
  
              <div className='absolute z-20 inset-x-0 w-3/4 md:w-2/2 mx-auto -mt-1 pt-6 md:pt-44'>
                <p className='text-black font-mono my-3 animate__animated animate__fadeInUp text-sm md:text-2xl pt-11 text-center'>{image.subTitle}</p>
                <h1 className='text-[#E63946] font-shadow my-3 animate__animated animate__fadeInUp text-5xl md:text-9xl text-center'>{image.title}</h1>

                <div className="flex justify-center animate__animated animate__fadeInUp mt-6">
                <button className="relative px-6 py-3.5  flex h-[35px] w-36   md:h-[50px] md:w-40 items-center justify-center overflow-hidden bg-blue-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-400 before:duration-500 before:ease-out hover:shadow-red-400 hover:before:h-56 hover:before:w-56">
                  <span className="relative font-bold z-10">Conoce más</span>
                </button>
                </div>
              </div>
              <div
                    class="absolute inset-0 w-full h-full  to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/30">
                </div>
            </div>
          </div>
        ))}
      </Slider>

    </>
  );
}

export default HomePages;
