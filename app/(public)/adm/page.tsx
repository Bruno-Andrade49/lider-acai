import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const AdmPage = () => {
    return (
        <div className="bg-login-bg w-full h-screen bg-cover flex justify-center items-center">

            <div className="w-72 h-96 bg-white rounded-lg p-8 flex flex-col justify-between items-center">

                <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    priority
                />

                <Input
                    type="email"
                    placeholder="Email"
                    className="w-full my-4" 
                />

                <Input
                    type="password"
                    placeholder="Password"
                    className="w-full my-4" 
                />

                <Button
                    className="w-full my-4 bg-pink-950 text-white" 
                >
                    Entrar
                </Button>

            </div>

        </div>
    )
}

export default AdmPage