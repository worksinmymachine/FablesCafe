import React from 'react'
import AllDishes from '../assets/AllDishes.jpeg'


const AboutUs = () => {
    return (
        <div className='bg-[#E1F2F7] min-h-[550px] sm:min-h-[600px] flex justify-center items-center w-full z-20 top-0 start-0'>
            <div className="container pb-6 sm:pb-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/*Image Section*/}
                    <div>
                        <img src={AllDishes} alt="Savoury Food by Fables" className='max-w-[230px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] text-blob' />
                    </div>
                    {/*Text Section*/}
                    <div className='bg-[#4C7FBD]'>
                    <div className='bg-customBlue p-2 box-shadow rounded-tr-full rounded-bl-3xl'>
                        <h1 className='text-6xl font-bold font-cursive text-customTeal'>About Us</h1>
                        <p className='text-white'>Fables cafe in the heart of downtown is a charming cafe with a focus on Artisinal beveragesnand wholesome desserts. Our cozy,lively ambience provides the perfect setting for a relaxing morning coffee or a casual meetup with friends & family.We are renowned for our handcrafted espresso drinks mouth-watering sweets and light breakfast and lunch items. As a community driven establishment our cafe actively engages in the local community by hosting local events supporting local artists & contributing to neighbourhood initiatives.Here we believe in fostering connections over coffee and strive to become your go-to neighbourhood hangout. Join us in savouring the simple pleasures of life and create your own <span className='text-customTeal font-bold'>Food,Tables,Tales !</span></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs