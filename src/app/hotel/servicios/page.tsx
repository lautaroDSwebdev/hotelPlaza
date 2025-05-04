import React from 'react'
import "./style.css"
import Servicios from '@/components/services/Servicios'
import { appData } from '@/mock'
const page = () => {
  let { servicios } = appData.imagenesFondoVistas
  return (
    <div className={` `}>
      
      <Servicios />
    </div>
  )
}

export default page