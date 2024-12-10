// 방법 : "use client" 옵션주기
"use client";

import ProductList from "@/components/ProductList";
import { Product } from "@/types";

const HomePage = async () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/products");
    const products: Product[] = await response.json();
    setProducts(products);
  };

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;

// 결과 : 요청이 있을 때마다 지속해서 갱신, client side rendering이기 때문에 loading에 관련된 state 제어를 통해 사용자에게 알려줄 수 있다
