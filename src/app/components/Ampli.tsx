import React from 'react';
import { Play, Pause, Square, SkipBack, SkipForward } from 'lucide-react';

const Ampli = () => {
  // Mock data - replace with actual state later
  const currentSong = {
    artist: "The Weeknd",
    title: "Blinding Lights",
    duration: 200, // in seconds
    currentTime: 85, // in seconds
    bitrate: "320",
    khz: "44"
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentSong.currentTime / currentSong.duration) * 100;

  return (
    <div className="select-none" style={{ fontFamily: 'MS Sans Serif, sans-serif', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}>
      {/* Main Ampli window */}
      <div className="relative bg-gray-300 border-2 border-t-gray-200 border-l-gray-200 border-r-gray-500 border-b-gray-500" 
           style={{ width: '275px', height: '116px' }}>
        
        {/* Title bar */}
        <div className="flex justify-between items-center px-1 py-1 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-xs font-bold">
          <span>*** Ampli ***</span>
          <div className="flex gap-1">
            <button className="w-4 h-3 bg-gray-400 text-black text-xs leading-none">_</button>
            <button className="w-4 h-3 bg-gray-400 text-black text-xs leading-none">×</button>
          </div>
        </div>

        {/* Main content area */}
        <div className="p-1 bg-gray-300" style={{ height: 'calc(100% - 20px)' }}>
          
          {/* Display area - black LCD with green text */}
          <div className="relative mb-1 bg-black border border-gray-500 p-1" 
               style={{ height: '24px', fontSize: '11px' }}>
            <div className="flex justify-between items-center h-full">
              <div className="text-green-400 font-mono overflow-hidden whitespace-nowrap">
                {currentSong.artist} - {currentSong.title}
              </div>
              <div className="text-green-400 font-mono ml-2 flex-shrink-0">
                {formatTime(currentSong.currentTime)}
              </div>
            </div>
          </div>

          {/* Spectrum analyzer area (mock) */}
          <div className="mb-1 bg-black border border-gray-500 p-1 flex items-end justify-center gap-px" 
               style={{ height: '20px' }}>
            {[...Array(20)].map((_, i) => (
              <div key={i} 
                   className="bg-green-400 animate-pulse" 
                   style={{ 
                     width: '2px', 
                     height: `${Math.random() * 12 + 2}px`,
                     animationDelay: `${Math.random() * 0.5}s`,
                     animationDuration: `${Math.random() * 0.5 + 0.5}s`
                   }} />
            ))}
          </div>

          {/* Progress bar and controls row */}
          <div className="flex items-center gap-1 mb-1">
            {/* Progress bar */}
            <div className="flex-1 bg-gray-200 border border-gray-500 h-3 relative">
              <div className="absolute inset-0.5 bg-gray-100">
                <div className="h-full bg-green-400 transition-all duration-300"
                     style={{ width: `${progress}%` }}>
                </div>
              </div>
            </div>
            
            {/* Bitrate/khz display */}
            <div className="text-xs bg-black text-green-400 border border-gray-500 px-1 font-mono">
              {currentSong.bitrate} {currentSong.khz}
            </div>
          </div>

          {/* Control buttons */}
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              <button className="w-5 h-5 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 border border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center cursor-pointer hover:from-gray-100 hover:to-gray-300 active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white active:from-gray-400 active:to-gray-200" title="Previous">
                <SkipBack size={8} />
              </button>
              <button className="w-5 h-5 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 border border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center cursor-pointer hover:from-gray-100 hover:to-gray-300 active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white active:from-gray-400 active:to-gray-200" title="Play">
                <Play size={8} />
              </button>
              <button className="w-5 h-5 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 border border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center cursor-pointer hover:from-gray-100 hover:to-gray-300 active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white active:from-gray-400 active:to-gray-200" title="Pause">
                <Pause size={8} />
              </button>
              <button className="w-5 h-5 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 border border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center cursor-pointer hover:from-gray-100 hover:to-gray-300 active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white active:from-gray-400 active:to-gray-200" title="Stop">
                <Square size={6} />
              </button>
              <button className="w-5 h-5 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 border border-t-white border-l-white border-r-gray-600 border-b-gray-600 flex items-center justify-center cursor-pointer hover:from-gray-100 hover:to-gray-300 active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white active:from-gray-400 active:to-gray-200" title="Next">
                <SkipForward size={8} />
              </button>
            </div>

            {/* Volume slider */}
            <div className="flex items-center gap-1">
              <span className="text-xs">VOL</span>
              <div className="w-16 h-3 bg-gray-200 border border-gray-500 relative">
                <div className="absolute inset-0.5 bg-gray-100">
                  <div className="h-full bg-green-400" style={{ width: '70%' }}></div>
                </div>
                <div className="absolute top-0 w-1 h-full bg-yellow-500 transform -translate-x-1/2" 
                     style={{ left: '70%' }}></div>
              </div>
            </div>

            {/* Balance slider */}
            <div className="flex items-center gap-1">
              <span className="text-xs">BAL</span>
              <div className="w-16 h-3 bg-gray-200 border border-gray-500 relative">
                <div className="absolute inset-0.5 bg-gray-100">
                  <div className="absolute top-0 left-1/2 w-1 h-full bg-yellow-500 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ampli;
