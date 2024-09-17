import React, { useEffect, useRef } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import gallery1 from '../../../assets/img/gallery1.jpg';
import gallery2 from '../../../assets/img/gallery2.jpg';
import gallery3 from '../../../assets/img/gallery3.jpg';
import gallery4 from '../../../assets/img/gallery4.jpg';
import gallery5 from '../../../assets/img/gallery5.jpg';
import gallery6 from '../../../assets/img/gallery6.jpg';
import gallery7 from '../../../assets/img/img1.jpg';
import gallery8 from '../../../assets/img/img2.jpg';
import gallery9 from '../../../assets/img/img3-1.jpg';
import gallery10 from '../../../assets/img/img3.jpg';
import gallery11 from '../../../assets/img/img3as.jpg';
import GalleryVideo from './GalleryVideo';

function Gallery() {
  const lightboxRef = useRef(null);
  const imageRefs = useRef([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, []);

  const images = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11
  ];

  function compareRandom() {
    return Math.random() - 0.5;
  }

  images.sort(compareRandom);

  return (
    <>
      <section className="bg-gradient-to-t from-red-50 text-gray-600 body-font">
        <div className="container md:px-5 md:py-24 mx-auto flex flex-wrap">
          <div className="flex w-full md:mb-20 flex-wrap">
            <h1 className="mb-4 text-5xl tracking-tight font-extrabold py-5 text-gray-700">Galería de Fotos</h1>
          </div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <a href={images[0]} className="glightbox md:p-2 p-1 w-1/2">
                <img
                  ref={(el) => (imageRefs.current[0] = el)}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-transform transform hover:scale-105 duration-300 opacity-0 translate-y-5"
                  src={images[0]}
                />
              </a>
              <a href={images[1]} className="glightbox md:p-2 p-1 w-1/2">
                <img
                  ref={(el) => (imageRefs.current[1] = el)}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-transform transform hover:scale-105 duration-300 opacity-0 translate-y-5"
                  src={images[1]}
                />
              </a>
              <a href={images[2]} className="glightbox md:p-2 p-1 w-full">
                <img
                  ref={(el) => (imageRefs.current[2] = el)}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block transition-transform transform hover:scale-105 duration-300 opacity-0 translate-y-5"
                  src={images[2]}
                />
              </a>
            </div>
            <div className="flex flex-wrap w-1/2">
              <a href={images[3]} className="glightbox md:p-2 p-1 w-full">
                <img
                  ref={(el) => (imageRefs.current[3] = el)}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block transition-transform transform hover:scale-105 duration-300 opacity-0 translate-y-5"
                  src={images[3]}
                />
              </a>
              <a href={images[4]} className="glightbox md:p-2 p-1 w-1/2">
                <img
                  ref={(el) => (imageRefs.current[4] = el)}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-transform transform hover:scale-105 duration-300 opacity-0 translate-y-5"
                  src={images[4]}
                />
              </a>
              <a href={images[5]} className="glightbox md:p-2 p-1 w-1/2">
                <img
                  ref={(el) => (imageRefs.current[5] = el)}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-transform transform hover:scale-105 duration-300 opacity-0 translate-y-5"
                  src={images[5]}
                />
              </a>
            </div>
          </div>
        </div>
        <GalleryVideo />
      </section>
    </>
  );
}

export default Gallery;
