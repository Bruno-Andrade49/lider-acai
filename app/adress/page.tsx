import React from 'react'
import { Button } from '../components/ui/button'
import { db } from '../lib/prisma';
import { getServerSession } from 'next-auth';
import authOptions from '../lib/auth';
import { Adress } from '@prisma/client';
import { redirect } from 'next/navigation';

const AdressPage = async () => {

    const session = await getServerSession(authOptions);

    if(!session?.user) {
        redirect("/")
    }

    const [user] = await Promise.all([
        db.user.findMany({
            where: {
                email: session?.user?.email
            }
        })
    ])

    const [adress] = await Promise.all([

        db.adress.findMany({
            where: {
                userId: user[0].id
            }
        })

    ])


    return (
        <>
            <div>

                <div className='p-6'>
                    <Button className='w-full' variant={'secondary'}>
                        Criar novo endereço!
                    </Button>
                </div>

             

                <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                    {adress.map((endereço: Adress) => (
                        <div key={endereço.id} className="min-w-[300px] max-w-[300px] max-h-[300px] min-h-[300px]">
                            <div className='bg-white rounded-lg p-6'>
                                <h2 className='font-bold mt-2 overflow-hidden text-ellipsis text-nowrap'>
                                <span className='font-light'>Endereço: </span>
                                    {endereço.name}
                                </h2>
                                <h2 className='font-bold mt-2 overflow-hidden text-ellipsis text-nowrap'>
                                <span className='font-light'>Numero: </span>
                                    {endereço.num}
                                </h2>
                                
                                <h2 className='font-bold mt-2 overflow-hidden text-ellipsis text-nowrap'>
                                    <span className='font-light'>Bairro: </span>
                                    {endereço.bairro}
                                </h2>
                                <h2 className='font-bold mt-2 overflow-hidden text-ellipsis text-nowrap'>
                                <span className='font-light'>Complemento: </span>
                                    {endereço.complemento}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
          
            </div>
        </>
    )
}

export default AdressPage
