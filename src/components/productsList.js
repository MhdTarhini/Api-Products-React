import { useEffect, useState } from "react";
import Product from "./product";

function ProductsList(){
    const urlProducts = "https://fakestoreapi.com/products"; //fakeStore APi
    const [products, setProducts] = useState([]); //product State
    useEffect(() => {
      //fetch products and add to products state
      fetch(urlProducts)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
      <>
        <h2 className="text-center p-5"> Our Products</h2>
        <div className="container">
          <div className="row">
            {
              //map into products
              products.map((product) => {
                return (
                  <div className="col-3 m-4 product" key={product.id}>
                    <Product product={product} showButton={true} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </>
    );
}
export default ProductsList;