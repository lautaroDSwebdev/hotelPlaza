"use client"
import { useEffect, useState } from 'react'

function Carrusel({ setfirst, first, dataCarrusel }: any) {
    console.log("Por acá se recibe lo del carrusel de salon")
    console.log(dataCarrusel)
    const [count, setCount] = useState(0)

    let value: ReturnType<typeof setTimeout>;

    const ArrowNext = () => {
        // Si hace el autoplay, que al ejecutar la funcion no se trabe el carrusel
        // clearInterval(value)
        // si el contador es menor a el ultimo indice del array
        if (count < dataCarrusel.length - 1) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }
    const ArrowBack = () => {
        // Si hace el autoplay, que al ejecutar la funcion no se trabe el carrusel
        // clearInterval(value)
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(dataCarrusel.length - 1)
        }
    }
    // const Autoplay = () => {
    //     // si el contador es menor a el ultimo indice del array
    //     if (count < dataCarrusel.length - 1) {
    //         setCount(count + 1)
    //     } else {
    //         setCount(0)
    //     }
    // }

    // useEffect(() => {
    //     value = setTimeout(Autoplay, 3500)
    // }, [count])


    return (
        <section onDoubleClick={() => setfirst(!first)}  className={`absolute inset-0 bg-[#555353c7]   ${first && "z-[10] cursor-pointer" }`}>
            <div className='flex justify-center max-w-[1000px] mx-auto relative top-[5.5rem]'>

                <button onClick={() => setfirst(!first)} className='text-[1rem] flex justify-end  text-white hover:bg-slate-500 '>cerrar con doble click</button>
            </div>
            <div className={`${first && "z-[900]" } estilos_section`} >
                <div className='estilosCarrusel'>
                    <ul className='text-center'>
                        <b>{dataCarrusel[count].id}/</b><b>{dataCarrusel.length}</b>
                    </ul>
                    <img className='cursor-pointer ' onClick={ArrowNext} src={dataCarrusel[count].url} alt="imagenes" />
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
