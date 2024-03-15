"use client"

import { Input } from '@/app/components/ui/input'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose } from '@/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { CreateAdress } from './actions/createAdress'
import { Loader2 } from 'lucide-react'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export const zodConversionNumber = (zodPipe: any) =>
    z
        .string()
        .transform((value) => (value === '' ? null : value))
        .nullable()
        .refine((value) => value === null || !isNaN(Number(value)), {
            message: 'Nombre Invalide',
        })
        .transform((value) => (value === null ? 0 : Number(value)))
        .pipe(zodPipe);

const adressSchema = z.object({
    name: z.string().min(5, { message: "É necessário uma palavra com ao menos 5 caracteres..." }),
    num: zodConversionNumber(z.number().positive("Coloque um numero positivo!")),
    bairro: z.string().min(1, { message: "Digite um bairro..." }),
    complemento: z.string().optional(),
})

type AdressSchema = z.infer<typeof adressSchema>

export const FormAdress = () => {

    const [isCreateLoading, setIsCreateLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<AdressSchema>({
        resolver: zodResolver(adressSchema),
    })

    const handleAdress = async (data: any) => {
        setIsCreateLoading(true)

        try {
            await CreateAdress(data);
        } catch (err) {
            console.log(err)
        } finally {
            setIsCreateLoading(false);
            setModalOpen(false);
        }
    }



    return (
        <>
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogTrigger className='w-full'>
                    <div className='p-6'>
                        <Button className='w-full' variant={'secondary'}>
                            Criar novo endereço!
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className='w-[80%] rounded-xl'>
                    <DialogHeader>
                        <DialogTitle>
                            <div className='pb-4'>
                                Criar novo endereço?
                            </div>
                        </DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleSubmit(handleAdress)} className='flex flex-col gap-2'>

                                <div className='flex flex-col gap-1'>
                                    <Input placeholder='Rua' type='text' {...register("name")} />
                                    {errors.name && <span className='text-start text-red-700'>{errors.name.message}</span>}
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <Input placeholder='Numero' type='number' {...register("num")} />
                                    {errors.num && <span className='text-start text-red-700'>{errors.num.message as string}</span>}
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <Input placeholder='Bairro' type='text' {...register("bairro")} />
                                    {errors.bairro && <span className='text-start text-red-700'>{errors.bairro.message}</span>}
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <Input placeholder='Complemento' type='text' {...register("complemento")} />
                                    {errors.complemento && <span className='text-start text-red-700'> {errors.complemento.message}</span>}
                                </div>

                                <div className='flex flex-row gap-4 w-full pt-4'>
                                    <Button type='button' variant={"destructive"} className='w-full' onClick={() => setModalOpen(false)}>
                                        Cancelar
                                    </Button>


                                    <Button variant={"default"} className='w-full bg-green-500' disabled={isCreateLoading} >
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
    )
}
