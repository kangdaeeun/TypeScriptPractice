// 방법 1 : fetch에 아무 옵션 주지 않기

import React from "react";
import { Product } from "@/types";

const HomePage = async () => {
  const response = await fetch("http://localhost:4000/products");
  const data: Product[] = await response.json();

  return (
    <div>
      <h1>Products</h1>
      <div className="p-8 m-4">
        {data.map((product) => (
          <div className="flex border p-4 gap-4 rounded-md" key={product.id}>
            <img
              className="rounded-sm"
              width={150}
              height={150}
              src={product.images}
              alt={product.title}
            />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <p className="mt-4 text-2xl">{product.price.amount}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

// 방법 2 : fetch에 force-cache 옵션 주기

// import ProductList from '@/components/ProductList';
// import { Product } from '@/types';

// const HomePage = async () => {
//   const response = await fetch('http://localhost:4000/products',
//   {cache: "force-cache"});
//   const products: Product[] = await response.json();

//   return (
//     <div>
//       <h1>Products</h1>
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default HomePage;

// 결과 : 아무리 새로고침해도 동일한 페이지만 출력된다.
