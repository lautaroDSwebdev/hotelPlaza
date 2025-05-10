import React from 'react'
import "./estilos.css"
import { appData } from '@/mock'
import { Grid } from '@/reutilizable'
import { CarruselShadcn } from '@/reutilizable/CarruselShadcn'
import FotterComponent from '../fotter/Fotter'
const Salon = () => {
    let { imagen_salon } = appData.salon,
        { imagenesSalon } = appData.salon


    return (
        <div>
            <article className='g-height-header max-with-viewp min-h-screen'>
                <img className='g-image-header' src={imagen_salon} alt='imagen restoran' />
                <h1 className='g-titles-h1'>Salones</h1>
                <div className=' '>
                    <p className='g-paragrapg-size'> El Restaurant del Plaza Hotel le ofrece diariamente un menú ejecutivo con opciones que usted podrá acomodar a sus horarios y reuniones de trabajo.</p>
                    <p className='g-paragrapg-size '>No solo los pasajeros del hotel pueden deleitarse con la cocina internacional propuesta por el chef ya que el restaurant es abierto al público en general y en su cálido ambiente usted podrá disfrutar -en familia o entre amigos- de una amplia gama de platos y las sugerencias para todos los gustos.</p>
                </div>
                <div className="flex justify-center">

                    <CarruselShadcn data={imagenesSalon} />
                </div>
                <Grid data={imagenesSalon} />
                <FotterComponent></FotterComponent>
            </article>
        </div>
    )
}

export default Salon

