import { appData } from '@/mock'
import Link from 'next/link'
import React from 'react'
import "./style.css"
import { ImageGallerySection } from './ImageGallery'
const Restaurant = () => {
    let { presentacion } = appData.restaurant,
        { imagenesRestaurant } = appData.restaurant,
        { restaurant } = appData.imagenesFondoVistas

    return (
        <>
            <div className="">
                <div className='  '>
                    <article className='h-[61vh] lg:flex items-center gap-3 g-color-page p-3 '>

                        <section className='  bg-[#ffffff31] h-fit rounded-md mx-auto  '>
                            <div className='flex flex-col gap-3 h-fit p-2 '>
                                <h1 className='text-white text-center texto-gradiente font-bold text-[3rem]'>Restaurant</h1>
                                <div className='flex gap-[7.25rem] justify-center g-maxwidth-paragraph '>
                                    <p className='g-presentacion'>{presentacion[0]}</p>
                                    <p className='g-presentacion'>{presentacion[1]}</p>
                                </div>

                            </div>
                        </section>
                        <img className=' g-img-section  ' src={restaurant} alt="" />
                    </article>
                </div>
            </div>
            <ImageGallerySection data={imagenesRestaurant} />
        </>
    )
}

export default Restaurant