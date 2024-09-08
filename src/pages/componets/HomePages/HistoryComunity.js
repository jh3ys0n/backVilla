import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importa los iconos de chevron
import image1 from '../../../assets/img/12034423_850992321688049_4153007033116948023_o.jpg';
import image2 from '../../../assets/img/12525131_910828839037730_2089979126701171505_o.jpg';
import 'animate.css'; // Asegúrate de tener animate.css si usas clases de animación

function HistoryComunity() {
  const [openEvent, setOpenEvent] = useState(null); // Estado para controlar qué evento está abierto

  const toggleEvent = (event) => {
    setOpenEvent(openEvent === event ? null : event); // Alterna entre abrir y cerrar el evento
  };

  // Referencias para Intersection Observer
  const refs = useRef([]);
  refs.current = [];

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    }, { threshold: 0.5 });

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-red-100 mt-[-6px]">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          
          <div className="container mx-auto px-4 py-12">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-700">Historia</h1>
            </div>

            <div className="relative font-light border-l-4 border-red-500">
              {/* Evento 1 */}
              <div className="mb-10 ml-4  " ref={addToRefs}>
            
                <button 
                  onClick={() => toggleEvent(1)} 
                  className="text-left w-full flex items-center justify-between "
                >
                  <div>
                    <time className="text-sm font-semibold text-gray-700">Antes de 1949</time>
                    <h3 className="font-semibold text-2xl text-gray-900">Origen del Nombre</h3>
                  </div>
                  {openEvent === 1 ? <FaChevronUp className="text-gray-700" /> : <FaChevronDown className="text-gray-700" />}
                </button>
                {openEvent === 1 && (
                  <p className="text-gray-600 text-xl">
                    La comunidad de Mallcu Cueva, ahora conocida como Mallcu Villa Mar, debe su nombre a una cueva cercana que era utilizada para cabildos por las autoridades autóctonas llamadas "mallcus". Los habitantes vivían dispersos en viviendas rústicas y precarias, dedicándose principalmente a la cría de ganado camélido, ovino y caprino para su alimentación, y utilizaban jumentos como medio de transporte. Practicaban también la agricultura en menor escala, cultivando quinua orgánica.
                  </p>
                )}
              </div>

              {/* Evento 2 */}
              <div className="mb-10 ml-4" ref={addToRefs}>
              
                <button 
                  onClick={() => toggleEvent(2)} 
                  className="text-left w-full flex items-center justify-between"
                >
                  <div>
                    <time className="text-sm font-semibold text-gray-700">9 de Julio de 1949</time>
                    <h3 className="font-semibold text-2xl text-gray-900">Fundación de Mallcu Cueva</h3>
                  </div>
                  {openEvent === 2 ? <FaChevronUp className="text-gray-700" /> : <FaChevronDown className="text-gray-700" />}
                </button>
                {openEvent === 2 && (
                  <>
                    <p className="text-gray-600 text-xl">
                      La comunidad fue fundada oficialmente con la creación de la escuela y la Junta de Auxilio Escolar. Los fundadores de la comunidad fueron:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Sr. Remigio Berna</li>
                      <li>Sra. Eulogia Salvatierra</li>
                      <li>Sr. Apolinar Berna</li>
                      <li>Sr. Simón Vaca</li>
                      <li>Sr. Baltazar Villca</li>
                      <li>Sr. Eugenio Berna</li>
                      <li>Sra. Trinidad Salvatierra</li>
                    </ul>
                    <p className="text-gray-600 mt-2">Posteriormente consiguieron el ÍTEM de una escuela fiscal.</p>
                  </>
                )}
              </div>

              {/* Evento 3 */}
              <div className="mb-10 ml-4" ref={addToRefs}>
              
                <button 
                  onClick={() => toggleEvent(3)} 
                  className="text-left w-full flex items-center justify-between"
                >
                  <div>
                    <time className="text-sm font-semibold text-gray-700">1963</time>
                    <h3 className="font-semibold text-2xl text-gray-900">Cambio de Nombre a Mallcu Villa Mar</h3>
                  </div>
                  {openEvent === 3 ? <FaChevronUp className="text-gray-700" /> : <FaChevronDown className="text-gray-700" />}
                </button>
                {openEvent === 3 && (
                  <p className="text-gray-600 text-xl">
                    En la década de 1960, específicamente en 1963, durante un jatun cabildo (reunión general), se debatió el nombre de la comunidad. Tras varios intercambios, se adoptó el nombre de Mallcu Villa Mar. Este nombre refleja su posición como la última comunidad hacia la frontera con la República de Chile y su proximidad al océano Pacífico.
                  </p>
                )}
              </div>

              {/* Evento 4 */}
              <div className="mb-10 ml-4" ref={addToRefs}>
                
                <button 
                  onClick={() => toggleEvent(4)} 
                  className="text-left w-full flex items-center justify-between"
                >
                  <div>
                    <time className="text-sm font-semibold text-gray-700">1967</time>
                    <h3 className="font-semibold text-2xl text-gray-900">Administración Autónoma</h3>
                  </div>
                  {openEvent === 4 ? <FaChevronUp className="text-gray-700" /> : <FaChevronDown className="text-gray-700" />}
                </button>
                {openEvent === 4 && (
                  <p className="text-gray-600 text-xl">
                    Desde el año 1967, la comunidad cuenta con sus propias autoridades, como el Corregidor, Agente Municipal y Junta Escolar, decidiendo tomar su propio destino mediante una administración autónoma basada en sus usos y costumbres.
                  </p>
                )}
              </div>

              {/* Evento 5 */}
              <div className="mb-10 ml-4" ref={addToRefs}>
                
                <button 
                  onClick={() => toggleEvent(5)} 
                  className="text-left w-full flex items-center justify-between"
                >
                  <div>
                    <time className="text-sm font-semibold text-gray-700">Actualidad</time>
                    <h3 className="font-semibold text-2xl text-gray-900">Desarrollo Actual</h3>
                  </div>
                  {openEvent === 5 ? <FaChevronUp className="text-gray-700" /> : <FaChevronDown className="text-gray-700" />}
                </button>
                {openEvent === 5 && (
                  <p className="text-gray-600 text-xl">
                    Hoy, Mallcu Villa Mar ha experimentado un desarrollo constante y cuenta con servicios básicos como electricidad, agua potable, alcantarillado, planta de relleno sanitario, hoteles, caminos regulares, pista de aterrizaje y comunicación celular.
                  </p>
                )}
              </div>

            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8" ref={addToRefs}>
            <img className="w-full rounded-lg" src={image1} alt="Imagen de Mallcu Villa Mar" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={image2} alt="Imagen de Mallcu Villa Mar" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HistoryComunity;
