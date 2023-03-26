import React, { useState } from "react";
import axios from "axios";
function UploadMedia(props) {
  
    const [name_props, setName_props] = useState(props.name); 
    const [file, setFile] = useState({title:"",subTitle:""}); 
    const [post, setPost] = React.useState();
    
    React.useEffect(() => {
      axios.get("http://localhost:8080/api/mediaFinder/portadas/"+props.name).then((response) => {
        setPost(response.data);
      });
    }, []);
    
  console.log(post);

    function handleChange(e) {

        if(e.target.name=="title" || e.target.name=="subTitle"){
          setFile({
            ...file,
            [e.target.name]:e.target.value
          });
        }
        else{
          setFile({
            ...file,
            [name_props]:URL.createObjectURL (e.target.files[0]),["document"]:e.target.files[0]
          });
       }   
    }

    
 
    function createPost() {
      const formdata = new FormData();
      formdata.append("title", file.title);
      formdata.append("subTitle", file.subTitle);
      formdata.append("slug", props.name);
      formdata.append("document",file.document);
      
      console.log("------------------------------------------->")
      axios
        .post("http://localhost:8080/api/mediaFinder/", formdata)
        .then((res) => {
          setPost(res);
        });
        
    }
    
  
    return (
    <>
  <form name={props.name} encType='multipart/form-data'  >
   <div className='mx-10 '>
      <label for="title" class="block mb-5 text-sm font-medium text-gray-900 ">{props.name} </label>
      <div class="flex items-center justify-center w-full">
         <label for={name_props} class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
         Click para cambiar de imagen
         <img className='object-cover h-full w-48' src={handleChange} ></img>
         <input id={name_props}  type="file" class="hidden"  name={name_props} onChange={handleChange} ></input>
         </label>
      </div>
      <div class="my-10">
         <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Titulo</label>
         <input type="" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required value={file.title}  onChange={handleChange} name="title" />
      </div>
      <div class="mb-6">
         <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Descipcion</label>
         <input type="" id="subTitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required name="subTitle" value={file.subTitle} onChange={handleChange} />
      </div>
      <div class="flex items-start mb-6">
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={createPost}>Subir</button>
   </div>
</form>
     </>
    


  )
}

export default UploadMedia

/**
import { Portal } from '@mui/material';
import 'animate.css';
import axios from "axios";
import React, {useEffect, useState } from 'react';
function HomePages() {
    const images = ["img1.jpg","img2.jpg","img3.jpg"];
    const [index, setIndex] = useState(0);
    const [selectImg, setSelectImg] = useState(images[0]);
    const [post,setPost] =useState();
    
    useEffect(() => {
     
    const interval = setInterval(() => {
      selectNewImage(index, images);
      }, 2000);
      return () => clearInterval(interval);
   
  }); 

  React.useEffect(() => {
      axios.get("http://localhost:8080/api/mediaFinder/portadas/get/")
      .then(response => setPost(response.data))
      .catch(error => console.log(error));
     
    }, []);
    console.log(post);
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
            <h1 className='text-white animate__animated animate__bounce  text-8xl font-dancing-script'>asdasdas</h1>
            <h2 className='text-white  text-3xl font-tilt-Warp pt-11'>Un lugar magico y lleno de energia, el espejo del mundo</h2>
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