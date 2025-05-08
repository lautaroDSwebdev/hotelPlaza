import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'

interface Data {
    id: number,
    url: string
}

export const CarruselShadcn = ({ data }: { data: Data[] }) => {
    return (
        <Dialog>
            <DialogTrigger className='g-btn-border-radius g-color-page'>Abrir galeria</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    {/* <DialogTitle >
                        Carrusel
                    </DialogTitle>
                    <DialogDescription >
                        displazate por el carrusel
                    </DialogDescription> */}
                    <Carousel >
                        <CarouselContent>
                            {
                                data.map(e => (
                                    <CarouselItem key={e.id}>
                                        <img className="h-auto w-full rounded-md p-[1rem]" src={e.url} alt="imagen home" />
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
