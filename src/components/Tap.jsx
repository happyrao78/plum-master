import React, { useState, useEffect } from 'react';
import qr from "../assets/qr.jfif"

const TapTapGame = () => {
    const [count, setCount] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleTap = () => {
        if (!timerActive) {
            setTimerActive(true);
            startTimer();
        }
        setCount(count + 1);
    };

    const startTimer = () => {
        setTimeout(() => {
            setShowPopup(true);
            setTimerActive(false);
        }, 10000);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setCount(0);
    };

    return (
        <section
            className="game-section relative overflow-x-hidden pb-40 pt-14 sm:pt-20 lg:pt-32 bg-grid h-[100vh] flex flex-col items-center justify-center"
            id="game"
        >
            <div className="flex flex-col items-center">
                <h1 className="text-5xl text-[#FFEBDB] mb-4">Tap Tap Game</h1>
                <p className="text-3xl text-gray-100 mb-8">Score: <span className="text-[#FF4052]">{count}</span></p>
                
                <div
                    onClick={handleTap}
                    className="flex items-center justify-center w-64 h-64 bg-[#FF4052] rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                >
                    <span className="text-2xl text-white font-bold">Tap Here!</span>
                </div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-lg">
                    <div className="bg-white rounded-lg p-6 shadow-lg relative max-w-md">
                        <button 
                            onClick={handleClosePopup} 
                            className="absolute top-1 right-2 text-[#FF4052] font-bold"
                        >
                            Close
                        </button>
                        <img 
                            src={qr} // Update this with your image path
                            alt="QR Code"
                            className="mb-4 w-full rounded"
                        />
                        <h2 className="text-center text-lg font-bold text-[#FF4052]">Scan the QR</h2>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TapTapGame;
