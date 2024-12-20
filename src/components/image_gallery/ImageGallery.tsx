"use client"
import { appData } from '@/mock/index'
import React, { useState } from 'react'
import Carrusel from '../carruselImagenes/Carrusel'
export const ImageGallerySection = () => {

    let { imagenesHome } = appData
    const [first, setfirst] = useState(false)
    return (
        <section className='  h-[11vh] bg-[#ffe139]'>
            <div className='max-with-viewp flex justify-around'>
                <button className='bg-[#ecda74] rounded-md hover:bg-[#bead4b] p-2 ' >Algunas imagenes</button>
                <div onClick={() => setfirst(!first)} className='flex gap-[5px] justify-evenly cursor-pointer'>
                    {imagenesHome.map((img) => {
                        return (
                            <img className='size-img-gallery' src={img.url} alt="imagenes hotel" />
                        )
                    })}
                </div>
            </div>
            {
                first ?
                // aca intento hacer una transicion de opacidad
                    <div className='transition-all duration-1000 ease-in-out'>

                        <Carrusel setfirst={setfirst} first={first} />
                    </div>
                    : null
            }

        </section>
    )
}

