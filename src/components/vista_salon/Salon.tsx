import React from 'react'
import "./estilos.css"
import { appData } from '@/mock'
import { ImageGallerySection } from './ImageGallery'
const Salon = () => {
    let { salon } = appData,
        data = salon.texts,
        { salonimg } = appData.imagenesFondoVistas
    
    return (
        <>
        <div  className={`home-bg `}>
                <div  className='capa_oscura'>
                </div>
                <article className='h-[47vh] flex items-center'>
                    <section className=' relative top-[8vh] max-with-viewp bg-[#ffffff31] h-fit rounded-md '>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-white text-center texto-gradiente font-bold text-[3rem]'>{data[0]}</h1>
                            <div className='flex gap-[7.25rem] justify-center div_p'>
                                <p className=''>{data[1]}</p>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
            <ImageGallerySection data={salon.imagenesSalon} />
        </>
    )
}

export default Salon