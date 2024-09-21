"use client"; // Add this at the top
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion, stagger, useAnimate } from "framer-motion"; // Import Framer Motion

const TypeEffect = () => {
    const el = useRef(null);
    const [showButton, setShowButton] = useState(false);
    const [showNextLine, setShowNextLine] = useState(false);

    // TextGenerateEffect component definition
    const TextGenerateEffect = ({
        words,
        className,
        filter = true,
        duration = 0.5,
    }) => {
        const [scope, animate] = useAnimate();
        const wordsArray = words.split(" ");

        useEffect(() => {
            animate(
                "span",
                {
                    opacity: 1,
                    filter: filter ? "blur(0px)" : "none",
                },
                {
                    duration: duration,
                    delay: stagger(0.2),
                }
            );
        }, [scope.current]);

        const renderWords = () => {
            return (
                <motion.div ref={scope}>
                    {wordsArray.map((word, idx) => (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white uppercase bg-gradient-text bg-clip-text text-transparent opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    ))}
                </motion.div>
            );
        };

        return (
            <div className={className}>
                <div className="mt-4">
                    <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
                        {renderWords()}
                    </div>
                </div>
            </div>
        );
    };

    useEffect(() => {
        const options = {
            strings: [
                'Insurance is Daunting',
                'Insurance is <span style="color: #FF4052;">NOT</span> daunting',
            ],
            typeSpeed: 90,
            backSpeed: 75,
            loop: false,
            onComplete: () => {
                setTimeout(() => {
                    setShowNextLine(true);
                    setTimeout(() => {
                        setShowButton(true);
                    }, 2000); // Delay before showing the button
                }, 2000); // Delay before showing the next line
            },
        };

        const typed = new Typed(el.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-5xl sm:text-6xl px-2 s:px-4 text-gray-50 lg:text-7xl xl:text-5xl font-bold sm:max-w-4xl uppercase bg-gradient-text bg-clip-text text-transparent">
                <span ref={el}></span>
            </h1>

            {/* Display the next line with a reveal effect using TextGenerateEffect */}
            {showNextLine && (
                <TextGenerateEffect 
                    words="Experience it yourself" 
                    className="text-7xl sm:text-6xl px-2 s:px-4 text-gray-50 lg:text-7xl xl:text-5xl font-bold bg-gradient-text bg-clip-text text-transparent uppercase mt-5"
                />
            )}

            {/* Conditionally render the button after typing is complete */}
            
                {showButton && (
    <motion.button
        className='mt-6 text-white bg-[#FF4052] rounded py-2 px-4'
        initial={{ scale: 0 }} // Start with scale 0 (invisible)
        animate={{ scale: 1 }} // Scale to normal size
        exit={{ scale: 0 }} // Optional: scale out when it exits
        transition={{ duration: 0.5, type: "spring", stiffness: 10 }}
    >
        <a href="#game">Let's Play a Game !!</a>
    </motion.button>
)}
        </div>
    );
};

export default TypeEffect;
