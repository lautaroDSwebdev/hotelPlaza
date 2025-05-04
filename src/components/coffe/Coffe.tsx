import { appData } from '@/mock'
import React from 'react'
import { Grid } from '@/reutilizable'

export const Coffe = () => {

    let { imagenesCafe } = appData.cafeteria


    return (
        <>
            <div className="">

            </div>
            <Grid data={imagenesCafe} />
        </>
    )
}
