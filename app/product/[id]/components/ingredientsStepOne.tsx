'use client'

import { useIngredientContext } from '@/app/context/ingredientsContext';
import { Ingredient } from '@prisma/client';
import { MinusCircle, PlusCircle } from 'lucide-react';

interface IngredientsProps {
    ingredient: Ingredient;
}

export const IngredientsStepOne: React.FC<IngredientsProps> = ({ ingredient }) => {
    const { carrinho, addIngredient, removeIngredient } = useIngredientContext();

    const handleClick = () => {
        if (carrinho.some(item => item.name === ingredient.name)) {
            removeIngredient({
                name: ingredient.name,
                qtd: 0
            });
        } else {
            addIngredient({
                name: ingredient.name,
                qtd: 1
            });
        }
    };

    return (
        <>
            <div className='flex w-full justify-between bg-slate-50 p-2 rounded-lg mb-2'>
                <div
                    onClick={handleClick}
                    className='cursor-pointer mr-2 font-semibold text-sm'
                    style={{
                        opacity: carrinho.some(item => item.name === ingredient.name) ? '0.5' : '1',
                    }}
                >
                    {ingredient.name}
                </div>

                <div onClick={handleClick} className='cursor-pointer'>
                    {carrinho.some(item => item.name === ingredient.name) ? <MinusCircle /> : <PlusCircle />}
                </div>
            </div>
        </>
    );
};