import React from 'react';
import { tutorialData } from './tutorialData';
import { useRouter } from 'next/router';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularTutorial = () => {
  const router = useRouter();

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className="popular-tutorials py-md-4">
        <div className="container">
          <div className="text-center">
            <h2 className="popular-site-heading fs-1">Popular <span>Tutorials</span></h2>
            <p className="sub-heading">Here are some of our popular resources</p>
            <Slider {...settings} className="technologies slider py-2">
              {
                tutorialData.map((item, i) => (
                  <div className="item" href="tutorials" onClick={() => router.push(item.link)} key={i} title={item.name} >
                    {item.svg}
                    {item.name}
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularTutorial