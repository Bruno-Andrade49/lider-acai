'use client'

import { useIngredientContext } from '@/app/context/ingredientsContext'

export const CountOneStep = () => {

    const { selectedCount } = useIngredientContext();

  return (
    <div className='text-gray-500 font-semibold mb-2'>1° Passo: Sabores {`(${selectedCount}/2)`}</div>
  )
}
