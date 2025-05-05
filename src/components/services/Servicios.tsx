import { appData } from '@/mock'
import React from 'react'
import "./style.css"
import { Grid } from '@/reutilizable'
const Servicios = () => {

    let { imagenServicios } = appData.servicios,
        { imgServicios } = appData.servicios




    // Servicios.

    // El Plaza Hotel es una excelente opción para descansar o bien para su viaje de negocios dado que se encuentra en el centro de Tandil.

    // · Desayuno Buffet
    // · Room service las 24 hs
    // · Confitería / Snack bar las 24 hs.
    // · Servicio de telefonía con DDN y DDI
    // · Internet WiFi
    // · Recepción y envío de fax
    // · Servicio de lavandería y tintorería
    // · Sala de estar en el lobby
    // · Ambiente climatizado
    // · Baby Sitter
    // · Ascensores
    // · Caja de seguridad	
    // · Area médica protegida las 24 hs.
    // · Cocheras cubiertas.
    // · Traslados
    // · Acceso gratuito al SPA y Piscina
    //   (no incluye sesión de masajes)


    // Servicios internos opcionales:
    // · Restaurant a la carta
    // · SnackBar
    // · Sala de Reuniones
    // · Masajes en nuestro SPA

    // Servicios externos opcionales:

    // · Visitas guiadas y citi tours.
    // · Cabalgatas y vuelos turísticos
    // · Caminatas nocturnas por los cerros
    // · Circuitos en cuatriciclos
    // · Trekking, escalada, rapel, cicloturismo
    // · Asados campestres.
    // · Cines y teatros.
    // · Casino.

    return (
        <div>
            <article className='g-height-header max-with-viewp'>
                <img className='g-image-header' src={imagenServicios} alt='imagen home' />
                <h1 className='flex justify-center text-[3rem] font-bold'>Bienvenidos</h1>
                <div className='p-[2rem] '>
                    <p className=''><i className="">El Plaza Hotel</i> está ubicado estratégicamente en el corazón de la ciudad de Tandil. Esta ubicación -frente a la plaza central le permite a los pasajeros una rápida conexión con los paseos típicos de la ciudad, el casino, el lago, las sierras aledañas, los campos de Golf y los lugares de esparcimiento que Tandil brinda</p>
                    <p className=' '>La cordial atención que se brinda en el Plaza Hotel está garantizada por la profesionalidad del personal; combinada con la supervisión de sus propietarios, garantizando una placentera estadía en Tandil con un trato ameno</p>
                </div>
                <div className='flex justify-center'>
                    <button className='g-color-page g-b-radius-btn'>Ver galeria</button>
                </div>
            </article>
            <Grid data={imgServicios} />
        </div>
    )
}

export default Servicios