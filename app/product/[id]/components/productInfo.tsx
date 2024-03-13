import { Product } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarberShopInfoProps {
    product: Product;
}

const ProductInfoPage = ({ product }: BarberShopInfoProps) => {

    return (
        <>
            <div className="w-full h-[250px] relative">

                <Image
                    priority={true}
                    src={product.imageUrl || ""}
                    alt={product.name || ""}
                    style={{
                        objectFit: "cover",
                    }}
                    className="opacity-85"
                    fill
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