import React from 'react'
import { ImageGallerySection } from '../image_gallery'
import { appData } from '@/mock/index'
import Link from 'next/link'
import "./style.css"
export const Homehotel = () => {
    let { presentacion } = appData.hotel,
        { title } = appData.hotel
        let { imagenesHome } = appData
    return (
        <div>
            <div className="home-bg">
                <div className='capa_oscura'>
                </div>
                <article className='h-[47vh] flex items-center'>
                    <section className=' relative top-[8vh] max-with-viewp bg-[#ffffff31] h-fit rounded-md '>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-white text-center texto-gradiente font-bold text-[3rem]'>Bienvenidos</h1>
                            <div className='flex gap-[7.25rem] justify-center div_p'>
                                <p className='  '><i className={`${"text-yellow-300"}`}>{title}</i>{presentacion[0]}</p>
                                <p className=' '>{presentacion[1]}</p>
                            </div>
                            <div className='flex gap-[25rem] justify-center div_img'>
                                <Link href={`/spa`} className='hover:scale-110 transform transition .3s'>
                                    <img src="../../assets/logo_spa.png" alt="" />
                                </Link>
                                <Link href={`/ubicacion`} className='hover:scale-110 transform transition .3s'>
                                    <img src="../../assets/logo_ubic.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
            <ImageGallerySection data={imagenesHome} />
        </div>
    )
}

