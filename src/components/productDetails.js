import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";
// import ProductsList from "./productsList";

function ProductDetails (){
  const api_url = "https://fakestoreapi.com/products"; // FakeStore API
  const [product, setProduct] = useState({}); // Product State
  const params = useParams(); //From React-router we use UseParams for specific page url
  console.log(params);
  useEffect(() => {
    //fetch specific Api from fakeStore for each products
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [params.productId]); // dependency list of fetch every time the params.product is update the fetch will reload
  return <Product product={product} showButton={false} />;
}
export default ProductDetails;