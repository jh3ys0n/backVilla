import React from 'react'

function Ubication() {
  return (
<section id="about" class=" text-gray-600 body-font">
  <div class="container px-5 py-16 mx-auto">
    <div class="flex flex-col ">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-500 h-full bg-red-500"></div>
      </div>
      <div class="flex font-light text-gray-900 sm:text-lg lg:text-2xl flex-wrap sm:flex-row flex-col py-6 mb-12 ">
        <h2 class="mb-4 text-5xl tracking-tight font-extrabold md:py-5 text-gray-700 ">Ubicacion</h2>
      </div>
    </div>
    <div className="">
      <iframe className="w-full md:h-[600px] h-[400px] px-2 md:px-20" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9321.98019040541!2d-67.48530147297136!3d-21.75579269243645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96aa8752c8044eb3%3A0x3c2bc8ca61428f92!2sMallcu!5e1!3m2!1ses!2sbo!4v1680396026797!5m2!1ses!2sbo" allowFullScreen loading="lazy"></iframe>
    </div>
  </div>
</section>
   
  )
}

export default Ubication