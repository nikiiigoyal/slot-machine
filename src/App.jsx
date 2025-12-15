import { useState } from 'react';
import './App.css'
import Reel from './Reel';

function App() {
  const [isSpinning, setIsSpinning] = useState(false);

  const [results, setResults] = useState([1, 1, 1]); 

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    // 1. Generate 3 Random Numbers Locally
    const newResults = [
      Math.floor(Math.random() * 9) + 1,
      Math.floor(Math.random() * 9) + 1,
      Math.floor(Math.random() * 9) + 1
    ];
    setResults(newResults);

    // 2. Reset Button after longest animation (approx 5.5 sec)
    setTimeout(() => {
      setIsSpinning(false);
    }, 5500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      
      {/* MACHINE CONTAINER */}
      <div className='relative w-[400px]'> 
        
        {/* Background Image */}
        <img src="/slot-machine.svg" alt="Vending Machine" className='w-full h-auto drop-shadow-2xl z-10 relative pointer-events-none'/> 
        
        {/* --- SCREEN WINDOW (Grid of 3 Reels) --- */}
        
        <div className='absolute top-[17%] left-[17%] w-[64%] h-[200px] flex flex-row overflow-hidden border-none outline-none z-20'>
            
            {/* Reel 1 (No delay) */}
            <Reel targetNumber={results[0]} isSpinning={isSpinning} delay={0} />
            
            {/* Reel 2 (0.5s delay) */}
            <Reel targetNumber={results[1]} isSpinning={isSpinning} delay={500} />
            
            {/* Reel 3 (1s delay) */}
            <Reel targetNumber={results[2]} isSpinning={isSpinning} delay={1000} />

        </div>

        {/* --- BUTTON --- */}
        <div className='absolute bottom-[16%] right-[36%] z-30'>
  <div className="w-[200px] h-[150px]  overflow-hidden relative">
    
    <button 
      onClick={handleSpin} 
      disabled={isSpinning} 
      className={`
        w-full h-full
        transition-all duration-100 ease-in-out
        active:translate-y-[60%]
         ${isSpinning ? 'translate-y-[10%] cursor-not-allowed brightness-75' : 'translate-y-0 cursor-pointer hover:brightness-110'}
      `}
      title='Click to spin'
    >
      <img 
        src="/slot-button.png" 
        alt="Spin Button" 
        
        className="w-full h-full object-contain drop-shadow-xl"
      />
    </button>
  
  </div>
</div>
      </div>  
    </div>
  )
}

export default App
