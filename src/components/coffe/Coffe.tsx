import { appData } from '@/mock'
import React from 'react'
import { Grid } from '@/reutilizable'
import { CarruselShadcn } from '@/reutilizable/CarruselShadcn'

export const Coffe = () => {

    let { imagenesCafe, imagenCafeteria } = appData.cafeteria


    return (
        <div>
            <article className='g-height-header max-with-viewp min-h-screen'>
                <img className='g-image-header' src={imagenCafeteria} alt='imagen cafe' />
                <h1 className='flex justify-center text-[3rem] font-bold'>Cafetería / Snack Bar</h1>
                <div className='p-[2rem] '>
                    <p className=''> La Cafetería del Plaza Hotel, abierta a todo el público, le propone disfrutar del exquisito café recién molido en un desayuno inigualable con una imponente vista de la plaza central. El vermouth cerca del mediodía o la cerveza por la tardecita será el deleite en una reunión con amigos. Y por la noche... tragos largos y el afamado whisky</p>
                </div>
                <div className="flex justify-center">

               <CarruselShadcn data={imagenesCafe}/>
                </div>
            </article>
            <Grid data={imagenesCafe} />
        </div>
    )
}
