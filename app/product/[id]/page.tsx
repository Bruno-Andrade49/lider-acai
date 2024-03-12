import authOptions from "@/app/lib/auth";
import { db } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ProductInfoPage from "./components/productInfo";
import { CountOneStep } from "./components/oneStep/count";
import { IngredientsStepOne } from "./components/ingredientsStepOne"
import { IngredientsStepTwo } from "./components/ingredientsStepTwo";
import { IngredientsStepThree } from "./components/ingredientsStepThree";
import { CountTwoStep } from "./components/twoStep/twoStep";
import { CountThreeStep } from "./components/threeStep/threeStep";
import { Cart } from "./components/Cart";


interface ProductDetailsPageProps {
    params: {
        id?: string; 
    };
}

const BarberDetailsPage = async ({ params }: ProductDetailsPageProps) => {

    const session = await getServerSession(authOptions);

    if (!params.id) {
        // TODO: Redirecionar ou tratar caso não haja um ID
        return null;
    }

    const productId = parseInt(params.id, 10); // Convertendo a string para número

    const product = await db.product.findUnique({
        where: {
            id: productId,
        },
    });

    if (!product) {
        redirect('/')
    }

    const [ingredientsStepOne, ingredientsStepTwo, ingredientsStepThree] = await Promise.all([

        db.ingredient.findMany({
            where: {
                step: "2"
            },
        }),

        db.ingredient.findMany({
            where: {
                step: "3"
            },
        }),

        db.ingredient.findMany({
            where: {
                step: "4"
            },
        }),

    ])

    return (
        <div>
            <ProductInfoPage product={product} />

            <div className="px-5 pt-3">

                <CountOneStep />
                {ingredientsStepOne.map((ingredient: { id: number; name: string; value: number | null; step: string; }) => (
                    <IngredientsStepOne ingredient={ingredient} key={ingredient.id} />
                ))}

            </div>

            <div className="px-5 pt-3">

                <CountTwoStep />
                {ingredientsStepTwo.map((ingredient: { id: number; name: string; value: number | null; step: string; }) => (
                    <IngredientsStepTwo ingredient={ingredient} key={ingredient.id} />
                ))}

            </div>

            <div className="px-5 pt-3">

                <CountThreeStep />
                {ingredientsStepThree.map((ingredient: { id: number; name: string; value: number | null; step: string; }) => (
                    <IngredientsStepThree ingredient={ingredient} key={ingredient.id} />
                ))}

            </div>

            <Cart product={product} />
        </div>

    );
};

export default BarberDetailsPage;
