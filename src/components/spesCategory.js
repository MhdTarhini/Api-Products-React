import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";


function SpesCategory(){
    const [spesCategory,setSpesCategory]=useState([]);
    const cat_url='https://fakestoreapi.com/products/category';
    const param =useParams();
    useEffect(() => {
      fetch(`${cat_url}/${param.categoryName}`)
        .then((res) => res.json())
        .then((data) => setSpesCategory(data));
    }, [param.categoryName]);
    return(
        <>
        <div className="container">
            <div className="row">
                {spesCategory.map((product)=>{
                    return(
                    <div className="col-3 m-4 product" key={product.index} >
                        <Product product={product} showButton={true}/>
                    </div>
                    )
                })}
                
            </div>
        </div>
        </>


    )
}
export default SpesCategory;
