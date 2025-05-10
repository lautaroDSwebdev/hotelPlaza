import React from 'react'
import "./style.css"
import { CgMail } from "react-icons/cg";
import { BsWhatsapp } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { TbBrandFacebook } from "react-icons/tb";
import { RiInstagramLine } from "react-icons/ri";
import Link from 'next/link';
const FotterComponent = () => {
  return (
    <footer className='g-bgcolor-page'>

      <article className='max-width-footer '>
        <section className='section_contact'>
          <div>
            <a target='_blank' href="mailto:plazahoteltandil@gmail.com">
              <CgMail className='mail' />
            </a>
            <b>plazahoteltandil@gmail.com</b>
          </div>
          <div>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=2494427160">
              <BsWhatsapp className='wsp' />
            </a>
            <b>(0249)4427160/80/89</b>
          </div>
          <div>
            <Link href={`/ubicacion`}>
              <IoLocationOutline className='loc' />
            </Link>
            <b>General Pinto 438 Tandil</b>
          </div>
          <div>
            <a target='_blank' href="https://www.facebook.com/PlazaHotel.Tandil">
              <TbBrandFacebook className='facebk' />
            </a>
            <b> </b>
          </div>
          <div>
            <a target='_blank' href="https://www.instagram.com/plazahoteltandil">
              <RiInstagramLine className='ig' />
            </a>
            <b> </b>
          </div>
        </section>
        <section className='section_copyright'>
          <p>
           &copy; 2025 Lautaro Di Salvo Frontend Developer
          </p>
        </section>
      </article>
    </footer>
  )
}

export default FotterComponent