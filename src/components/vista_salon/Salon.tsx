import React from 'react'
import "./estilos.css"
import { appData } from '@/mock'
import { Grid } from '@/reutilizable'
const Salon = () => {
    let { salon } = appData,
        { imagenesSalon } = salon


    return (
        <>
            
            <Grid data={imagenesSalon}></Grid>
        </>
    )
}

export default Salon

