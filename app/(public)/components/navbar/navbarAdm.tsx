import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SidebarAdm from "./sidebarAdm";

const NavbarAdm = () => {
  return (
    <>
      <div className="w-full bg-[#561846] h-24">
        <div className="p-6 justify-between flex items-center">
          <Link href={"/"}>
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={48}
              height={48}
              priority={true}
            />
          </Link>

          <Sheet>
            <SheetTrigger>
              <Menu size={30} color="#FFFFFF" />
            </SheetTrigger>

            <SheetContent side={"left"}>
              <SidebarAdm />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default NavbarAdm;
