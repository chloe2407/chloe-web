import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import portfolioData, { featuredProjectIds } from "../../../data/portfolio.js";
import CoolCard from './coolcard.js';


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

// Normalize category to array (portfolio has both array and object formats)
function getCategoryArray(category) {
  if (!category) return [];
  if (Array.isArray(category)) return category;
  // Object format: { 'Frameworks / Libraries': [...], 'Tools': [...], 'Technologies': [...] }
  return Object.values(category).flat();
}

export default function CarouselDeck({ props: filterCategory }) {
    const items = Array.isArray(portfolioData) ? portfolioData : [];
    let displayData;
    if (filterCategory && String(filterCategory).toLowerCase() === 'featured') {
        const filtered = items.filter(item => featuredProjectIds.includes(item.id));
        displayData = filtered.sort((a, b) => featuredProjectIds.indexOf(a.id) - featuredProjectIds.indexOf(b.id));
    } else {
        const filteredData = items.filter(item => {
            const categoryArr = getCategoryArray(item.category);
            return categoryArr.some(cat => 
                String(cat).toLowerCase().includes((filterCategory || '').toLowerCase())
            );
        });
        displayData = filteredData.length > 0 ? filteredData : items;
    }
    return (
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2500}
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]} >
        {
        displayData.map((item) => {
                return (
                    <div className="item-con" key={item.id} style={{flex:1}}>
                        <CoolCard {...item} img={item.image} category={getCategoryArray(item.category)} />
                    </div>
                )

            })
        }
        </Carousel>
    )
}