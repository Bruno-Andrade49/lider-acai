"use server"

import { db } from "@/app/lib/prisma"
import { revalidatePath } from "next/cache";

export const CancelAdress = async (id: number) => {

    await db.adress.delete({
        where: {
            id: id
        }
    })

    revalidatePath("/adress")
}

