"use client"
import React, { useState } from 'react'
import { TypeData } from '@/types/tipos'
import Carrusel from './Carrusel'

export const ImageGallerySection = ({data}: {data: TypeData[]}) => {
    // console.log("De acá se esta recibiendo la data de Salon imagenes")
    // console.log(data)
    const [first, setfirst] = useState(false)
    return (
        <section className='  h-[11vh] bg-[#ffe139]'>
            <div className='max-with-viewp flex justify-around'>
                <button className='bg-[#ecda74] rounded-md hover:bg-[#bead4b] p-2 ' >Algunas imagenes</button>
                <div onClick={() => setfirst(!first)} className='flex gap-[5px] justify-evenly cursor-pointer'>
                    {data?.map((img) => {
                        return (
                            <img key={img.id} className='size-img-gallery' src={img.url} alt="imagenes hotel" />
                        )
                    })}
                </div>
            </div>
            {
                first ?
                // aca intento hacer una transicion de opacidad
                    <div className='transition-all duration-1000 ease-in-out'>

                        <Carrusel dataCarrusel={data}  setfirst={setfirst} first={first} />
                    </div>
                    : null
            }

        </section>
    )
}

