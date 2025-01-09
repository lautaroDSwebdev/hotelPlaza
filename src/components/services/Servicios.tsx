import { appData } from '@/mock'
import React from 'react'
import "./style.css"
const Servicios = () => {

    let { servicios } = appData,
        data = servicios.descripcionTop,
        { firts_column, secondColumn, thirdColumn } = servicios.descripcionBottom

    return (
        <>
            <div className="home-bg">
                <div className='capa_oscura'>
                </div>
                <article className='h-[47vh] flex items-center'>
                    <div className='g-max-w-pages'>

                        <section className=' relative top-[8vh] max-with-viewp g-paragraph-bg h-fit rounded-md '>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-white text-center texto-gradiente font-bold text-[3rem]'>Servicios</h1>
                                <div className='flex gap-[7.25rem] justify-center div_p'>
                                    <p className='text-white text-[1.2rem] '>{data[0]}</p>
                                </div>

                                <div className='flex gap-[7.25rem] justify-center relative pt-4'>
                                    <ul className='text-white '>
                                        {
                                            firts_column.map(e => (
                                                <li key={e.id}>{e.text}  </li>
                                            ))
                                        }
                                    </ul>
                                    <ul className='text-white '>
                                        {
                                            secondColumn.map(e => (
                                                <li key={e.id}>{e.text}  </li>
                                            ))
                                        }
                                    </ul>
                                    <ul className='text-white '>
                                        {
                                            thirdColumn.map(e => (
                                                <li key={e.id}>{e.text}  </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
            {/* <ImageGallerySection data={imagenesRestaurant} /> */}
        </>
    )
}

export default Servicios