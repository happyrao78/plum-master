import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypeEffect = () => {
    const el = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Insurance is Daunting',
                'Insurance is <span style="color: #FF4052;">NOT</span> daunting',
                'Experience it yourself with <span style="color: #FF4052;">Plum</span>'
            ],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        };

        const typed = new Typed(el.current, options);

        // Cleanup function to destroy the Typed instance
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <h1 className="text-5xl sm:text-6xl px-2 s:px-4 text-center text-gray-50 lg:text-7xl xl:text-5xl font-bold sm:max-w-4xl uppercase bg-gradient-text bg-clip-text text-transparent">
            <span ref={el}></span>
        </h1>
    );
};

export default TypeEffect;
