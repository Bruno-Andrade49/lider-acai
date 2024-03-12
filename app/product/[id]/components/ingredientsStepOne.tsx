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
        if (carrinho.includes(ingredient.name)) {
            removeIngredient(ingredient.name);
        } else {
            addIngredient(ingredient.name);
        }
    };

    return (
        <>
            <div className='flex w-full justify-between bg-slate-50 p-2 rounded-lg mb-2'>
                <div
                    onClick={handleClick}
                    className='cursor-pointer mr-2 font-semibold text-sm'
                    style={{
                        opacity: carrinho.includes(ingredient.name) ? '0.5' : '1',
                    }}
                >
                    {ingredient.name}
                </div>

                <div onClick={handleClick} className='cursor-pointer'>
                    {carrinho.includes(ingredient.name) ? <MinusCircle /> : <PlusCircle />}
                </div>
            </div>

        </>
    );
};