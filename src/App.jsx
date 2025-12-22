import { useState } from 'react';
import './App.css'
import Reel from './Reel';

function App() {
  const [isSpinning, setIsSpinning] = useState(false);

  const [results, setResults] = useState([1, 1, 1]); 

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    
    const newResults = [
      Math.floor(Math.random() * 9) + 1,
      Math.floor(Math.random() * 9) + 1,
      Math.floor(Math.random() * 9) + 1
    ];
    setResults(newResults);

  
    setTimeout(() => {
      setIsSpinning(false);
    }, 5500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      
   
      <div className='relative w-[400px]'> 
        
     
        <img src="/slot-machine.svg" alt="Vending Machine" className='w-full h-auto drop-shadow-2xl z-10 relative pointer-events-none'/> 
        
      
        
        <div className='absolute top-[17%] left-[17%] w-[64%] h-[200px] flex flex-row overflow-hidden border-none outline-none z-20'>
            
        
            <Reel targetNumber={results[0]} isSpinning={isSpinning} delay={0} />
            
           
            <Reel targetNumber={results[1]} isSpinning={isSpinning} delay={500} />
            
           
            <Reel targetNumber={results[2]} isSpinning={isSpinning} delay={1000} />

        </div>

        {/* --- BUTTON --- */}
        <div className="overflow-hidden absolute bottom-[26%] left-[18%] w-[150px] h-[51px] z-30">
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className="transition-transform duration-100 active:translate-y-[14px] disabled:opacity-80 disabled:cursor-not-allowed group"
        >
          <img
            src="/slot-button.png"
            width={150}
            height={51}
            alt="Spin!"
            className={`${!(isSpinning) ? "group-hover:brightness-110" : ""} transition-all`}
          />
          {/* {isPending && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-[14px]">
              <Loader2 className="w-6 h-6 text-white animate-spin" />
            </div>
          )} */}
        </button>
      </div>
      </div>  
    </div>
  )
}

export default App
