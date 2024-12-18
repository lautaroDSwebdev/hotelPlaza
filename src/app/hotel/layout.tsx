import NavHotelpage from "@/components/nav/NavHotelpage";
import "./style.css"
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
