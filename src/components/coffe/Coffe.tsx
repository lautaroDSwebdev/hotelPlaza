import { appData } from '@/mock'
import React from 'react'
import { ImageGallerySection } from './ImageGallery'

export const Coffe = () => {
    let {text } = appData.cafeteria,
    {imagenCafeteria} = appData.cafeteria,
    {imagenesCafe} = appData.cafeteria


  return (
    <>
                <div className="">
                    <div className='  '>
                        <article className='h-[61vh] lg:flex items-center gap-3 g-color-page p-3 '>
    
                            <section className='  g-paragraph-bg h-fit rounded-md mx-auto  '>
                                <div className='flex flex-col gap-3 h-fit p-2 '>
                                    <h1 className='text-white text-center texto-gradiente font-bold text-[3rem]'>Cafetería / Snack Bar.</h1>
                                    <div className='flex gap-[7.25rem] justify-center g-maxwidth-paragraph '>
                                        <p className='g-presentacion'>{text.data}</p>
                                    </div>
    
                                </div>
                            </section>
                            <img className=' g-img-section  ' src={imagenCafeteria} alt="imagen cafeteria" />
                        </article>
                    </div>
                </div>
                <ImageGallerySection data={imagenesCafe} />
            </>
  )
}
