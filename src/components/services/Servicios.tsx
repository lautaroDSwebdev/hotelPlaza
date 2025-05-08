import { appData } from '@/mock'
import React from 'react'
import "./style.css"
import { Grid } from '@/reutilizable'
import { CarruselShadcn } from '@/reutilizable/CarruselShadcn'
const Servicios = () => {

    let { imagenServicios } = appData.servicios,
        { imgenesServicios } = appData.servicios


    return (
        <div>
            <article className='g-height-header max-with-viewp min-h-screen'>
                <img className='g-image-header' src={imagenServicios} alt='Imagen Servicios' />
                <h1 className='flex justify-center text-[3rem] font-bold'>Servicios</h1>
                <div className='p-[2rem] '>
                    <h2 className='g-paragrapg-size'> El Plaza Hotel es una excelente opción para descansar o bien para su viaje de negocios dado que se encuentra en el centro de Tandil.</h2>
                </div>

                <section className='flex  justify-between  p-[2rem] gap-[2rem]'>

                    <ul>
                        <li className='g-paragrapg-size'>Desayuno Buffet</li>
                        <li className='g-paragrapg-size'>Room service las 24 hs</li>
                        <li className='g-paragrapg-size'>Confitería / Snack bar las 24 hs.</li>
                        <li className='g-paragrapg-size'>Servicio de telefonía con DDN y DDI</li>
                        <li className='g-paragrapg-size'>
                            Internet WiFi

                        </li>
                        <li className='g-paragrapg-size'>
                            Recepción y envío de fax

                        </li>
                        <li className='g-paragrapg-size'>
                            Servicio de lavandería y tintorería

                        </li>
                        <li className='g-paragrapg-size'>
                            Sala de estar en el lobby

                        </li>
                        <li className='g-paragrapg-size'>
                            Ambiente climatizado

                        </li>
                        <li className='g-paragrapg-size'>

                            Baby Sitter
                        </li>
                        <li className='g-paragrapg-size'>
                            Ascensores

                        </li>
                        <li className='g-paragrapg-size'>
                            Caja de seguridad

                        </li>
                    </ul>
                    <ul>
                        <h3>Servicios internos y externos opcionales:</h3>
                        <li className='g-paragrapg-size'>Restaurant a la carta</li>
                        <li className='g-paragrapg-size'>SnackBar</li>
                        <li className='g-paragrapg-size'>Sala de Reuniones</li>
                        <li className='g-paragrapg-size'>Masajes en nuestro SPA</li>
                        <li className='g-paragrapg-size'>Visitas guiadas y citi tours.</li>
                        <li className='g-paragrapg-size'>Cabalgatas y vuelos turísticos</li>
                        <li className='g-paragrapg-size'>Caminatas nocturnas por los cerros</li>
                        <li className='g-paragrapg-size'>Circuitos en cuatriciclos</li>
                        <li className='g-paragrapg-size'>Trekking, escalada, rapel, cicloturismo</li>
                        <li className='g-paragrapg-size'>Asados campestres.</li>
                        <li className='g-paragrapg-size'>Cines y teatros.</li>
                        <li className='g-paragrapg-size'>Casino.</li>
                    </ul>
                </section>
                <div className='p-[2rem]'>
                    <h3>Reservas</h3>
                    <p>La forma mas rápida para consultar disponibilidad, escríbanos por WhatsApp o por email, no olvide consignar fecha de ingreso y de salida, cantidad de personas y su nombre.</p>
                </div>
                <div className="flex justify-center">

                    <CarruselShadcn data={imgenesServicios} />
                </div>
            <Grid data={imgenesServicios} />
            </article>
        </div>
    )
}

export default Servicios