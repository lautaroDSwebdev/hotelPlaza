import React from 'react'
import "./style.css"
const page = () => {
  return (
    <div className="home-bg">
      <div className='capa_oscura'>
      </div>
      <section className=' relative top-[13vh] max-with-viewp bg-[#ffffff31] h-fit rounded-md '>
        <div className='flex flex-col gap-2'>
          <h1 className='text-white text-center texto-gradiente font-bold text-[3rem]'>Bienvenidos</h1>
          <div className='flex gap-[7.25rem] justify-center div_p'>

            <p className='  '>El <i className='text-yellow-300'>Plaza Hotel</i>  está ubicado estratégicamente en el corazón de la ciudad de Tandil. Esta ubicación -frente a la plaza central- le permite a los pasajeros una rápida conexión con los paseos típicos de la ciudad, el casino, el lago, las sierras aledañas, los campos de Golf y los lugares de esparcimiento que Tandil brinda</p>
            <p className=' '>La cordial atención que se brinda en el Plaza Hotel está garantizada por la profesionalidad del personal; combinada con la supervisión de sus propietarios, garantizando una placentera estadía en Tandil con un trato ameno</p>
          </div>
          <div className='flex gap-2 justify-center div_img'>
            <img src="../../assets/logo" alt="" />
            <img src="../../assets/logo_ubic.jpg" alt="" />
          </div>
        </div>
      </section>


    </div>
  )
}

export default page