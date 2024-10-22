import React from 'react'
import sevenEleven from '../assets/seven11.png'
import sense66 from '../assets/sense66.jpeg'
import snbp from '../assets/Snbp.png'
const Testimonials = () => {
    const people = [
        {
          name: "Milind Karpe",
          avatar: "https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png",
          testimony: "I went here with my friend to grab a quick bite. The place was quiet and the ambiance was good. They have outdoor seating as well.We quickly ordered French fries and a paneer tikka sandwich. The fries were crispy and the sandwich was tasty. We could not have time to try coffee but will surely visit again to try other menus and coffee. ",
          twitterPseudo: "Local Guide | 135 Reviews"
        },
        {
          name: "Amina Reyza",
          avatar: "https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png",
          testimony: "Had the sweetest time at a place in Moshi with a dessert festival! 🍪🍰 Not just desserts – they've got iced tea, hot chocolate, sandwiches, pasta, nachos, and more. It's a charming spot ",
          twitterPseudo: "Local Guide | 72 Reviews"
        },
        {
          name: "Gurpreet Singh",
          avatar: "https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png",
          testimony: "Ambience is great. Food quality is awesome. Design and decoration is just breathtaking. Background music is excellent. Above all, it you are a reader, you can read alongwith having meals.I recommend readers to visit the cafe once. It's a peaceful place to spend all day in a corner.",
          twitterPseudo: "Local Guide | 350 Reviews"
        }
        
      ]
      const parters = [
        {
          name: "Seven Eleven",
          picture: `url(${sevenEleven})`,
        },
        {
          name: "Apple",
          picture: "#icon-monster-image",
        }
      ]
    
    return (
        <div className='bg-[#E1F2F7] min-h-[550px] sm:min-h-[600px] flex justify-center items-center w-full z-20 top-0 start-0'>
            <div className="container pb-6 sm:pb-0 ">
                {/**Header Title */}
                <div className='text-center mb-20'>
                    <h1 className='text-6xl font-bold font-cursive text-customTeal'>Testimonials <span className='text-customBlue'>& Reviews</span></h1>
                </div>
                {/** Card sliders section*/}
                <div>
                   {/* :TESTIMONIALS CONTAINER */}
        <div className="mx-auto w-full max-w-sm sm:max-w-3xl lg:max-w-6xl">
          <ul className="grid grid-cols-6 gap-5">
            {people.map(person => (
              <li key={person.twitterPseudo} className="col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 flex flex-col rounded-xl shadow-lg bg-white">
                {/* ::Card header */}
                <div className="flex items-center space-x-3">
                  {/* :::avatar */}
                  <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                    <img src={person.avatar} alt="" className="object-cover" />
                  </span>
                  <div className="text-left">
                    {/* :::name */}
                    <h3 className="text-customBlue text-base font-semibold">{person.name}</h3>
                    {/* :::pseudo twitter */}
                    <p className="text-sm text-customTeal">{person.twitterPseudo}</p>
                  </div>
                </div>
                {/* ::Card body */}
                <div className="mt-4 flex text-sm">
                  {/* :::testimony */}
                  <p className="text-sm">
                    {person.testimony}
                  </p>
                </div>
              </li>
            ))
            }
          </ul>
        </div>
                </div>
                {/**My Partners*/}
                {/* <div className="mt-8 w-full">
          <h3 className="mb-3 flex justify-center items-center text-center text-lg text-gray-400 font-extrabold uppercase">
            <span className="mr-3 w-16 h-1 bg-gray-400" />
            They trusted Us
            <span className="ml-3 w-16 h-1 bg-gray-400" />
          </h3>
          <ul className="flex flex-wrap justify-evenly items-center space-y-5 sm:space-y-0 space-x-6">
            
              <li className="w-24 sm:w-24 opacity-40">
                <img src={sevenEleven} alt="" className="h-24 object-cover" />
              </li>
              <li className="w-24 sm:w-24 opacity-40">
                <img src={sense66} alt="" className="h-24 object-cover" />
              </li>
              <li className="w-24 sm:w-24 opacity-40">
                <img src={snbp} alt="" className="h-24 object-cover" />
              </li>
          
            
          </ul>
        </div> */}
            </div>
        </div>
    )
}

export default Testimonials

