import Slider from "react-slick";
import "./Carousel.css"

function Carousel({children}) {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "60px",
        //slidesToShow: 3,
        speed: 500
    };

    return (
        <div>
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel