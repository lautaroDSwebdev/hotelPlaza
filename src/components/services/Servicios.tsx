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
            <article className='g-height-header max-with-viewp'>
                <img className='g-image-header' src={imagenServicios} alt='Imagen Servicios' />
                <h1 className='flex justify-center text-[3rem] font-bold'>Servicios</h1>
                <div className='p-[2rem] '>
                    <h2 className=''> El Plaza Hotel es una excelente opción para descansar o bien para su viaje de negocios dado que se encuentra en el centro de Tandil.</h2>
                </div>

                <section className='flex  justify-between  p-[2rem] gap-[2rem]'>

                    <ul>
                        <li>Desayuno Buffet</li>
                        <li>Room service las 24 hs</li>
                        <li>Confitería / Snack bar las 24 hs.</li>
                        <li>Servicio de telefonía con DDN y DDI</li>
                        <li>
                            Internet WiFi

                        </li>
                        <li>
                            Recepción y envío de fax

                        </li>
                        <li>
                            Servicio de lavandería y tintorería

                        </li>
                        <li>
                            Sala de estar en el lobby

                        </li>
                        <li>
                            Ambiente climatizado

                        </li>
                        <li>

                            Baby Sitter
                        </li>
                        <li>
                            Ascensores

                        </li>
                        <li>
                            Caja de seguridad

                        </li>
                    </ul>
                    <ul>
                        <h3>Servicios internos y externos opcionales:</h3>
                        <li>Restaurant a la carta</li>
                        <li>SnackBar</li>
                        <li>Sala de Reuniones</li>
                        <li>Masajes en nuestro SPA</li>
                        <li>Visitas guiadas y citi tours.</li>
                        <li>Cabalgatas y vuelos turísticos</li>
                        <li>Caminatas nocturnas por los cerros</li>
                        <li>Circuitos en cuatriciclos</li>
                        <li>Trekking, escalada, rapel, cicloturismo</li>
                        <li>Asados campestres.</li>
                        <li>Cines y teatros.</li>
                        <li>Casino.</li>
                    </ul>
                </section>
                <div className='p-[2rem]'>
                    <h3>Reservas</h3>
                    <p>La forma mas rápida para consultar disponibilidad, escríbanos por WhatsApp o por email, no olvide consignar fecha de ingreso y de salida, cantidad de personas y su nombre.</p>
                </div>
                <div className="flex justify-center">

                    <CarruselShadcn data={imgenesServicios} />
                </div>
            </article>
            <Grid data={imgenesServicios} />
        </div>
    )
}

export default Servicios