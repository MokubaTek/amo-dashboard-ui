import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex ">
      {/* LEFT */}
      <div className="px--3 w-[18%] md:w-[22%] lg:w-[20%] xl:w-[18%] p-4">
        <Link className="flex lg:justify-start gap-2" href="/">
          <Image src="/logo.png" alt="logo" width="32" height="32"></Image>
          <span className="hidden md:block">AMO</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT */}
      <div className="w-[82%] md:w-[78%] lg:w-[80%]  xl:w-[82%] bg-[#F7F8FA] overflow-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
