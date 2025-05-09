import { appData } from '@/mock'
import React from 'react'

export const Contact = () => {

    let { imagen_contacto } = appData.contacto
    return (
        <div >
            <article className='g-height-header max-with-viewp min-h-screen'>
                <img className='g-image-header' src={imagen_contacto} alt='imagen contacto' />
                <h1 className='flex justify-center text-[3rem] font-bold'>Contactanos</h1>
                <div className='p-[2rem] '>
                    <p className='g-paragrapg-size'>Envianos tu inquietus u comentario y si nos consulta  por una estadía en el hotel, no olvide consignar fecha de ingreso/salida con la cantidad de personas </p>
                </div>

            </article>
        </div>
    )
}
