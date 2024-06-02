"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { SheetHeader, SheetTitle } from "@/app/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CalendarIcon, HomeIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaAddressCard } from "react-icons/fa6";

const SidebarAdm = () => {
  const { data } = useSession();

  return (
    <>
      <>
        <SheetHeader className="flex justify-center text-center border-b border-solid border-secondary p-5">
          <SheetTitle className="text-center">ADMINISTRADOR</SheetTitle>
        </SheetHeader>

        {data?.user ? (
          <div className="flex justify-center px-5 py-6 items-center">
            <div className="flex flex-col justify-center items-center gap-3">
              <Avatar className="w-20 h-20">
                <AvatarImage src={data.user?.image ?? ""} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className="font-bold text-center">{data.user?.name}</h2>
            </div>
          </div>
        ) : (
          <div className="flex justify-between px-5 py-6 items-center">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage />
              </Avatar>
              <h2 className="font-bold">...</h2>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 px-5">
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/">
              <HomeIcon size={18} className="mr-2" />
              Início
            </Link>
          </Button>

          <Button variant="outline" className="justify-start" asChild>
            <Link href="/pedidos">
              <CalendarIcon size={18} className="mr-2" />
              Pedidos
            </Link>
          </Button>

          {data?.user?.role === "ADMIN" && (
            <>
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/ingredientes">
                  <FaAddressCard size={18} className="mr-2" />
                  Ingredientes
                </Link>
              </Button>

              <Button variant="outline" className="justify-start" asChild>
                <Link href="/products">
                  <FaAddressCard size={18} className="mr-2" />
                  Produtos
                </Link>
              </Button>
            </>
          )}
        </div>
      </>
    </>
  );
};

export default SidebarAdm;
