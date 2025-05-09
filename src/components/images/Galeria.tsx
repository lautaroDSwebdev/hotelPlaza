import { appData } from '@/mock';
import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";
export const Galeria = () => {

    let { gallery} = appData
    return (
        <div>
            <article className='g-height-header max-with-viewp min-h-screen'>
                <h1 className='flex justify-center text-[3rem] font-bold'>Galeria de imagenes</h1>

                {/* <ImageGallery items={gallery} ></ImageGallery> */}
            </article>
        </div>
    )
}
