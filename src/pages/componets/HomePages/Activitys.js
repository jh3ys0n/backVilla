import React from 'react'
import image1 from '../../../assets/img/273472377_4857901764330398_4876026803630709051_n.jpg';
import image2 from '../../../assets/img/277361061_4992614274192479_4650531906322919881_n.jpg';
import image3 from '../../../assets/img/301404312_5409951572458745_4351365782841224867_n.jpg';
function Activitys() {
  //bg-gradient-to-t from-red-200 to-whiter-500
    return (
    <section class=" text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col ">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-500 h-full bg-red-500"></div>
      </div>
      <div class="flex font-light text-gray-900 sm:text-lg lg:text-2xl flex-wrap sm:flex-row flex-col py-6 mb-12 ">
      <h2 class="mb-4 text-5xl tracking-tight font-extrabold py-5 text-gray-700 ">Acticidades economicas</h2>
        <p class="sm:w-3/5  leading-relaxed text-2xl sm:pl-10 pl-0 ">El pueblo indigena originario cuenta con diversas actividades economicas las cuales se pueden mencionar los siguientes:</p>
      </div>
    </div>
    <div class="font-light text-gray-900 sm:text-lg lg:text-4xl flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={image1}/>
        </div>
        <h2 class="text-2xl font-medium title-font text-gray-900 mt-5">Ganaderia</h2>
        <p class="text-xl leading-relaxed mt-2"> La ganadería ha sido una actividad económica importante para el pueblo indigena originario a lo largo de su historia, proporcionando alimento, trabajo y recursos económicos</p>
       
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={image2}/>
        </div>
        <h2 class="text-2xl font-medium title-font text-gray-900 mt-5">Agricultura</h2>
        <p class="text-xl leading-relaxed mt-2">La quinua es un cultivo altamente sostenible y adaptable, capaz de crecer en suelos pobres y en condiciones climáticas extremas</p>
        
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={image3}/>
        </div>
        <h2 class="text-2xl font-medium title-font text-gray-900 mt-5">Turismo</h2>
        <p class="text-xl leading-relaxed mt-2">El turismo en el pueblo indigena originario Mallku Villamar ha tenido un impacto positivo en la economía local, proporcionando empleo y oportunidades para el desarrollo de pequeños negocios y emprendimientos</p>
       
      </div>
      
    </div>
   
  </div>
  
</section>
  )
}

export default Activitys