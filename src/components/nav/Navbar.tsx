"use client";
import { appData, Navdata, sub_nav } from "@/mock";
import Link from "next/link";
import React from "react";
import "./style.css"
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  let { url, urlMobile } = appData.logo_img;


  const path = usePathname()
  return (
    <>
      <section className="max-with-viewp   nav-desk ">
        <div>
          <Link href={`/hotel`}>
            <img src={url} alt="imagen logo" />
          </Link>
        </div>
        <div className="flex items-end">
          <nav className="flex gap-3 rounded-xl">
            {Navdata.map((e) => (
              <Link key={e.id}
                className={`text-[1.2rem] font-extrabold hover-underline-animation ${path === e.href && "hover-underline-animation-click g-texto-bordenegro"}
              `} href={e.href}>{e.text} </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className=" ">
                <GiHamburgerMenu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Mas del hotel</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                  sub_nav.map(e => (
                    <Link key={e.id} href={e.href} className={`text-[1.2rem] font-extrabold ${path === e.href && "hover-underline-animation-click g-texto-bordenegro "}
                    `}>
                      <DropdownMenuItem >{e.text}</DropdownMenuItem>
                    </Link>
                  ))
                }
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </section>

      <section className="max-with-viewp  nav-mob">
        <div className="flex justify-between items-center">
          <Link href={`/hotel`}>
            <img src={urlMobile} alt="imagen logo" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className=" ">
              <GiHamburgerMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Mas del hotel</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {
                sub_nav.map(e => (
                  <Link key={e.id} href={e.href} className={`text-[1.2rem] font-extrabold ${path === e.href && "hover-underline-animation-click g-texto-bordenegro "}
                    `}>
                    <DropdownMenuItem >{e.text}</DropdownMenuItem>
                  </Link>
                ))
              }
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex justify-center">
          <nav className="flex gap-3 rounded-xl">
            {Navdata.map((e) => (
              <Link key={e.id}
                className={`text-[13px] md:text-[1.2rem] font-extrabold hover-underline-animation ${path === e.href && "hover-underline-animation-click g-texto-bordenegro"}
              `} href={e.href}>{e.text} </Link>
            ))}
            {/* <DropdownMenu>
            <DropdownMenuTrigger className=" ">
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Mas del hotel</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {
                sub_nav.map(e => (
                  <Link key={e.id} href={e.href} className={`text-[1.2rem] font-extrabold ${path === e.href && "text-white g-texto-bordenegro "}
                `}>
                    <DropdownMenuItem >{e.text}</DropdownMenuItem>
                  </Link>
                ))
              }
            </DropdownMenuContent>
          </DropdownMenu> */}
          </nav>
        </div>
      </section>
    </>

  );
};



