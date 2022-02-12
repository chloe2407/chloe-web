import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import data from "../../../data/portfolio.js";
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
   


export default function CarouselDeck({props}) {
    const filteredData = []
    const datac = data.port
    //  iterate through data.port (all items)
    for (var i = 0; i < datac.length; i++) 
    {
        for (var j = 0; j < datac[i].category.length; j++)
        {
            if (datac[i].category[j].includes(props))
            {
                // add to filtered data
                filteredData.push(datac[i])
            }
        }
        
    }
    return (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2500}
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