"use client";
import { appData, Navdata } from "@/mock/index";
import Link from "next/link";
import React from "react";
import "./style.css"
const Navbar = () => {
  let logo = appData.logo_img.url;
  return (
    <section className="max-with-viewp flex justify-between  ">
      <div>
        <Link href={`/hotel`}>
          <img src={logo} alt="imagen logo" />
        </Link>
      </div>
      <div className="flex items-end">
        <nav className="flex gap-3">
          {Navdata.map((e) => (
            <div key={e.id} className={``}>
              <Link className={`text-[1.2rem] text-[#6e70e2]`} href={e.href}>{e.text} </Link>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
