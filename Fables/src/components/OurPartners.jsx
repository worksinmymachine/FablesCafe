import React, { useState } from 'react';
import Img1 from '../assets/Beverages.jpeg';
import Img2 from '../assets/Desserts.jpeg';
import Img3 from '../assets/AllDishes.jpeg';
import Img4 from '../assets/cake.jpeg';

const ServicesData = [
    {
        id: 1,
        img: Img1,
        name: 'Beverages',
        description: 'A vibrant selection of freshly brewed coffee, iced matcha, and colorful smoothies, perfect for a refreshing cafe experience.',
        tags: ["Coffees", "Milkshakes"]
    },
    {
        id: 2,
        img: Img2,
        name: 'Desserts',
        description: 'A tempting array of desserts featuring rich chocolate cakes, creamy cheesecakes, and freshly baked pastries, perfect for a sweet indulgence.',
        tags: ["Tiramisu", "Brownie"]
    },
    {
        id: 3,
        img: Img3,
        name: 'Food',
        description: 'A delectable spread of gourmet dishes showcasing vibrant salads, savory entrees, and artisanal sandwiches offering best experience.',
        tags: ["Burgers", "Pasta"]
    },
    {
        id: 4,
        img: Img4,
        name: 'Cakes',
        description: 'An exquisite display of decadent cakes, including velvety chocolate, fruity cheesecakes, and elegant layered confections.',
        tags: ["Pastries", "Cheesecakes"]
    }
];

const OurPartners = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ServicesData.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + ServicesData.length) % ServicesData.length);
    };

    return (
        <div id="gallery" className="relative w-full">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {ServicesData.map((service, index) => (
                    <div key={service.id} className={`absolute transition-transform duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}>
                        <img src={service.img} className="max-w-full h-auto" alt={service.name} />
                        <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 p-4">
                            <h2 className="text-xl font-bold">{service.name}</h2>
                            <p>{service.description}</p>
                            <p className="text-sm">{service.tags.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <button type="button" className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={prevImage}>
                <span className="w-10 h-10 rounded-full bg-white">
                    <svg className="w-4 h-4 text-black" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={nextImage}>
                <span className="w-10 h-10 rounded-full bg-white">
                    <svg className="w-4 h-4 text-black" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default OurPartners;
