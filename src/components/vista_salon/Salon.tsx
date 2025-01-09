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
       <div className="">
                <div className='  '>
                    <article className='h-[61vh] lg:flex items-center gap-3 g-color-page p-3 '>

                        <section className='  g-paragraph-bg h-fit rounded-md mx-auto '>
                            <div className='flex flex-col gap-3 h-fit p-2 '>
                                <h1 className='text-white text-center texto-gradiente font-bold text-[3rem]'>Salon</h1>
                                <div className='flex gap-[7.25rem] justify-center  g-max-w-pages'>
                                    <p className='g-presentacion'>{data[0]}</p>
                                    <p className='g-presentacion'>{data[1]}</p>
                                </div>

                            </div>
                        </section>
                            <img className=' g-img-section  ' src={salonimg} alt="" />
                    </article>
                </div>
            </div>
            <ImageGallerySection data={salon.imagenesSalon} />
        </>
    )
}

export default Salon

