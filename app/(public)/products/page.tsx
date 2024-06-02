import { db } from "@/app/lib/prisma";
import { DeleteProducts } from "./deleteProduct/deleteProduct";
import { ChangeProducts } from "./changeProduct/changeProduct";
import { FormAdress } from "./createProduct/createProduct";
import { SearchProduct } from "./searchProduct/searchProduct";

const ProductsPage = async () => {
  const [products] = await Promise.all([db.product.findMany({})]);

  return (
    <>
      <div>
        <SearchProduct products={products} />
      </div>
    </>
  );
};

export default ProductsPage;
