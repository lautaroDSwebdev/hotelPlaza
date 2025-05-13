import React from 'react'
import { FiArrowUpCircle } from "react-icons/fi";
import "./style.css"
export const ArrowUp = () => {
    return (
        <a href='#inicio' className='arrow_style flex md:hidden'>
            <FiArrowUpCircle className='g-scroll-animated' />
        </a>

    )
}
