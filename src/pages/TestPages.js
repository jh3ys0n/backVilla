import React, { useEffect, useRef } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
const TestPage = () => {
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
      <a href="large.jpg" class="glightbox">
        <img src="small.jpg" alt="image" />
      </a>

      <a href="https://vimeo.com/115041822" class="glightbox2">
        <img src="small.jpg" alt="image" />
      </a>

      <a href="large.jpg" class="glightbox3" data-gallery="gallery1">
        <img src="small.jpg" alt="image" />
      </a>
      <a href="video.mp4" class="glightbox3" data-gallery="gallery1">
        <img src="small.jpg" alt="image" />
      </a>

      <a href="large.jpg" class="glightbox4" data-glightbox="title: My title; description: this is the slide description">
        <img src="small.jpg" alt="image" />
      </a>

      <a href="large.jpg" class="glightbox5" data-glightbox="title: My title; description: .custom-desc1">
        <img src="small.jpg" alt="image" />
      </a>

      <div class="glightbox-desc custom-desc1">
        <p>The content of this div will be used as the slide description</p>
        <p>You can add links and any HTML you want</p>
      </div>

      <a href="https://picsum.photos/1200/800" data-glightbox="type: image">
        <img src="small.jpg" alt="image" />
      </a>

      <a href="https://picsum.photos/1200/800" data-type="image">
        <img src="small.jpg" alt="image" />
      </a>
      
      <a href="deafult.jpg" class="glightbox6" data-title="Responsive example"
      data-description="Your browser will choose the optimal image for the resolution"
      data-sizes="(max-width: 600px) 480px, 800px"
      data-srcset="img480.jpx 480w img800.jpg 800w">
        <img src="small.jpg" alt="image" />
      </a>
      </>
    );
    
  };
  
  export default TestPage;
  