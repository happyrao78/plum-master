import React, { useState } from 'react';
import qr from "../assets/qr.jfif";
import Tap from '../assets/tap.png';
import Coin from "../assets/coin.png";
import Confetti from 'react-confetti';

const TapTapGame = () => {
    const [count, setCount] = useState(0); // To track the score
    const [timerActive, setTimerActive] = useState(false); // To control the game state
    const [showPopup, setShowPopup] = useState(false); // To display the popup at the end
    const [tapVisible, setTapVisible] = useState(true); // To show/hide the Tap image
    const [timeLeft, setTimeLeft] = useState(30); // Timer for 30 seconds
    const [showConfetti, setShowConfetti] = useState(false); // Control when to show confetti

    const handleTap = () => {
        if (!timerActive) {
            setTimerActive(true);
            startTimer();
        }
        if (tapVisible) {
            setTapVisible(false); // Hide Tap image after first tap
        } else if (timeLeft > 0) { // Only count score if time is still left
            const newCount = count + 1;
            setCount(newCount);

            // Trigger confetti only if the new score is a multiple of 10
            if (newCount % 5 === 0) {
                triggerConfetti(); // Trigger confetti animation on every 10-point increment
            }
        }
    };

    // Starts the timer for 30 seconds
    const startTimer = () => {
        const timerInterval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timerInterval);
                    setShowPopup(true); // Show popup when timer finishes
                    setTimerActive(false);
                    setShowConfetti(false); // Stop confetti when timer ends
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000); // 1000ms = 1s
    };

    // Trigger confetti for a brief moment
    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false); // Stop confetti after 5 seconds
        }, 5000); // Adjust the duration as needed
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setCount(0);
        setTimeLeft(30); // Reset the timer when the popup is closed
        setTapVisible(true); // Reset the Tap image
    };

    return (
        <section
            className="game-section relative overflow-x-hidden pb-40 pt-14 sm:pt-20 lg:pt-32 bg-grid h-[100vh] flex flex-col items-center justify-center"
            id="game"
        >
            {/* Confetti animation triggered on score increments */}
            {showConfetti && <Confetti numberOfPieces={350} recycle={false} />}

            <div className="flex flex-col items-center">
                <h1 className="text-5xl text-[#FFEBDB] mb-4">Tap Tap Game</h1>
                <p className="text-3xl text-gray-100 mb-8">Score: <span className="text-[#FF4052]">{count}</span></p>

                {/* Coin Image (background) */}
                <div
                    onClick={handleTap}
                    className="relative flex items-center justify-center w-64 h-64 rounded-lg shadow-lg cursor-pointer "
                >
                    {/* Coin Image (visible behind the Tap image) */}
                    <img src={Coin} alt="coin" className="w-74 h-74 mb-4 absolute" />

                    {/* Tap Image (visible initially, hidden after first tap) */}
                    {tapVisible && (
                        <img src={Tap} alt="tap here" className="w-44 h-44 rounded-lg z-10 transition-transform transform hover:scale-105" />
                    )}
                </div>

                {/* Timer display */}
                <p className="text-2xl text-gray-100 mt-10">Time Left: <span className="text-[#FF4052]">{timeLeft}s</span></p>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-lg">
                    <div className="bg-white rounded-lg p-6 shadow-lg relative max-w-2xl flex flex-col sm:flex-row space-x-4">
                        {/* Left side of the popup - QR Code and Download instructions */}
                        <div className="flex flex-col items-center sm:w-1/2">
                            <img
                                src={qr}
                                alt="QR Code"
                                className="mb-4 w-40 h-40 rounded-lg"
                            />
                            <h2 className="text-center text-lg font-bold text-[#FF4052] mb-2">Scan the QR</h2>
                            <p className="text-gray-600 text-sm text-center">Scan the QR code</p>
                            <p className="text-gray-600 text-sm text-center">Available on both Android and iOS</p>
                        </div>

                        {/* Vertical separator */}
                        <div className="hidden sm:block w-px bg-gray-300"></div>

                        {/* Right side of the popup - Text and Button */}
                        <div className="flex flex-col justify-center sm:w-1/2">
                            <h3 className="text-lg font-semibold text-[#FF4052] mb-2 text-center">Why choose Plum?</h3>
                            <ul className="list-disc pl-4 text-gray-700 mb-4">
                                <li>Comprehensive health coverage</li>
                                <li>Instant claim settlements</li>
                                <li>Exclusive employee benefits</li>
                                <li>Top-rated customer service</li>
                            </ul>
                            <a href="https://www.plumhq.com" target="_blank" rel="noopener noreferrer">
                                <button className="text-white bg-[#FF4052] hover:bg-[#e63b48] rounded-lg py-2 px-4 mt-4 text-center align-middle">
                                    Learn More
                                </button>
                            </a>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={handleClosePopup}
                            className="absolute top-1 right-2 text-[#FF4052] font-bold"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TapTapGame;
