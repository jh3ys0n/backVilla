import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../../assets/img/character1.png';
import image2 from '../../../assets/img/character2.png';
import image3 from '../../../assets/img/character3.png';
import image4 from '../../../assets/img/character4.png';
import image5 from '../../../assets/img/character5.png';
import image6 from '../../../assets/img/character6.png';

function Character() {

    const images = [
        { id: 1, src: image1 },
        { id: 2, src: image2 },
        { id: 3, src: image3 },
        { id: 4, src: image4 },
        { id: 5, src: image5 },
        { id: 6, src: image6 },
      ];

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // en milisegundos
        responsive: [
            {
              breakpoint: 1024, // ancho de pantalla
              settings: {
                slidesToShow: 2, // número de elementos a mostrar en pantallas medianas
              },
            },
            {
              breakpoint: 768, // ancho de pantalla
              settings: {
                slidesToShow: 1, // número de elementos a mostrar en pantallas pequeñas
              },
            },
          ],
      };
  return (
    
    <>
    <Slider className='' {...settings}>
  {images.map((image) => (
    <div key={image.id}>
      <img
        className="mx-auto h-28 w-28 object-cover rounded-lg"
        src={image.src}
        alt={`Imagen ${image.id}`}
      />
    </div>
  ))}
</Slider>


    </>



  )
}

export default Character