
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

function Match() {
    const pre = "./pre.svg"; // Your logo image path
    const united = "./united.png";
    const bre = "./bre.png";
    const COUNTDOWN_FROM = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // Start from 7 days from now

    return (
        <div className="relative mt-5 mr-5">
            {/* Image */}
            <img
                src="./cover.png"
                className="h-[500px] w-full object-cover rounded-xl"
                alt="Old Trafford Stadium"
            />

            {/* Logo and countdown overlay */}
            <div className="absolute inset-0 flex flex-col justify-start items-center pt-5">
                {/* Logo centered horizontally */}
                <img src="./logo.png" alt="logo" className="mt-12" width={180} height={70} />

                {/* Countdown timer directly under the logo */}
                <div className="p-4 rounded-lg mt-4 bg-black bg-opacity-50">
                    <div className="flex w-full items-center justify-between">
                        <CountdownItem unit="Day" text="days" countdownFrom={COUNTDOWN_FROM} />
                        <CountdownItem unit="Hour" text="hours" countdownFrom={COUNTDOWN_FROM} />
                        <CountdownItem unit="Minute" text="minutes" countdownFrom={COUNTDOWN_FROM} />
                        <CountdownItem unit="Second" text="seconds" countdownFrom={COUNTDOWN_FROM} />
                    </div>
                </div>
                {/* Centering the VS text */}
                <div className="flex items-center mt-4 ml-[30px]">
                    <button
                        className="px-6 py-2 font-medium bg-white rounded-full text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        VOIR L'OFFRE
                    </button>
                </div>
            </div>
        </div>
    );
}

const CountdownItem = ({ unit, text, countdownFrom }) => {
    const { ref, time } = useTimer(unit, countdownFrom);

    return (
        <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-1 font-mono md:h-36 md:gap-2">
            <div className="relative w-full overflow-hidden text-center">
                <span
                    ref={ref}
                    className="block text-2xl font-medium text-white md:text-4xl lg:text-6xl xl:text-7xl"
                >
                    {time}
                </span>
            </div>
            <span className="text-xs font-light text-white md:text-sm lg:text-base">
                {text}
            </span>
        </div>
    );
};

const useTimer = (unit, countdownFrom) => {
    const [ref, animate] = useAnimate();
    const intervalRef = useRef(null);
    const timeRef = useRef(0);
    const [time, setTime] = useState(0);

    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    useEffect(() => {
        intervalRef.current = setInterval(handleCountdown, 1000);
        return () => clearInterval(intervalRef.current || undefined);
    }, [countdownFrom]);

    const handleCountdown = async () => {
        const now = new Date().getTime();
        const distance = countdownFrom - now;
        let newTime = 0;

        if (distance <= 0) {
            clearInterval(intervalRef.current); // Stop the countdown when it reaches zero
            return;
        }

        if (unit === "Day") {
            newTime = Math.floor(distance / DAY);
        } else if (unit === "Hour") {
            newTime = Math.floor((distance % DAY) / HOUR);
        } else if (unit === "Minute") {
            newTime = Math.floor((distance % HOUR) / MINUTE);
        } else {
            newTime = Math.floor((distance % MINUTE) / SECOND);
        }

        if (newTime !== timeRef.current) {
            // Exit animation
            if (ref.current) {
                await animate(
                    ref.current,
                    { y: ["0%", "-50%"], opacity: [1, 0] },
                    { duration: 0.35 }
                );
            }

            timeRef.current = newTime;
            setTime(newTime);

            // Enter animation
            if (ref.current) {
                await animate(
                    ref.current,
                    { y: ["50%", "0%"], opacity: [0, 1] },
                    { duration: 0.35 }
                );
            }
        }
    };

    return { ref, time };
};

export default Match;
