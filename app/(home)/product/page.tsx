import ProductsItem from '@/app/(home)/components/products-item';
import Search from '@/app/(home)/components/search';
import authOptions from '@/app/lib/auth';
import { db } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

interface ProductPageProps {
    searchParams: {
        search?: string;
    }
}

const ProductPage = async ({ searchParams }: ProductPageProps) => {

    const session = await getServerSession(authOptions);

    if (!searchParams.search) {
        return redirect("/");
    }

    const products = await db.product.findMany({
        where: {
            name: {
                contains: searchParams.search,
                mode: "insensitive",
            }
        },
    })

    return (
        <>
            <div className="px-5 py-6 flex flex-col gap-6">
                <Search defaultValues={{
                    search: searchParams.search,
                }} />

                <h1 className="text-gray-400 font-bold text-xs uppercase">Resultados para &quot;{searchParams.search}&quot; </h1>
                <div className="grid grid-cols-2 gap-4">
                    {products.map((product: any) => (
                        <div key={product.id} className="w-full">
                            <ProductsItem product={product} user={session?.user} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductPage;