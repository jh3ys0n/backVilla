import React, { useEffect, useRef } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import gallery1 from '../../../assets/img/gallery1.jpg'
import gallery2 from '../../../assets/img/gallery2.jpg'
import gallery3 from '../../../assets/img/gallery3.jpg'
import gallery4 from '../../../assets/img/gallery4.jpg'
import gallery5 from '../../../assets/img/gallery5.jpg'
import gallery6 from '../../../assets/img/gallery6.jpg'

import gallery7 from '../../../assets/img/img1.jpg'
import gallery8 from '../../../assets/img/img2.jpg'
import gallery9 from '../../../assets/img/img3-1.jpg'
import gallery10 from '../../../assets/img/img3.jpg'
import gallery11 from '../../../assets/img/img3as.jpg'
import GalleryVideo from './GalleryVideo';

function Gallery() {
  const lightboxRef = useRef(null);
  
    useEffect(() => {
      const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
      });
  
      lightboxRef.current = lightbox;
  
      return () => {
        if (lightboxRef.current) {
          lightboxRef.current.destroy();
        }
      };
    }, []);
    const images = [
      gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10,gallery11
    ];

    function compareRandom() {
      return Math.random() - 0.5;
    }
    
    images.sort(compareRandom);
  
   
    return (
      <>
      <section class=" bg-gradient-to-t from-red-50  text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      
      <h1 class="mb-4 text-5xl tracking-tight font-extrabold py-5 text-gray-700">Galleria de Fotos</h1>
      
    </div>
   
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <a  href={images[0]} class="glightbox md:p-2 p-1 w-1/2">
          <img alt="gallery" class=" w-full object-cover h-full object-center block" src={images[0]}/>
        </a>
        <a href={images[1]} class="glightbox md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={images[1]}/>
        </a>
        <a href={images[2]} class="glightbox md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={images[2]}/>
        </a>
      </div>
      <div  class="flex flex-wrap w-1/2">
        <a href={images[3]}  class="glightbox md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={images[3]}/>
        </a>
        <a href={images[4]}  class="glightbox md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={images[4]}/>
        </a>
        <a href={images[5]}  class="glightbox md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={images[5]}/>
        </a>
      </div>
    </div>
  </div>
  <GalleryVideo></GalleryVideo>
</section>

</>
    );
  }
  
  // Función para reordenar un array aleatoriamente
  function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  export default Gallery;