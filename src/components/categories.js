import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category() {
  // define Category State
  const [category, setCategory] = useState([]);
  useEffect(() => {
    // fetch FakeStore.com API
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json()) // transfer to json object
      .then((data) => setCategory(data)); // add data to category State
  }, []);

  return (
    <>
    <div style={{backgroundColor: "#e8e8ff"}} className="p-2">
    <h2 className="text-center p-2" >Categorys</h2>
      <div className="container text-center" style={{marginBottom:"10px"}}>
        <div className="row">
          {
            // Map into Category state
            category.map((product) => {
              return (
                // display items and link to her own description page
                <Link
                  to={`category/${product}`}
                  className="col category"
                  key={product}>
                  {product}
                </Link>
              );
            })
          }
        </div>
      </div>
    </div>
    </>
  );
}
export default Category;
