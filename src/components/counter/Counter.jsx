import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ end, duration = 2, suffix = '' }) => {
    const counterRef = useRef(null);

    useEffect(() => {
        const countUp = gsap.timeline({
            scrollTrigger: {
                trigger: counterRef.current,
                start: "top center+=500", // Start the animation when the counter is in view
                toggleActions: "play none none none",
                // markers: true 
               }
        });

        countUp.to(counterRef.current, {
            innerText: end,
            duration: duration,
            roundProps: "innerText",
            ease: "power3.out",
            snap: { innerText: 1 }
        });

        return () => {
            if (countUp) countUp.kill();
        };
    }, [end, duration]);

    return (
        <div ref={counterRef} className="count-digit">
            {0}{suffix}
        </div>
    );
};

export default Counter;
