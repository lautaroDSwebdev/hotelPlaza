import { appData } from '@/mock'
import React from 'react'
import FotterComponent from '../fotter/Fotter'
import { BsWhatsapp } from "react-icons/bs";

export const Contact = () => {

    let { imagen_contacto } = appData.contacto
    return (
        <div >
            <article className='g-height-header max-with-viewp min-h-screen'>
                <img className='g-image-header' src={imagen_contacto} alt='imagen contacto' />
                <h1 className='g-titles-h1 g-textgcolor-page g-contorno-texto'>Contactanos</h1>
                <div className=' '>
                    <p className='g-paragrapg-size'>Envianos tu inquietus u comentario y si nos consulta  por una estadía en el hotel, no olvide consignar fecha de ingreso/salida con la cantidad de personas </p>
                </div>
                <div className='flex justify-center flex-col items-center pt-[3rem] my-[3rem] h-[67vh] gap-[1.5rem]'>
                    <b className='text-[20px] md:text-[2rem]  '>Envianos mensaje a nuestro whatsapp! </b>
                    <a  className="flex justify-between  items-center bg-[#24C55E] g-btn-border-radius w-[314px]" target='_blank' href="https://api.whatsapp.com/send?phone=2494600471">
                        <p className='text-white font-bold text-[1.4rem]'>Nuestro whatsapp acá</p>
                        <BsWhatsapp className='text-white text-[2rem]' />
                    </a>
                </div>
                <FotterComponent></FotterComponent>
            </article>

        </div>
    )
}
