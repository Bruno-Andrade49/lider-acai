"use server";

import { db } from "@/app/lib/prisma";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const CreateProduct = async (data: Product) => {
  await db.product.create({
    data: {
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
      price: data.price,
    },
  });

  revalidatePath("/products");
};
