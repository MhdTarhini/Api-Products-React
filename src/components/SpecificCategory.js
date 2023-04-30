import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";

function SpecificCategory() {
  const [SpecificCategory, setSpecificCategory] = useState([]); // Specific category state
  const cat_url = "https://fakestoreapi.com/products/category"; //FakeStore category api
  const param = useParams(); // useParams from react-router
  useEffect(() => {
    // fetch specific category and add to specific category state
    fetch(`${cat_url}/${param.categoryName}`)
      .then((res) => res.json())
      .then((data) => setSpecificCategory(data));
  }, [param.categoryName]);
  return (
    <>
      <div className="container" >
        <hr/>

        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontStyle: "italic",
            margin:"10px"
          }}>
          <u>
          {
            // category title upper case
            param.categoryName.toUpperCase()
          }
          </u>
        </div>
        <hr/>
        <div className="row">
          {
            // map into specificCategory state
            SpecificCategory.map((product) => {
              return (
                <div className="col" key={product.index}>
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
export default SpecificCategory;
