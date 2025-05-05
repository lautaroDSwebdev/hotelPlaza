import React from 'react'
import { appData } from '@/mock'
import { Grid } from '@/reutilizable'
import "./style.css"
export const Spa = () => {

  let { imagenSpa } = appData.spa,
    { imagenesSpa } = appData.spa



  return (
    <div>
      <article className='g-height-header max-with-viewp'>
        <img className='g-image-header' src={imagenSpa} alt='imagen restoran' />
        <h1 className='flex justify-center text-[3rem] font-bold'>Restaurant</h1>
        <div className='p-[2rem] '>
          <p className=''> El Restaurant del Plaza Hotel le ofrece diariamente un menú ejecutivo con opciones que usted podrá acomodar a sus horarios y reuniones de trabajo.</p>
          <p className=' '>No solo los pasajeros del hotel pueden deleitarse con la cocina internacional propuesta por el chef ya que el restaurant es abierto al público en general y en su cálido ambiente usted podrá disfrutar -en familia o entre amigos- de una amplia gama de platos y las sugerencias para todos los gustos.</p>
        </div>
        <div className='flex justify-center'>
          <button className='g-color-page g-b-radius-btn'>Ver galeria</button>
        </div>
      </article>
      <Grid data={imagenesSpa} />
    </div>
  )
}
