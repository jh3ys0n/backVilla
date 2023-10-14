import React, { useEffect, useRef } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video1 from '../../../assets/videos/video1.mp4';
import video2 from '../../../assets/videos/video2.mp4';
import video3 from '../../../assets/videos/video3.mp4';

function GalleryVideo() {
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

  return (
    <>
      <section className="text-gray-600 body-font">
      
        <div className="container px-5 py-10 md:py-24 mx-auto">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-500 h-full bg-red-500"></div>
      </div>
        <div class="flex w-full mb-10 md:mb-20 flex-wrap">
      
      <h1 class="mb-4  text-5xl tracking-tight font-extrabold py-10 text-gray-700">Galleria de Videos</h1>
      
    </div>
          <div className="flex flex-wrap -m-4">
            <a href={video1} className="glightbox lg:w-1/3 sm:w-1/2 p-4">
              <video
                className="w-full aspect-video"
                controls
              >
                <source src={video1} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            </a>
            <a href={video2} className="glightbox lg:w-1/3 sm:w-1/2 p-4">
              <video
                className="w-full aspect-video"
                controls
              >
                <source src={video2} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            </a>
            <a href={video3} className="glightbox lg:w-1/3 sm:w-1/2 p-4">
              <video
                className="w-full aspect-video"
                controls
              >
                <source src={video3} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryVideo;
