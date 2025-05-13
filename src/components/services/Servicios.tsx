import { appData } from '@/mock'
import React from 'react'
import "./style.css"
import { Grid } from '@/reutilizable'
import { CarruselShadcn } from '@/reutilizable/CarruselShadcn'
import FotterComponent from '../fotter/Fotter'
const Servicios = () => {

    let { imagenServicios } = appData.servicios,
        { imgenesServicios } = appData.servicios


    return (
        <div className='min-h-screen'>
            <article className='g-height-header max-with-viewp '>
                <img className='g-image-header' src={imagenServicios} alt='Imagen Servicios' />
                <h1 className='g-titles-h1 g-textgcolor-page g-contorno-texto'>Servicios</h1>
                <section className='md:flex  md:justify-between  p-[1rem] gap-[2rem]'>

                    <ul className=''>
                        <li className=''>Desayuno Buffet</li>
                        <li className=''>Room service las 24 hs</li>
                        <li className=''>Confitería / Snack bar las 24 hs.</li>
                        <li className=''>Servicio de telefonía con DDN y DDI</li>
                        <li className=''>
                            Internet WiFi

                        </li>
                        <li className=''>
                            Recepción y envío de fax

                        </li>
                        <li className=''>
                            Servicio de lavandería y tintorería

                        </li>
                        <li className=''>
                            Sala de estar en el lobby

                        </li>
                        <li className=''>
                            Ambiente climatizado

                        </li>
                        <li className=''>

                            Baby Sitter
                        </li>
                        <li className=''>
                            Ascensores

                        </li>
                        <li className=''>
                            Caja de seguridad

                        </li>
                        <li>Area médica protegida las 24 hs.</li>
                        <li>Cocheras cubiertas.</li>
                        <li>Traslados</li>
                        <li>Acceso gratuito al SPA y Piscina(no incluye sesión de masajes)</li>
                        
                    </ul>
                   
                    <ul className='pt-[2rem]'>
                        <h3 className='font-bold text-[22px] md:text-center'>Servicios internos y externos opcionales:</h3>
                        <li className=''>Restaurant a la carta</li>
                        <li className=''>SnackBar</li>
                        <li className=''>Sala de Reuniones</li>
                        <li className=''>Masajes en nuestro SPA</li>
                        <li className=''>Visitas guiadas y citi tours.</li>
                        <li className=''>Cabalgatas y vuelos turísticos</li>
                        <li className=''>Caminatas nocturnas por los cerros</li>
                        <li className=''>Circuitos en cuatriciclos</li>
                        <li className=''>Trekking, escalada, rapel, cicloturismo</li>
                        <li className=''>Asados campestres.</li>
                        <li className=''>Cines y teatros.</li>
                        <li className=''>Casino.</li>
                    </ul>
                </section>
               
                <div className="flex justify-center">

                    <CarruselShadcn data={imgenesServicios} />
                </div>
            </article>
            <FotterComponent></FotterComponent>
        </div>
    )
}

export default Servicios