"use server"

import authOptions from "@/app/lib/auth";
import { db } from "@/app/lib/prisma"
import { Adress } from "@prisma/client"
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const CreateAdress = async (data: Adress) => {

    const session = await getServerSession(authOptions);

    const [user] = await Promise.all([
        db.user.findMany({
            where: {
                email: session?.user?.email
            }
        })
    ])

    await db.adress.create({
        data: {
            name: data.name,
            num: data.num,
            bairro: data.bairro,
            complemento: data.complemento,
            userId: user[0].id
        }
    })

    revalidatePath("/adress")
}

