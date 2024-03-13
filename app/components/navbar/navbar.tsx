import Image from 'next/image'
import SideMenu from './sideMenu'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className='w-full bg-[#561846] h-24'>
            <div className="p-6 justify-between flex items-center">
                <Link href={"/"} >
                    <Image src="/assets/logo.png"
                        alt="Logo"
                        width={48}
                        height={48}
                        priority={true}
                    />
                </Link>

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
