import "./slider.css";
function Slider(){
    return( 
        <>
        <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://hsl.chapinindustries.com/wp-content/uploads/2021/06/ecommerce-10.jpg" className="d-block w-100 height-400" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://elogic.co/wp-content/uploads/2020/10/Depositphotos_190330960_l-2015-1.jpg" className="d-block w-100 height-400" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://wallpaperaccess.com/full/2593208.jpg" className="d-block w-100 height-400" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </>
    )
}
export default Slider;