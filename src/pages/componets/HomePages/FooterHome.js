import React from 'react'
import logo from '../../../assets/img/logo.png'
import { Link } from "react-router-dom";
function FooterHome() {
  return (
    

<footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Link to="/" class="flex items-center">
      <img src={logo} class="h-28 mr-3" alt="Flowbite Logo"></img>
      
    </Link>
      <span class="ml-3 text-xl">Mallku Villa Mar</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 jhson
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href='https://www.facebook.com/profile.php?id=100064713695465&sk=videos' class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      
    </span>
  </div>
</footer>


  )
}

export default FooterHome