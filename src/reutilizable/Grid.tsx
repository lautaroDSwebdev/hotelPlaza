import React from 'react'

interface Data {
    id: number
    url: string
}

export const Grid = ({ data }: { data: Data[] }) => {
    return (
        <div className='max-with-viewp div_grid-images  '>
            <b>Algunas imagenes</b>
            <section className='grid_images'>
                {
                    data.map(e => (
                        <img className="" key={e.id} src={e.url} alt="imagen" />
                    ))
                }
            </section>
        </div>
    )
}
