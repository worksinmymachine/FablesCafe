import React from 'react';
import { useState } from 'react';
import fablesLeaf from '../assets/fablesLeaf.png';
import campusTales from '../assets/campusTales.png';
import FablesCafe from '../assets/fables.png'
import BakeStudio from '../assets/bakestudio.png'
import './OurServicesCardSection.css';

const OurServicesCardSection = () => {
    return (
        <div className='bg-[#E1F2F7] min-h-[450px] sm:min-h-[500px] flex justify-center items-center w-full z-20 top-0 start-0'>
            <div className="container pb-6 sm:pb-0">
                {/* Header title */}
                <div className='text-center mb-10'>
                    <h1 className='text-5xl font-bold font-cursive text-customTeal'>
                        <span className='text-customBlue font-cursive'>Inception & Journey</span> So Far...
                    </h1>
                </div>

                {/* TimeLine Section */}
                <div className="min-h-screen flex justify-center">
                    <div className="w-1/2 mx-auto"> {/* Adjust width here */}
                        {/* Level 1 */}
                        <div className="flex flex-row items-center relative">
                            <div className="w-2/5 -ml-8 px-2 py-5"> {/* Reduced padding */}
                                <FlippingCard 
                                    title="Fables Cafe" 
                                    subtitle="Established in 2022"  
                                    hoverText="Community Centric Ambience, Comforting snacks with a modern twist!"
                                    cardImage={FablesCafe}


                                />
                                <p className='text-xs text-gray-800'>Fables Cafe | 2022</p>
                            </div>
                            <div className="absolute h-full w-1 bg-customBlue left-1/2 transform -translate-x-1/2"></div>
                            <div className="absolute flex items-center justify-center w-1/5 left-1/2 transform -translate-x-1/2">
                                <div className="h-8 w-8 rounded-full border-2 border-customBlue bg-white flex items-center justify-center"> {/* Reduced size */}
                                    <img src={fablesLeaf} className="w-4 h-4" alt="Fables Cafe" />
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-5"></div>
                        </div>

                        {/* Level 2 */}
                        <div className="flex flex-row items-center relative">
                            <div className="w-2/5 ml-12 px-2 py-5"></div>
                            <div className="absolute h-full w-1 bg-customTeal left-1/2 transform -translate-x-1/2"></div>
                            <div className="absolute flex items-center justify-center w-1/5 left-1/2 transform -translate-x-1/2">
                                <div className="h-8 w-8 rounded-full border-2 border-customTeal bg-white flex items-center justify-center">
                                    <img src={fablesLeaf} className="w-4 h-4" alt="The Bake Studio" />
                                </div>
                            </div>
                            <div className="w-2/5 ml-12 px-2 py-5">
                                <FlippingCard 
                                    title="The Bake Studio" 
                                    subtitle="Established in 2023" 
                                    hoverText="Decadent Desserts, Customized cakes for every occasion!"
                                    cardImage={BakeStudio}
                               />
                                <p className='text-xs text-gray-800'>The Bake Studio | 2023</p>
                            </div>
                        </div>

                        {/* Level 3 */}
                        <div className="flex flex-row items-center relative">
                            <div className="w-2/5 -ml-8 px-2 py-5">
                                <FlippingCard 
                                    title="Campus Tales" 
                                    subtitle="Established in 2023"  
                                    hoverText="A hub for wellness and connection, Royal breakfast platters!"
                                    cardImage={FablesCafe}
                                />
                                 <p className='text-xs text-gray-800'>Campus Tales | 2024</p>
                            </div>
                            <div className="absolute h-full w-1 bg-customGreen left-1/2 transform -translate-x-1/2"></div>
                            <div className="absolute flex items-center justify-center w-1/5 left-1/2 transform -translate-x-1/2">
                                <div className="h-8 w-8 rounded-full border-2 border-customGreen bg-white flex items-center justify-center">
                                    <img src={campusTales} className="w-4 h-4" alt="Campus Tales" />
                                </div>
                            </div>
                            <div className="w-2/5 px-2 py-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};









const FlippingCard = ({ title, subtitle, hoverText , cardImage }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    /* From Uiverse.io by Kemboi-Dun */ 
<article className="card">
    <div class="object-fit">
        {/* Place image here */}
        <img src={cardImage}></img>
    </div>
<div className="card_content">
    <span className="card_title">{title}</span>
        <span className="card_subtitle">{subtitle}</span>
        <p className="card_description">{hoverText}</p>
    
</div>
</article>
  );
};












export default OurServicesCardSection;
