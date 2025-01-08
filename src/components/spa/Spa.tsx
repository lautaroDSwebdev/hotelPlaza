import React from 'react'
import { ImageGallerySection } from './ImageGallery'
import { appData } from '@/mock'

export const Spa = () => {

  let { imagenSpa } = appData.spa,
    { imagenesSpa } = appData.spa



  return (
    <>
      <div className="">
        <div className='  '>
          <article className='h-[61vh] lg:flex items-center gap-3 g-color-page p-3 '>

            <section className='  g-paragraph-bg h-fit rounded-md mx-auto '>
              <div className='flex flex-col gap-3 h-fit p-2 '>
                <h1 className='text-white text-center texto-gradiente font-bold text-[3rem]'>
                  SPA & Piscina</h1>
                <div className='flex  gap-[1.5rem] justify-center  g-maxwidth-paragraph'>
                  <div>
                    <p className='g-presentacion'>Recientemente el Plaza Hotel inauguró un nuevo espacio para sus pasajeros, ideal para el relax. Entre los servicios el SPA del Plaza contará con:</p>
                  </div>
                  <div>
                    <p className='g-presentacion'>Sauna Seco</p>
                    <p className='g-presentacion'>2 Ofuros (jacuzzi)</p>
                    <p className='g-presentacion'>2 Duchas escocesas</p>
                    <p className='g-presentacion'>Masajes</p>
                    <p className='g-presentacion'>Piscina climatizada</p>
                  </div>

                </div>

              </div>
            </section>
            <img className=' g-img-section  ' src={imagenSpa} alt="" />
          </article>
        </div>
      </div>
      <ImageGallerySection data={imagenesSpa} />
    </>
  )
}
