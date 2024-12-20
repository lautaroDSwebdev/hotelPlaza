import NavHotelpage from "@/components/nav/NavHotelpage";
import "./style.css"
import FotterComponent from "@/components/fotter/Fotter";
export default function HotelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
        <NavHotelpage />
        <section>{children}</section>
        
    </div>
  );
}
