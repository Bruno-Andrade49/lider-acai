"use client";

import { ChangeProducts } from "../changeProduct/changeProduct";
import { FormAdress } from "../createProduct/createProduct";
import { DeleteProducts } from "../deleteProduct/deleteProduct";
import { Product } from "@prisma/client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/app/components/ui/input";

type SearchProductProps = {
  products: Product[];
};

export const SearchProduct: React.FC<SearchProductProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const truncateText = (text: any, maxLength: any) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="p-4 flex flex-row justify-between items-center">
        {/* Barra de pesquisa */}
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Pesquisar produtos..."
            className="border rounded p-2"
          />
          <div>
            <Search />
          </div>
        </div>

        {/* Formulário de endereço */}
        <div>
          <FormAdress />
        </div>
      </div>
      <div className="overflow-x-auto m-5 rounded-xl [&::-webkit-scrollbar]:hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-[100px] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Descrição
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                ImageUrl
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Preço
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((produto) => (
              <tr key={produto.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {produto.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{produto.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {truncateText(produto.description, 50)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <img
                    src={produto?.imageUrl || "default-image-url.png"}
                    alt={produto?.name || "Produto sem nome"}
                    className="w-16 h-16 object-cover rounded-full inline-block"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{produto.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <ChangeProducts
                    id={produto.id}
                    name={produto.name}
                    description={produto.description}
                    imageUrl={produto.imageUrl}
                    price={produto.price}
                  />
                  <DeleteProducts id={produto.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
