import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../../assets/img/img1.jpg'
import img2 from '../../../assets/img/img2.jpg'
import img3 from '../../../assets/img/img3.jpg'
function HomePages() {
  const [images, setImages] = React.useState([
    {
      id: 1,
      src: img1,
      alt: 'Image 1',
      subTitle: 'PUEBLO INDIGENA ORIGINARIO',
      title: 'Mallku Villa Mar'
    },
    {
      id: 2,
      src: img2,
      alt: 'Image 2'
    },
    {
      id: 3,
      src: img3,
      alt: 'Image 3'
    },

  ]);
  const [post, setPost] = useState([]);
 React.useEffect(() => {
    axios.get('http://localhost:8080/api/mediaFinder/portadas/get/')
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(post);
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
        {images.map((image,index) => (
          <div class="relative text-center w-full  overflow-hidden rounded-lg h-[550px] md:h-[750px] " key={index}>

        <div class="static  " >
        <img class="object-fill opacity-80  absolute block w-full h-[600px] md:h-[750px]   "
        src={image.src}/>
        <div className='absolute inset-x-0 w-3/4 md:w-2/5 mx-auto -mt-1 pt-6  md:pt-12'>
        <p className='text-black font-bold my-3 text-sm md:text-2xl pt-11 text-center'>{image.subTitle}</p>
          <h1 className='text-[#E63946] my-3  animate__animated animate__bounce text-5xl md:text-9xl font-shadow text-center'>{image.title}</h1>
          
        </div>
        </div>
       
      </div>
        ))}
      </Slider>
    </>
  );
}
export default HomePages 
/**
 <Slider {...settings}>
        {post.map((image,index) => (
          <div class="relative text-center w-full  overflow-hidden rounded-lg h-[550px] md:h-[750px] " key={index}>

        <div class="static  " >
        <img class="object-fill opacity-80  absolute block w-full sm:h-[750px] h-auto  "
        src={image.base64}/>
        <div className='absolute inset-x-0 w-3/4 md:w-2/5 mx-auto -mt-1  pt-12'>
        <p className='text-black font-light my-3 text-xl md:text-2xl pt-11 text-center'>{image.subTitle}</p>
          <h1 className='text-[#E63946] my-3 font-light animate__animated animate__bounce text-4xl md:text-9xl font-dancing-script text-center'>{image.title}</h1>
          
        </div>
        </div>
       
      </div>
        ))}
      </Slider>


      ----------------------------------------
import { Portal } from '@mui/material';
import 'animate.css';
import axios from "axios";
import React, {useEffect, useState } from 'react';
function HomePages() {
  const newArray = [];  
  const images = ["img1.jpg","img2.jpg","img3.jpg"];
    const [index, setIndex] = useState(0);
    const [selectImg, setSelectImg] = useState(images[0]);
    const [post, setPost] = React.useState(null);
    const [img, setImg] = React.useState();
    useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(index, images);
      }, 5000);
      //setMedia(post[index]);
     // console.log(post[0]);
      return () => clearInterval(interval);
      
  }); 

    React.useEffect(() => {
      axios.get('http://localhost:8080/api/mediaFinder/portadas/get/').then((response) => {
        setPost(response.data);
      });
      axios.get('http://localhost:8080/api/mediaFinder/portadas/images').then((response) => {
        setImg(response.data);
      });
    }, []);
    img.map((value, index) => {
     // console.log(value.content); // Imprime el valor del estado en cada iteración
    });

    
   function selectNewImage(index, images, next = true) {
   
    setTimeout(() => {
      const condition = next ? index < images.length - 1 : index > 0;
      const nextIndex = next ? (condition ? index + 1 : 0) : condition ? index - 1 : images.length - 1;
      setSelectImg(images[nextIndex]);
      setIndex(nextIndex);
    }, 500);
  }

  const previous = () => {
    selectNewImage(index, images, false);
  };

  const next = () => {
    selectNewImage(index, images);
  };
  return (
    <>
   
  <div
  class="relative"
  data-te-carousel-init
  data-te-carousel-slide>
 
  <button onClick={previous}
    class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="prev">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span>
  </button>
  <div class="relative  text-center  overflow-hidden rounded-lg md:h-[650px] ">

        <div class="static  duration-700 ease-in-out" >
        <img class="object-cover  absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
        src={require(`../../../assets/img/${selectImg}`)}
        alt="Wild Landscape" />
        <div className='absolute inset-x-0  w-3/4 md:w-2/5 mx-auto -mt-1 rounded-lg rounded-t-none pt-16'>
            <h1 className='text-white animate__animated animate__bounce  text-8xl font-dancing-script'>{index}</h1>
            <h2 className='text-white  text-3xl font-tilt-Warp pt-11'>asd</h2>
        </div>
        </div>
       
    </div>

  <button onClick={next}
    class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span>
  </button>
</div>

  </>
  )
}

export default HomePages 



 */