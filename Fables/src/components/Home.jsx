import React from 'react'
import HeroCoffee from '../assets/HeroCoffee1.png'
const Home = () => {
  return (
    <div className='bg-[#E1F2F7] min-h-[550px] sm:min-h-[600px] flex justify-center items-center w-full z-20 top-0 start-0'>
        <div className="container pb-6 sm:pb-0 ">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {/**Text Content Section*/}
                <div className='text-5xl text-customTeal sm:text-6xl lg:text-7xl font-bold'>
                    <h1>A Heaven For Gourmet <span className='text-customBlue font-cursive'>Coffee & Dessert </span> Lovers</h1>
                </div>
                <div>
                    {/*Image Section*/}
                    <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2'>
                        <img src={HeroCoffee} alt="Hero Coffee" className='w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin'/>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Home