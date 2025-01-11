import { sub_nav } from "@/mock";
import Link from "next/link";
import React from "react";
const NavHotelpage = () => {
  return (
    <div className="  bg-[#6e70e2]">
      <section className="max-w-[1000px] mx-auto p-[5px] flex gap-2 justify-between">
        {sub_nav.map((e) => (
          <nav
            className="hover:scale-110 transition-all .3s ease-in"
            key={e.id}
          >
            <Link className="text-white" href={e.href}>{e.text}</Link>
          </nav>
        ))}
      </section>
    </div>
  );
};

export default NavHotelpage;
