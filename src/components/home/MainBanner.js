import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



import img1 from "./../../assets/carousel/urja.jpeg";
import img2 from "./../../assets/carousel/WEB_1.jpg";
import img3 from "./../../assets/carousel/LEO_1.jpg";


const items = [
    {
      name: "carousel1",
      src: img1,
    },
    {
      name: "carousel2",
      src: img2,
    },
    {
      name: "carousel3",
      src: img3,
    },
  ];

  const mainBannerOptions = {
    items: 1,
    loop: true,
    margin:0,
    smartSpeed: 700,
    dots: false,
    nav: true,
    autoplay: 4000,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false,
            dots : false
        },
        600:{
            items:1,
            nav:false,
            dost : false,
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        },
    }
};
const MainBanner = () => {
    

        return (
            <div className="main-banner">
                <OwlCarousel className="banner-slider owl-carousel"  {...mainBannerOptions}>
                <div className="slider-item slider-item-1">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>DISCOVER YOUR HOLIDAYS</h2>
                                <h5>TRAVEL THE WORLD, TAKE A JOURNEY WITHIN YOURSELF</h5>
                                {/* <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Book Now</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-2">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>DISCOVER YOUR HOLIDAYS</h2>
                                <h5>TRAVEL THE WORLD, TAKE A JOURNEY WITHIN YOURSELF</h5>
                                {/* <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Book Now</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-3">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>DISCOVER YOUR HOLIDAYS</h2>
                                <h5>TRAVEL THE WORLD, TAKE A JOURNEY WITHIN YOURSELF</h5>
                                {/* <div className="banner-btn">
                                    <Link to={`${process.env.PUBLIC_URL}/package`} className="btn-common">Book Now</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    
                 </OwlCarousel>
            </div>
            
        )

}

export default MainBanner;