import React from 'react'
import "./style.css"
import FotterComponent from '../fotter/Fotter'
export const Ubicacion = () => {
  return (
    <div className='min-h-screen max-with-viewp div_iframe'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.5243922960918!2d-59.138124!3d-37.328281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f975a78c3d5%3A0x97a6372e710f7b2b!2sPlaza%20Hotel!5e1!3m2!1ses-419!2sus!4v1736343118531!5m2!1ses-419!2sus"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       <FotterComponent></FotterComponent>
    </div>
  )
}
