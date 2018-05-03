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
        const { data } = this.props;
        return (
            <Slider {...settings} className="banner-slide">
                {data.map((item, i) => (
                    <div key={i}>
                        <img src={item.url} alt={item.name} />
                    </div>
                ))}
            </Slider>
        );
    }
}

Banner.defaultProps = {
    data: []
};
