"use client";

import React, { useState } from "react";
import { Loader2, X } from "lucide-react";
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
import { DeleteProduct } from "../actions/deleteProduct";

interface DeleteProductProps {
  id: number;
}

export const DeleteProducts = (id: DeleteProductProps) => {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleDeleteProduct = async (id: number) => {
    setIsDeleteLoading(true);

    try {
      await DeleteProduct(id);
    } catch (err) {
      console.log(err);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
          Deletar
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[80%] rounded-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja excluir esse Produto?</AlertDialogTitle>
          <AlertDialogDescription>
            Após a exclusão, você não poderá mais voltar atrás...
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row gap-2">
          <AlertDialogCancel className="w-full">Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="w-full relative top-2 bg-red-700"
            onClick={() => handleDeleteProduct(id.id)}
            disabled={isDeleteLoading}
          >
            {isDeleteLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
