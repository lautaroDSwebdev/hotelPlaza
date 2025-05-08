import { appData } from '@/mock'
import { Grid } from '@/reutilizable'
import { CarruselShadcn } from '@/reutilizable/CarruselShadcn'
import React from 'react'

export const Comodidades = () => {
    let { imagenComodidades,
        imagenesComodidades, imagenesComodidadesSinbaño } = appData.comodidades
    return (
        <div>
            <article className='g-height-header max-with-viewp min-h-screen'>
                <img className='g-image-header' src={imagenComodidades} alt='imagen restoran' />
                <h1 className='flex justify-center text-[3rem] font-bold'>Comodidades</h1>
                <div className='p-[2rem] '>
                    <p className='g-paragrapg-size'> El Restaurant del Plaza Hotel le ofrece diariamente un menú ejecutivo con opciones que usted podrá acomodar a sus horarios y reuniones de trabajo.</p>
                    <p className='g-paragrapg-size'>No solo los pasajeros del hotel pueden deleitarse con la cocina internacional propuesta por el chef ya que el restaurant es abierto al público en general y en su cálido ambiente usted podrá disfrutar -en familia o entre amigos- de una amplia gama de platos y las sugerencias para todos los gustos.</p>
                </div>
                <div className="flex justify-center">

                    <CarruselShadcn data={imagenesComodidades} />
                </div>
            <Grid data={imagenesComodidadesSinbaño} />
            </article>
        </div>
    )
}
