import React from 'react'
import { appData } from '@/mock'
import { Grid } from '@/reutilizable'
import "./style.css"
import { CarruselShadcn } from '@/reutilizable/CarruselShadcn'
import FotterComponent from '../fotter/Fotter'
export const Spa = () => {

  let { imagenSpa } = appData.spa,
    { imagenesSpa } = appData.spa



  return (
    <div>
      <article className='g-height-header max-with-viewp min-h-screen'>
        <img className='g-image-header' src={imagenSpa} alt='imagen restoran' />
        <h1 className='g-titles-h1 g-textgcolor-page g-contorno-texto'>SPA & Piscina</h1>
        <div className=''>
          <p className='g-paragrapg-size'>Recientemente el Plaza Hotel inauguró un nuevo espacio para sus pasajeros, ideal para el relax. Entre los servicios el SPA del Plaza contará con:</p>
          <p className=' flex flex-wrap justify-evenly '>
            <i className='g-paragrapg-size g-textgcolor-page'>Sauna Seco</i>
            <i className='g-paragrapg-size g-textgcolor-page'>2 Ofuros (jacuzzi)</i>
            <i className='g-paragrapg-size g-textgcolor-page'>2 Duchas escocesas</i>
            <i className='g-paragrapg-size g-textgcolor-page'>Masajes</i>
            <i className='g-paragrapg-size g-textgcolor-page'>Piscina climatizada</i>
            </p>
        </div>
        <div className="flex justify-center">

          <CarruselShadcn data={imagenesSpa} />
        </div>
        <Grid data={imagenesSpa} />
        <FotterComponent></FotterComponent>
      </article>
    </div>
  )
}
