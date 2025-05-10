import { appData } from '@/mock'
import React from 'react'
import FotterComponent from '../fotter/Fotter'

export const Contact = () => {

    let { imagen_contacto } = appData.contacto
    return (
        <div >
            <article className='g-height-header max-with-viewp min-h-screen'>
                <img className='g-image-header' src={imagen_contacto} alt='imagen contacto' />
                <h1 className='g-titles-h1'>Contactanos</h1>
                <div className='p-[2rem] '>
                    <p className='g-paragrapg-size'>Envianos tu inquietus u comentario y si nos consulta  por una estadía en el hotel, no olvide consignar fecha de ingreso/salida con la cantidad de personas </p>
                </div>
                <FotterComponent></FotterComponent>
            </article>

        </div>
    )
}
