'use client'

import { IngredientOrder } from "@/app/context/ingredientsContext";
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DeleteIcon } from "lucide-react";
interface Product {
    price: number | null;
  }

export const CartItens = () => {

    const [ingredientes, setIngredientes] = useState<IngredientOrder[]>([]);
    const [product, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const carrinhoLocalStorage = localStorage.getItem('carrinho');
        if (carrinhoLocalStorage) {
            setIngredientes(JSON.parse(carrinhoLocalStorage));
        }

        const productLocalStorage = localStorage.getItem('product');
        if (productLocalStorage) {
            setProducts(JSON.parse(productLocalStorage));
        }
    }, []);

    const handleDeleteItemCart = (name: string) => {
        const newIngredientes = ingredientes.filter(ingredient => ingredient.name !== name);
        setIngredientes(newIngredientes);
        localStorage.setItem('carrinho', JSON.stringify(newIngredientes));
    }

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Ingrediente</TableHead>
                        <TableHead className="text-right">Quantidade</TableHead>
                        <TableHead className='w-[25px]' />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ingredientes.map((ingredient: IngredientOrder, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{ingredient.name}</TableCell>
                            <TableCell className="text-right">{ingredient.qtd}</TableCell>
                            <TableCell onClick={() => handleDeleteItemCart(ingredient.name)} className="cursor-pointer">
                                <DeleteIcon />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={1}>Total</TableCell>
                        <TableCell className="text-right" colSpan={0}>
                            <div className='relative left-14'>
                            {product.price !== null ? `R$ ${product.price.toFixed(2)}` : 'Preço indisponível'}
                            </div>
                        </TableCell>
                        <TableCell />
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
