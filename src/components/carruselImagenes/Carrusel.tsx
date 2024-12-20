"use client"
import { appData } from '@/mock';
import { useEffect, useState } from 'react'
import "./style.css"

function Carrusel({ setfirst, first }: any) {
    let { imagenesHome } = appData
    const [count, setCount] = useState(0)

    let value: ReturnType<typeof setTimeout>;

    const ArrowNext = () => {
        // Si hace el autoplay, que al ejecutar la funcion no se trabe el carrusel
        clearInterval(value)
        // si el contador es menor a el ultimo indice del array
        if (count < imagenesHome.length - 1) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }
    const ArrowBack = () => {
        // Si hace el autoplay, que al ejecutar la funcion no se trabe el carrusel
        clearInterval(value)
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(imagenesHome.length - 1)
        }
    }
    const Autoplay = () => {
        // si el contador es menor a el ultimo indice del array
        if (count < imagenesHome.length - 1) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }

    useEffect(() => {
        value = setTimeout(Autoplay, 3500)
    }, [count])


    return (
        <section onDoubleClick={() => setfirst(!first)}  className={`absolute inset-0 bg-[#555353c7] ${first && "z-[800]" }`}>
            <div className='flex justify-center max-w-[1000px] mx-auto relative top-3'>

                <button onClick={() => setfirst(!first)} className='text-[3rem] flex justify-end  text-white hover:bg-slate-500 '>x</button>
            </div>
            <div className={`${first && "z-[900]" } estilos_section`} >
                <div className='estilosCarrusel'>
                    <ul className='text-center'>
                        <b>{imagenesHome[count].id}/</b><b>{imagenesHome.length}</b>
                    </ul>
                    <img className='cursor-pointer ' onClick={ArrowNext} src={imagenesHome[count].url} alt="imagenes" />
                </div>

                <div className={`${first && "z-[900]" } div_botones`}>
                    <button onClick={ArrowBack}>  ◀  </button>
                    <button onClick={ArrowNext}> ▶ </button>
                </div>
            </div>
        </section>
    )
}
export default Carrusel
