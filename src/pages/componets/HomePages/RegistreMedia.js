import axios from "axios";
import UploadMedia from './UploadMedia';
function RegistreMedia() {
   

    return (
    
    <>
<div class="w-full text-center bg-white my-16    dark:border-gray-700">
   <h5 class="text-3xl my-8 font-bold text-gray-900 dark:text-gray-900">Actualizar imagenes de portada</h5>
   <div class="items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <div class="grid grid-cols-1 xl:mx-[200px] md:grid-cols-3">
         <div>
            <UploadMedia name="portada-1"  ></UploadMedia>
         </div>
         <div>
            <UploadMedia name="portada-2" ></UploadMedia>
         </div>
         <div>
            <UploadMedia name="portada-3"  ></UploadMedia>
         </div>
      </div>
   </div>
</div>

 </>
  )
}

export default RegistreMedia