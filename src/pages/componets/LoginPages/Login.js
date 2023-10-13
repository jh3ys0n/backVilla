import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response =  axios.post("URL_DEL_BACKEND", formData);
      // Maneja la respuesta del servidor según tus necesidades
    } catch (error) {
      // Maneja los errores de la solicitud
    }
  };
    return (
      <>

<div style={{ backgroundImage: 'url("")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div class="h-screen font-sans bg-cover bg-center" >
<div class="container mx-auto h-full flex flex-1 justify-center items-center">
    <div class="w-full max-w-lg">
      <div class="leading-loose">
        <form method="post" class="max-w-sm m-4 text-xl p-10 bg-white bg-opacity-25 rounded shadow-xl">
            <p class="text-[#1D3557] text-3xl font-medium text-center font-bold">Iniciar Sesión</p>
              <div class="">
                <label class="block text-sm text-white" for="usuario">usuario</label>
                <input value={formData.user}
                onChange={handleChange}
                name="user" 
                class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="text" id="user"  placeholder="Usuario" aria-label="user" required></input>
              </div>
              <div class="mt-2 my-3">
                <label class="block  text-sm text-white">Contraseña</label>
                 <input 
                  name="password"
                  value={formData.contraseña}
                  onChange={handleChange}
                 class="w-full  px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password" id="password" placeholder="Contraseña" arial-label="password" required></input>
              </div>
              
              <div class="text-center grid grid-cols-2">
              <div class="mt-4 my-3 text-xl items-center flex justify-between">
                <button class="px-4 py-1 my-3 text-white font-medium  tracking-wider bg-[#1D3557] hover:bg-gray-400 rounded"
                  type="submit">Ingresar</button>
             
              </div>
              <div class="mt-4 my-3 text-xl items-center flex justify-between">
                <button class="px-4 py-1 my-3 text-white font-medium  tracking-wider bg-[#E63946] hover:bg-gray-800 rounded"
                  type="submit">Volver</button>
             
              </div>
              </div>

        </form>

      </div>
    </div>
  </div>
</div>
</div>

      </>
    )
  }


export default Login