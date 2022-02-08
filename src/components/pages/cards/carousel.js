import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import data from "../../../data/portfolio.js";
import data2 from "../../../data/categories";

import CoolCard from '../cards/coolcard.js';


const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1300 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1300, min: 950 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 950, min: 0 },
    items: 1
  }
};
   


export default function CarouselDeck(props) {
    const filteredData = []
    data.port.filter(item => {
      for (var i = 0; i < item.category.length; i++) 
      {
        //   TODO: adjust so that i can use props instead
        if (item.category[i] === data2.categories[1])
        {
          // add to filtered data
          filteredData.push(item)
        }
      }
    })
    return (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]} >
        {
        filteredData.map((item) => {
                return (
                    <div className="item-con" key={item.id} style={{flex:1}}>
                        <CoolCard {...item} />
                    </div>
                )

            })
        }
        </Carousel>
    )
}