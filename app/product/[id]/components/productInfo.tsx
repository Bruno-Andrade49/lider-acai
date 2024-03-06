"use client"

import { Button } from "@/app/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, Menu, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarberShopInfoProps {
    product: Product;
}

const ProductInfoPage = ({ product }: BarberShopInfoProps) => {

    const router = useRouter();

    const handleBackClick = () => {
        router.replace("/");
    }

    return (
        <>
            <div className="h-[250px] w-full relative">

                <Image
                    src={product.imageUrl || ""}
                    fill
                    alt={product.name || ""}
                    style={{
                        objectFit: "cover",
                    }}
                    className="opacity-85"
                />
            </div>

            <div className="bg-[#ffffff] px-5 pt-3 pb-6 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">{product.name}</h1>
                
                <div className="flex items-center gap-1 mt-2">
                    <StarIcon className="text-primary" size={18} />
                    <p className="text-sm">5,0 (899 avaliações)</p>
                </div>
            </div>
        </>
    );
}

export default ProductInfoPage;