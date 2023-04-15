import { Link } from "react-router-dom";

function Product (props){
  // define Props
  const { product, showButton } = props;

  return (
    <>
      <div className="card" style={{ height: "500px", width: "300px" }}>
        <img src={product.image} className="card-img-top img-pro" alt="..." />
        <div className="card-body pro-text">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text description " id="content">
            {product.description}
          </p>
          <p>Price: {product.price}$</p>
          {showButton && (
            <Link to={`/product/${product.id}`} className="btn btn-primary">
              More Description
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;