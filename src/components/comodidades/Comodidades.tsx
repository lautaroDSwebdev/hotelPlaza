import { appData } from '@/mock'
import { Grid } from '@/reutilizable'
import { CarruselShadcn } from '@/reutilizable/CarruselShadcn'
import React from 'react'
import FotterComponent from '../fotter/Fotter'

export const Comodidades = () => {
    let { imagenComodidades,
        imagenesComodidades, imagenesComodidadesSinbaño } = appData.comodidades
    return (
        <div>
            <article className='g-height-header max-with-viewp min-h-screen'>
                <img className='g-image-header' src={imagenComodidades} alt='imagen comodidades' />
                <h1 className='g-titles-h1'>Comodidades</h1>
                <div className=''>
                    <p className='g-paragrapg-size'>El Plaza Hotel cuenta con 33 habitaciones y 2 departamentos totalmente equipados con todo el confort para hacer más placentera su estadía: TV LCD con señal de cable; Música funcional; Teléfono con DDI y DDN; Baños privados; Caja de seguridad; Secador de cabello; Room service; Aire acondicionado y calefacción a control remoto.</p>
                </div>
                <div className="flex justify-center">

                    <CarruselShadcn data={imagenesComodidades} />
                </div>
            <Grid data={imagenesComodidadesSinbaño} />
            <FotterComponent></FotterComponent>
            </article>
        </div>
    )
}
