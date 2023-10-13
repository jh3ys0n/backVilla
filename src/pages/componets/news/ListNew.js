import React from 'react'
import { Link } from 'react-router-dom'
import DialojMedia from '../media/DialojMedia'
function ListNew() {
    
  return (
    <>
<section class="container my-[100px] px-4 mx-auto">
    
    <div class="sm:flex my-5 sm:items-center sm:justify-between">
    <h1 class="mb-4 text-3xl tracking-tight font-extrabold py-5 text-gray-700">Lista de Noticias</h1>
        <div class="flex items-center mt-4 gap-x-3">
        <a href=""  dialog={DialojMedia} class="w-1/2 px-5 py-2 text-md text-white transition-colors duration-200 bg-blue-600 border rounded-lg sm:w-auto  hover:bg-blue-400 d">
            Crear Nueva Noticia
        </a>

        </div>
        <div class="flex items-center mt-4 gap-x-3">
            <button class="w-1/2 px-5 py-2 text-md text-white transition-colors duration-200 bg-red-600 border rounded-lg sm:w-auto  hover:bg-red-400 d">
                Eliminar Seleccionados
            </button>

        </div>
    </div>

    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    
    <table class="w-full font-light text-md text-left text-gray-500 ">
        <thead class="text-md text-gray-700 uppercase bg-gray-50 ">
            <tr>
            <th scope="col" class="px-6 py-3">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    Noticias
                </th>
                <th scope="col" class="px-6 py-3">
                    Fecha de publicacion
                </th>
                
                <th scope="col" class="px-6 py-3 mx-2">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

            <tr class="bg-white  border-b hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap ">
                    Designacion de nuevas autoridades
                </th>
                <td class="px-6 py-4">
                    publicado el 20/07/
                </td>
              
                <td class="px-6 py-4">
                    <a href="#" class="mx-2 text-blue-600 hover:underline">Editar</a>
                    <a href="#" class="  mx-2  text-red-600 hover:underline">Eliminar</a>
                </td>
            </tr>

        </tbody>
    </table>
</div>


    <div class="flex items-center justify-between mt-6">
        <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                previous
            </span>
        </a>

        <div class="items-center hidden md:flex gap-x-3">
            <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md  bg-blue-100/60">1</a>
      </div>

        <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 ">
            <span>
                Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </a>
    </div>
</section>
    </>
   
  )
}

export default ListNew