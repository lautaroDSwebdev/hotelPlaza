import { appData } from '@/mock'
import React from 'react'
import "./style.css"
import { Grid } from '@/reutilizable'
const Restaurant = () => {
    let { presentacion } = appData.restaurant,
        { imagenesRestaurant } = appData.restaurant,
        { restaurant } = appData.imagenesFondoVistas


    return (
        <>
            <div className="restaurant-bg-image">
            </div>
                <article className='h-[61vh] lg:flex items-center gap-3 p-3 '>
                    <section className=' g-paragraph-bg h-fit rounded-md mx-auto  '>
                        <div className='flex flex-col gap-3 h-fit p-2 '>
                            <h1 className='text-white text-center texto-gradiente font-bold text-[3rem]'>Restaurant</h1>
                            <div className='flex gap-[7.25rem] justify-center g-max-w-pages '>
                                <p className='g-presentacion'>El Restaurant del Plaza Hotel le ofrece diariamente un menú ejecutivo con opciones que usted podrá acomodar a sus horarios y reuniones de trabajo.</p>
                                <p className='g-presentacion'>No solo los pasajeros del hotel pueden deleitarse con la cocina internacional propuesta por el chef ya que el restaurant es abierto al público en general y en su cálido ambiente usted podrá disfrutar -en familia o entre amigos- de una amplia gama de platos y las sugerencias para todos los gustos.</p>
                            </div>
                        </div>
                    </section>
                </article>
            <Grid data={imagenesRestaurant} />
        </>
    )
}

export default Restaurant