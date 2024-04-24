'use client'

import { useIngredientContext } from '@/app/context/ingredientsContext'

export const CountTwoStep = () => {

    const { selectedCount2 } = useIngredientContext();

  return (
    <div className='text-gray-500 font-semibold mb-2'>2° Passo: Complementos {`(${selectedCount2}/2)`}</div>
  )
}
