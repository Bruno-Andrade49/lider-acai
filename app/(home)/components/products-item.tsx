"use client"


import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductsItemProps {
    product: Product;
}

const ProductsItem = ({ product }: ProductsItemProps) => {

    const route = useRouter();

    const handleBookingClick = () => {
        route.push(`/product/${product.id}`)
    }

    return (
        <Card className="min-w-full max-w-full rounded-2xl">
            <CardContent className="px-1 py-0 pt-1">
                <div className="w-full h-[159px] relative">
                    <Image
                        alt={product.name || ''}
                        src={product.imageUrl || ''}
                        layout="fill"
                        className="rounded-2xl"
                    />
                </div>

                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap text-rose-950">{product.name}</h2>
                    <Button className="w-full mt-3" variant="default" onClick={handleBookingClick}>
                        Comprar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default ProductsItem;