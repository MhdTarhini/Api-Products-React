import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <>
      <div className="container text-center">
        <div className="row">
          {category.map((product, index) => {
            return (
              <Link
                to={`category/${product}`}
                className="col category"
                key={product.title}>
                {product}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Category;
