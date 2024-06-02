"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export const ChangeProduct = async (
  id: number,
  name: string | null,
  description: string | null,
  imageUrl: string | null,
  price: number | null
) => {
  await db.product.update({
    where: {
      id: id,
    },
    data: {
      id: id,
      name: name,
      description: description,
      imageUrl: imageUrl,
      price: price,
    },
  });

  revalidatePath("/product");
};
