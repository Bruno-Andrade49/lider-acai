"use client"

import React, { useState } from 'react'
import { Loader2, X } from 'lucide-react';
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
} from "@/components/ui/alert-dialog"
import { CancelAdress } from '../createAdress/actions/cancelAdress';

interface DeleteAdressProps {
    id: number
}

export const DeleteAdress = (id: DeleteAdressProps) => {

    const [isDeleteLoading, setIsDeleteLoading] = useState(false)

    const handleDeleteAdress = async (id: number) => {
        setIsDeleteLoading(true)

        try {
            await CancelAdress(id);
        } catch (err) {
            console.log(err)
        } finally {
            setIsDeleteLoading(false);
        }
    }


    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <X size={18} className='text-green-950' />
            </AlertDialogTrigger>
            <AlertDialogContent className='w-[80%] rounded-xl'>
                <AlertDialogHeader>
                    <AlertDialogTitle>Deseja excluir endereço?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Após a exclusão, você não poderá mais voltar atrás...
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className='flex flex-row gap-2'>
                    <AlertDialogCancel className='w-full'>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className='w-full relative top-2 bg-red-700' onClick={() => handleDeleteAdress(id.id)} disabled={isDeleteLoading}>
                        {isDeleteLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Excluir
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
