"use client";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateProduct } from "../actions/createProduct";

export const zodConversionNumber = (zodPipe: any) =>
  z
    .string()
    .transform((value) => (value === "" ? null : value))
    .nullable()
    .refine((value) => value === null || !isNaN(Number(value)), {
      message: "Nombre Invalide",
    })
    .transform((value) => (value === null ? 0 : Number(value)))
    .pipe(zodPipe);

const adressSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "É necessário uma palavra com ao menos 5 caracteres...",
    }),
  description: z
    .string()
    .min(10, { message: "Descrição deve ter ao menos 10 caracteres..." }),
  imageUrl: z.string().url({ message: "URL inválida" }),
  price: zodConversionNumber(
    z.number().positive("Coloque um número positivo!")
  ),
});

type ProductSchema = z.infer<typeof adressSchema>;

export const FormAdress = () => {
  const [isCreateLoading, setIsCreateLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(adressSchema),
  });

  const handleAdress = async (data: any) => {
    setIsCreateLoading(true);

    try {
      await CreateProduct(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsCreateLoading(false);
      setModalOpen(false);
    }
  };

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger>
          <div className="p-2">
            <Button variant={"secondary"}>
              Criar novo Produto!
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="w-[80%] rounded-xl">
          <DialogHeader>
            <DialogTitle>
              <div className="pb-4">Criar novo Produto?</div>
            </DialogTitle>
            <DialogDescription>
              <form
                onSubmit={handleSubmit(handleAdress)}
                className="flex flex-col gap-2"
              >
                <div className="flex flex-col gap-1">
                  <Input placeholder="Nome" type="text" {...register("name")} />
                  {errors.name && (
                    <span className="text-start text-red-700">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Input
                    placeholder="Descrição"
                    type="text"
                    {...register("description")}
                  />
                  {errors.description && (
                    <span className="text-start text-red-700">
                      {errors.description.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Input
                    placeholder="URL da Imagem"
                    type="text"
                    {...register("imageUrl")}
                  />
                  {errors.imageUrl && (
                    <span className="text-start text-red-700">
                      {errors.imageUrl.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Input
                    placeholder="Preço"
                    type="number"
                    {...register("price")}
                  />
                  {errors.price && (
                    <span className="text-start text-red-700">
                      {errors.price.message as string}
                    </span>
                  )}
                </div>

                <div className="flex flex-row gap-4 w-full pt-4">
                  <Button
                    type="button"
                    variant={"destructive"}
                    className="w-full"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancelar
                  </Button>

                  <Button
                    variant={"default"}
                    className="w-full bg-green-500"
                    disabled={isCreateLoading}
                  >
                    {isCreateLoading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Criar!
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
