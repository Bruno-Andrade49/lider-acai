import { db } from "@/app/lib/prisma";
import { CartItens } from "./cartItens/cartItens";
import { AdressSelect } from "./adressSelect/adressSelect";
import { getServerSession } from "next-auth";
import authOptions from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { FormAdress } from "@/app/(home)/adress/createAdress/formAdress";
import ButtonOrderConfirmation from "./buttonOrderConfirmation";

const PageOrderConfirmation = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/");
  }

  const [user] = await Promise.all([
    db.user.findMany({
      where: {
        email: session?.user?.email,
      },
    }),
  ]);

  const [adress] = await Promise.all([
    db.adress.findMany({
      where: {
        userId: user[0].id,
      },
    }),
  ]);

  return (
    <>
      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">
          Carrinho
        </h2>
        <div className="bg-white mx-3 my-6 rounded-lg">
          <CartItens />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">
          Endereço
        </h2>
        <div className="bg-white mx-3 my-6 rounded-lg">
          {adress.map((address) => (
            <AdressSelect address={address} key={address.id} />
          ))}
          <FormAdress />
        </div>
      </div>

      <ButtonOrderConfirmation />

      
    </>
  );
};

export default PageOrderConfirmation;
