import authOptions from "@/app/lib/auth";
import { db } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ProductInfoPage from "./components/productInfo";


interface ProductDetailsPageProps {
    params: {
        id?: string
    }
}

const BarberDetailsPage = async ({ params }: ProductDetailsPageProps) => {

    const session = await getServerSession(authOptions);

    if (!params.id) {

        // TODO: redirect to 
        return null
    }

    const product = await db.product.findUnique({
        where: {
            id: params.id
        },
    })

    if (!product) {
        redirect('/')
    }

    return (
        <div>

            <ProductInfoPage product={product} />

        </div>
    )
}

export default BarberDetailsPage;