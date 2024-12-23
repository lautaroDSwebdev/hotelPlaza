import { appData } from '@/mock'
import Link from 'next/link'
import React from 'react'
import "./style.css"
import { ImageGallerySection } from './ImageGallery'
const Restaurant = () => {
    let { presentacion } = appData.restaurant,
        { imagenesRestaurant } = appData.restaurant
    return (
        <>
            <div className="home-bg">
                <div className='capa_oscura'>
                    {/* <img className='h-auto w-full object-cover' src="../../assets/img_restaurant.jpg" alt="" /> */}
                </div>
                <article className='h-[47vh] flex items-center'>

                    <section className=' relative top-[8vh] max-with-viewp bg-[#ffffff31] h-fit rounded-md '>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-white text-center texto-gradiente font-bold text-[3rem]'>Restaurant</h1>
                            <div className='flex gap-[7.25rem] justify-center div_p'>
                                <p className='  '>{presentacion[0]}</p>
                                <p className=' '>{presentacion[1]}</p>
                            </div>
                        
                        </div>
                    </section>
                </article>
            </div>
            <ImageGallerySection data={imagenesRestaurant} />
        </>
    )
}

export default Restaurant