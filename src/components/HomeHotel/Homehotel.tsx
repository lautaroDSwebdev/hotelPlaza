import React, { useState } from "react";
import { appData } from "@/mock/index";
import "./style.css";
import { Grid } from "@/reutilizable";



import { CarruselShadcn } from "@/reutilizable/CarruselShadcn";
export const Homehotel = () => {
  let { imagenesHome } = appData,
    { imagehome } = appData.hotel;


  return (
    <div>
      <article className="g-height-header max-with-viewp min-h-screen">
        <img className="g-image-header" src={imagehome} alt="imagen home" />
        <h1 className="flex justify-center text-[3rem] font-bold ">
          Bienvenidos
        </h1>
        <div className=" ">
          <p className="g-paragrapg-size">
            <b className="g-textgcolor-page g-contorno-texto text-[1.5rem]">El Plaza Hotel</b> está ubicado estratégicamente en
            el corazón de la ciudad de Tandil. Esta ubicación -frente a la plaza
            central le permite a los pasajeros una rápida conexión con los
            paseos típicos de la ciudad, el casino, el lago, las sierras
            aledañas, los campos de Golf y los lugares de esparcimiento que
            Tandil brinda
          </p>
          <p className="g-paragrapg-size">
            La cordial atención que se brinda en el Plaza Hotel está garantizada
            por la profesionalidad del personal; combinada con la supervisión de
            sus propietarios, garantizando una placentera estadía en Tandil con
            un trato ameno
          </p>
        </div>

        <div className="flex justify-center">

          <CarruselShadcn data={imagenesHome}></CarruselShadcn>
        </div>
      <Grid data={imagenesHome} />
      </article>
    </div>
  );
};
