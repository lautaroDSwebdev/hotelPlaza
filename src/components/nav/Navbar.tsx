"use client";
import { appData, Navdata } from "@/mock";
import Link from "next/link";
import React from "react";
import "./style.css"
import { useRouter } from "next/router";
const Navbar = () => {
  let logo = appData.logo_img.url;

  // const { pathname } = location

    // const router = useRouter();
    
    // // Define los estilos para cada ruta
    // const buttonStyle = (path) => {
    //     return router.pathname === path ? "text-[#2c4fee]" : "text-[#ffffff]";
    // };

  return (
    <section className="max-w-[1000px] mx-auto p-[5px] flex justify-between  ">
      <div>
        <Link href={`/hotel`}>
          <img src={logo} alt="imagen logo" />
        </Link>
      </div>
      <div className="flex items-end">
        <nav className="flex gap-3 bg-[#ddcc35e1] p-2 rounded-xl">
          {Navdata.map((e) => (
            <div key={e.id} className={``}>
              <Link 
              className={`text-[1.2rem]  hover:text-[#5197e7]   text-[#ffffff] 
              `} href={e.href}>{e.text} </Link>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
