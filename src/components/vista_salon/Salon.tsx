import React from 'react'
import "./estilos.css"
import { appData } from '@/mock'
import { Grid } from '@/reutilizable'
import { CarruselShadcn } from '@/reutilizable/CarruselShadcn'
import FotterComponent from '../fotter/Fotter'
const Salon = () => {
    let { imagen_salon } = appData.salon,
        { imagenesSalon } = appData.salon


    return (
        <div>
            <article className='g-height-header max-with-viewp min-h-screen'>
                <img className='g-image-header' src={imagen_salon} alt='imagen restoran' />
                <h1 className='g-titles-h1 g-textgcolor-page g-contorno-texto'>Salones</h1>
                <div className=' '>
                    <p className='g-paragrapg-size'>El Plaza Hotel le ofrece una cómoda Sala de Reuniones con capacidad de hasta 50 personas, siendo el medio ideal para llevar a cabo: Congresos y Convenciones, Lanzamientos de productos, Comercialización de los mismos, Rondas de negocios, Entrenamiento laboral, Seminarios de actualización, Fiestas Cualquier otro evento que su empresa requiera.</p>
                    
                </div>
                <div className="flex justify-center">

                    <CarruselShadcn data={imagenesSalon} />
                </div>
                <Grid data={imagenesSalon} />
                <FotterComponent></FotterComponent>
            </article>
        </div>
    )
}

export default Salon

