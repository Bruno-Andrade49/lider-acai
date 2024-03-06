import Image from 'next/image'
import React from 'react'
import SideMenu from './sideMenu'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'

export const Navbar = () => {
    return (
        <div className='w-full bg-[#561846] h-24'>
            <div className="p-6 justify-between flex items-center">
                <Image src="/assets/logo.png"
                    alt="Logo"
                    width={48}
                    height={48}
                    priority={true}
                />

                <Sheet>
                    <SheetTrigger>
                        <Menu size={30} color='#FFFFFF' />
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>

            </div>
        </div>
    )
}
