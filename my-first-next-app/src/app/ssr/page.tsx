// 방법 1 : fetch에 no-store 옵션주기
import ProductList from "@/components/ProductList";
import { Product } from "@/types";

const ProductsPage = async () => {
  const response = await fetch("http://localhost:4000/products", {
    cache: "no-store",
  });
  const products: Product[] = await response.json();

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;

// 방법 2 : page.tsx 컴포넌트에 dynamic 추가하기
// cache 옵션 지우기
// import ProductList from '@/components/ProductList';
// import { Product } from '@/types';

// export const dynamic = "force-dynamic";

// const ProductsPage = async () => {
//   const response = await fetch('http://localhost:4000/products');
//   const products: Product[] = await response.json();

//   return (
//     <div>
//       <h1>Products</h1>
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default ProductsPage;
// 결과 : 요청이 있을 때 마다 지속해서 갱신, hydration이 완료되기 전까지의 시간. 즉, TTL(Time To Interactive)가 관건이다.
