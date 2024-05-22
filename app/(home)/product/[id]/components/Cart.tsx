'use client'

import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/app/components/ui/button'
import { useIngredientContext } from '@/app/context/ingredientsContext';
import { GlassWater, ShoppingCart } from 'lucide-react';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';


interface ProductProps {
    product: Product
}

export const Cart = ({ product }: ProductProps) => {
    const { carrinho } = useIngredientContext();

    const route = useRouter();

    const handleOrderConfirm = () => {
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
        localStorage.setItem('product', JSON.stringify(product))
        
        route.push(`/product/${product.id}/orderConfirmation`)
    }

    return (
        <>
            <Drawer>
                <DrawerTrigger style={{ position: 'fixed', bottom: 20, right: 20 }}>
                    <div className={`bg-[#561846] p-6 rounded-full hover:bg-[#63415a] transition duration-300 ${carrinho.length > 0 ? 'has-items' : ''}`}>
                        {carrinho.length > 0 ? (
                            <ShoppingCart color='#84AA37' size={26} />
                        ) : (
                            <ShoppingCart color='#FFFFFF' size={26} />
                        )}
                    </div>
                </DrawerTrigger>

                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle className='m-auto'>Confirmar pedido?</DrawerTitle>


                        <DrawerDescription>

                            <div className='flex items-center justify-center mt-4 text-lg font-bold p-2'>
                                <GlassWater />
                                <div >
                                    {product.name}
                                </div>
                                <GlassWater />
                            </div>

                            {carrinho.length === 0 ? (
                                <div className='font-bold text-2xl pt-6 m-auto flex justify-center'>
                                    Adicione os itens!
                                </div>
                            ) : (
                                <div className='m-auto text-center py-6 font-bold text-lg text-green-800'>
                                    {carrinho.map((item) => (
                                        <div key={item.name}>{item.name}</div>
                                    ))}
                                </div>
                            )}


                        </DrawerDescription>



                    </DrawerHeader>
                    <DrawerFooter className="flex flex-row w-full gap-3 mt-6 justify-center">
                        <Button onClick={handleOrderConfirm}>Confirmar</Button>
                        <DrawerClose>
                            <Button className='w-full' variant={'destructive'}>Cancelar</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};