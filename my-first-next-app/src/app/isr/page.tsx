// 방법 1 : fetch에 옵션 주기

import ProductList from '@/components/ProductList';
import { Product } from '@/types';

const ProductsPage = async () => {
  const response = await fetch('http://localhost:4000/products',
   next: {
      revalidate: 5,
    },
   );
  const products: Product[] = await response.json();

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;

// 방법 2 : page.tsx 컴포넌트에 revalidate 추가하기
// next 옵션 지우기
// import ProductList from '@/components/ProductList';
// import { Product } from '@/types';

// export const revalidate = 5;

// const HomePage = async () => {
//   const response = await fetch('http://localhost:4000/products');
//   const products: Product[] = await response.json();

//   return (
//     <div>
//       <h1>Products</h1>
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default HomePage;

// 결과 : 주어진 시간에 한 번씩 갱신해준다.