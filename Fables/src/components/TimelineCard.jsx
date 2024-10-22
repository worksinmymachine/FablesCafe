import React, { useState } from 'react';


const TimelineCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`relative w-64 h-80 perspective`}
        onClick={handleFlip}
      >
        <div
          className={`absolute w-full h-full transition-transform duration-500 transform ${flipped ? 'rotateY-180' : ''}`}
        >
          {/* Front Side */}
          <div className="w-full h-full bg-white shadow-lg rounded-lg flex flex-col items-center justify-center backface-hidden">
            <h2 className="text-xl font-bold">Card Title</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="w-24 h-24 object-cover rounded-full mt-4"
            />
          </div>

          {/* Back Side */}
          <div className="w-full h-full bg-blue-500 text-white shadow-lg rounded-lg flex items-center justify-center backface-hidden rotateY-180">
            <p className="text-center">This is the back text.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
