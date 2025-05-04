import React from 'react'
import { appData } from '@/mock'
import { Grid } from '@/reutilizable'
import "./style.css"
export const Spa = () => {

  let { imagenSpa } = appData.spa,
    { imagenesSpa } = appData.spa



  return (
    <>
      
      <Grid data={imagenesSpa} />
    </>
  )
}
