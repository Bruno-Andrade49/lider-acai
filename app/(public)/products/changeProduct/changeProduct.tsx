"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ChangeProduct } from "../actions/changeProduct";

interface ChangeProductsProps {
  id: number;
  name: string | null;
  description: string | null;
  imageUrl: string | null;
  price: number | null;
}

export const ChangeProducts: React.FC<ChangeProductsProps> = ({
  id,
  name: initialName,
  description: initialDescription,
  imageUrl: initialImageUrl,
  price: initialPrice,
}) => {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [name, setName] = useState<string>(initialName ?? '');
  const [description, setDescription] = useState<string>(initialDescription ?? '');
  const [imageUrl, setImageUrl] = useState<string>(initialImageUrl ?? '');
  const [price, setPrice] = useState<any>(initialPrice);

  const handleChangeProduct = async () => {
    setIsDeleteLoading(true);

    try {
      await ChangeProduct(id, name, description, imageUrl, price);
    } catch (err) {
      console.log(err);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Editar
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[80%] rounded-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Editar Produto</AlertDialogTitle>
          <AlertDialogDescription>
            Modifique as informações do produto abaixo e salve as alterações.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Descrição
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              URL da Imagem
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Preço
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <AlertDialogFooter className="flex flex-row gap-2">
          <AlertDialogCancel className="w-full">Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="w-full relative top-2 bg-blue-700"
            onClick={handleChangeProduct}
            disabled={isDeleteLoading}
          >
            {isDeleteLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Salvar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
