import React from 'react'
import image1 from '../../../assets/img/12034423_850992321688049_4153007033116948023_o.jpg';
import image2 from '../../../assets/img/12525131_910828839037730_2089979126701171505_o.jpg';
function HistoryComunity() {
  return (
    <>
    <section class="bg-gradient-to-b from-red-200 mt-[-6px]">
    
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        
        <div class="font-light text-gray-500 sm:text-lg lg:text-2xl">
            <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-gray-700 py-10">Historia</h2>
            <p className='text-gray-900'> En el siglo XIX, después de la independencia de Bolivia, la región de Potosí se convirtió en un centro de la actividad minera. La explotación de las minas trajo un gran número de trabajadores de diferentes partes de Bolivia y de otros países. Muchos de estos trabajadores se establecieron en la zona de Villamar y formaron una comunidad.

En las décadas siguientes, la comunidad de Villamar se enfrentó a una serie de desafíos, incluyendo la explotación de la minería a gran escala y la presión de empresas mineras que buscaban adquirir las tierras de la comunidad. En respuesta a estos desafíos, la comunidad se organizó y comenzó a luchar por sus derechos territoriales y culturales. En 1990, la comunidad de Villamar recibió oficialmente el reconocimiento del gobierno boliviano como una comunidad indígena originaria.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src={image1} alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src={image2} />
        </div>
    </div>
</section>
    </>
  )
}

export default HistoryComunity