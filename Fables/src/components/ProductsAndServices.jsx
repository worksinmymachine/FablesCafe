import React from 'react'
import Img1 from '../assets/Beverages.jpeg'
import Img2 from '../assets/Desserts.jpeg'
import Img3 from '../assets/AllDishes.jpeg'
import Img4 from '../assets/cake.jpeg'
import Img5 from '../assets/motif.png'
import Img6 from '../assets/vedhas.jpeg'

const ServicesData = [
    {
        id: 1,
        img: Img1,
        name: 'Beverages',
        description: 'A vibrant selection of freshly brewed coffee, iced matcha, and colorful smoothies, perfect for a refreshing Food , Tables & Tales experience.',
        tags:["Coffees","Milkshakes"]
    },
    {
        id: 2,
        img: Img2,
        name: 'Desserts',
        description: 'A tempting array of desserts featuring rich chocolate cakes, creamy cheesecakes, and freshly baked pastries, perfect for a sweet indulgence.',
        tags:["Tiramisu","Brownie"]
    },
    {
        id: 3,
        img: Img3,
        name: 'Food',
        description: 'A delectable spread of gourmet dishes showcasing vibrant salads, savory entrees, and artisanal sandwiches offering best experience.',
        tags:["Burgers","Pasta"]
    },
    {
        id: 4,
        img: Img4,
        name: 'Cakes',
        description: 'An exquisite display of decadent cakes, including velvety chocolate, fruity cheesecakes, and elegant layered confections.',
        tags:["Pastries","Cheesecakes"]
    },
    {
        id: 5,
        img: Img5,
        name: 'The Motif Heritage',
        description: 'An exquisite display of decadent cakes, including velvety chocolate, fruity cheesecakes, and elegant layered confections.',
        tags:["Gifting","Cheesecakes"]
    },
    {
        id: 6,
        img: Img6,
        name: 'Vedhas Architecture Studio',
        description: 'An exquisite display of decadent cakes, including velvety chocolate, fruity cheesecakes, and elegant layered confections.',
        tags:["Decor","Architecture","Coming Soon"]
    }

]
const ProductsAndServices = () => {
    return (
        <div className='bg-[#E1F2F7] min-h-[550px] sm:min-h-[600px] flex justify-center items-center w-full z-20 top-0 start-0'>
            <div className="container pb-6 sm:pb-0 ">
                {/**Header Title */}
                <div className='text-center mb-20'>
                    <h1 className='text-6xl font-bold font-cursive text-customTeal'>Our <span className='text-customBlue'>Products & Services</span></h1>
                </div>
                {/**Cards Section*/}
                <div className='grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                    {
                        ServicesData.map((data, index) => {
                            return (
                                <div class="flex flex-col max-w-sm bg-[#4C7FBD] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img class="h-48 w-full object-cover rounded-t-lg " src={data.img} alt={data.name} />
                                    </a>
                                    <div class="flex-grow p-5">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{data.name}</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-white dark:text-gray-400">{data.description}</p>
                                        <div class="flex space-x-2 mt-4">
                                            <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{data.tags[0]}</span>
                                            <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{data.tags[1]}</span>
                                            {data.tags[2]&&<span class="bg-red-100 text-white-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{data.tags[2]}</span>}
                                        </div>
                                    </div>
                                </div>





                            )
                        })
                    }
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsAndServices