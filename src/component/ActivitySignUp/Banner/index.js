import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

export default class Banner extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings} className="banner-slide">
                <div>
                    <img src="./assets/images/04-banner.jpg" alt=""/>
                </div>
                <div>
                    <h3>2</h3>
                </div>
            </Slider>
        );
    }
}
