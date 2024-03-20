'use client'

import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { IngredientOrder, useIngredientContext } from '@/app/context/ingredientsContext';
import { DeleteIcon } from 'lucide-react';

const PageOrderConfirmation = () => {
    const [ingredientes, setIngredientes] = useState<IngredientOrder[]>([]);

    useEffect(() => {
        const carrinhoLocalStorage = localStorage.getItem('carrinho');
        if (carrinhoLocalStorage) {
            setIngredientes(JSON.parse(carrinhoLocalStorage));
        }
    }, []);

    const handleDeleteItemCart = (name: string) => {
        const newIngredientes = ingredientes.filter(ingredient => ingredient.name !== name);
        setIngredientes(newIngredientes);
        localStorage.setItem('carrinho', JSON.stringify(newIngredientes));
    }


    return (
        <div className='mt-6'>
            <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Carrinho</h2>
            <div className='bg-white mx-3 my-6 rounded-lg'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Ingrediente</TableHead>
                            <TableHead className="text-right">Quantidade</TableHead>
                            <TableHead className='w-[25px]' />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {ingredientes.map((ingredient: IngredientOrder, index: number) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{ingredient.name}</TableCell>
                                <TableCell className="text-right">{ingredient.qtd}</TableCell>
                                <TableCell onClick={() => handleDeleteItemCart(ingredient.name)} >
                                    <DeleteIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={1}>Total</TableCell>
                            <TableCell className="text-right" colSpan={0}>
                                <div className='relative left-14'>
                                    $2,500.00
                                </div>
                            </TableCell>
                            <TableCell />
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    );
};

export default PageOrderConfirmation;
