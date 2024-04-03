'use client'

import { Adress } from '@prisma/client'
import React from 'react'

interface AdressSelectedProps {
    address: Adress;
}

export const AdressSelect = ({ address }: AdressSelectedProps) => {

    const handleSelectAddress = () => {
        localStorage.setItem('selectedAddress', JSON.stringify(address));
    };


    return (
        <>
            <div className="flex relative">
                <div className='mx-3 my-3 px-3 py-3 border-pink-950 border-2 rounded-xl w-full relative'>
                    <p className='text-sm'>{address.name}</p>
                    <p className='text-sm'>{address.num}, {address.complemento}</p>
                    <p className='text-sm'>{address.bairro}</p>
                    <input type="radio" id="addressRadio" name="addressRadio" onClick={handleSelectAddress} className='absolute right-5 top-8 z-50 text-xl h-6 w-6' />
                </div>
            </div>

        </>
    )
}
