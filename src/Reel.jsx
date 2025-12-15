import { useEffect, useState } from "react";

const Reel = ({ targetNumber, isSpinning, delay }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numberColors = {
    1: 'text-[#E237FF]',      
    2: 'text-[#FF9635]',     
    3: 'text-[#E237FF]',    
    4: 'text-[#FF9635]',   
    5: 'text-[#FF73D9]',   
    6: 'text-white',    
    7: 'text-white',     
    8: 'text-[#FF73D9]',
    9: 'text-[#3BF0FF]',   
  };
  const spinNumbers = [...numbers, ...numbers, ...numbers, ...numbers, ...numbers, ...numbers, ...numbers];
  
  const Num_Height = 65;  
  const [stripPosition, setStripPosition] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState('0s');

  useEffect(() => {
    if (isSpinning && targetNumber !== null) {
      
      setTransitionDuration('0s');
      setStripPosition(0);

      
      setTimeout(() => {
        const targetIndex = spinNumbers.length - 15 + (targetNumber - 1);
        const rawPosition = -(targetIndex * Num_Height);
        const centerPosition = rawPosition + Num_Height; 

        
        const duration = 4000 + delay; 
        setTransitionDuration(`${duration}ms`);
        
     
        setStripPosition(centerPosition);
      }, 50);

    } 

  }, [isSpinning, targetNumber, delay]);

  return (
    <div className="relative overflow-hidden h-[180px] w-full">
     
      <div 
        className="flex flex-col items-center w-full"
        style={{ 
          transform: `translateY(${stripPosition}px)`,
          transitionProperty: 'transform',
          transitionDuration: transitionDuration,
          transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' // Mechanical ease-out
        }}
      >
        {spinNumbers.map((num, index) => (
          <div 
            key={index} 
            className={`flex items-center   font-skranji justify-center font-bold ${numberColors[num]}`}
            style={{ height: `${Num_Height}px`, fontSize: '40px' }}
          >
            {num}
          </div>
        ))}
      </div>
      
      
      <div className="absolute top-[80px] w-full h-[80px]  pointer-events-none"></div>
    </div>
  );
};

export default Reel;
