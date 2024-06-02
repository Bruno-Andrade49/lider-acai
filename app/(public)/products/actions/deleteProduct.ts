"use server"

import { db } from "@/app/lib/prisma"
import { revalidatePath } from "next/cache";

export const DeleteProduct = async (id: number) => {

    await db.product.delete({
        where: {
            id: id
        }
    })

    revalidatePath("/product");
}

