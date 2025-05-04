import { Navbar } from "@/components/nav";

export default function HotelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
       {children}
    </div>
  );
}
