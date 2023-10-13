import React from 'react'

function Paralax_home() {
    const sectionStyle = {
        backgroundImage: "https://drive.google.com/file/d/180XDavGCSy1aKL36SOYc1n086lZDpbIP/view?usp=sharing')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      };
    
      const containerStyle = {
        backdropFilter: 'blur(10px)',
      };
    
  return (
    <section className="py-28 bg-black" style={sectionStyle}>
    <div className="container px-4 mx-auto">
      <div className="px-12 pt-12 pb-9 md:max-w-xl bg-black bg-opacity-80 rounded-4xl" style={containerStyle}>
        <p className="mb-7 font-sans max-w-max px-3 py-1.5 text-sm text-white font-semibold uppercase border border-gray-700 rounded-md">Pueblo indigena originario</p>
        <h2 className="mb-4 text-4xl md:text-7xl text-white font-bold font-heading tracking-px-n leading-tight">❤️Mallku Villa Mar</h2>
        <p className="mb-11 text-sm md:text-lg text-gray-400 leading-normal"> La comunidad está ubicada en un entorno natural impresionante, rodeado de montañas, ríos y lagunas. Los vicitantes pueden disfrutar de caminatas, atractivos turisticos y otros deportes al aire libre.</p>
 
      </div>
    </div>
  </section>
  )
}

export default Paralax_home