'use client'

import { useIngredientContext } from '@/app/context/ingredientsContext'

export const CountThreeStep = () => {

    const { selectedCount3 } = useIngredientContext();

  return (
    <div className='text-gray-500 font-semibold mb-2'>3° Passo: Caldas {`(${selectedCount3}/2)`}</div>
  )
}
