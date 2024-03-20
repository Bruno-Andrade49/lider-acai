import { getServerSession } from "next-auth";
import "../globals.css";
import authOptions from "../lib/auth";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import ProductsItem from "./components/products-item";
import { db } from "../lib/prisma";
import Search from "./components/search";


export default async function Home() {

  const [products] = await Promise.all([

    db.product.findMany({})

  ])

  const session = await getServerSession(authOptions);
  

  return (
    <>
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">
          {session?.user ? `Olá, ${session.user.name?.split(" ")[0]}!` : "Opa! Partiu comprar um açaí hoje?"}
        </h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      {/*Search */}
      <div className="px-5 mt-6">
        <Search />
      </div>

      {/* Produtos */}
      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {products.map((product: any) => (
            <div key={product.id} className="min-w-[167px] max-w-[167px]">
              <ProductsItem key={product.id} product={product} user={session?.user}/>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Populares</h2>

        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {products.map((product: any) => (
            <div key={product.id} className="min-w-[167px] max-w-[167px]">
              <ProductsItem key={product.id} product={product} user={session?.user} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
