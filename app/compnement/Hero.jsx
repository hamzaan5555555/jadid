"use client"
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
    const product = "./product.png";
    const pro = "./pro.png";
    const sac = "./sac.png";

    const [showFirstImage, setShowFirstImage] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstImage(prev => !prev);
        }, 3000); // Switch image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="flex h-screen mt-4">
                {/* Left Section */}
                <div className="w-2/3 mt-[80px] p-8">
                    <h2 className="text-2xl font-semibold mb-4 ">AMLOU MAROCAIN 100% PISTACH</h2>

                    {/* Description Points */}
                    {["Découvrez notre Amlou revisitée à la pistache, une pâte à tartiner saine et gourmande pour les petits et grands.",
                        "Notre Amlou regroupe tous les ingrédients d'une préparation gourmande et fortifiante servie au petit-déjeuner ou au goûter.",
                        "Cette pâte à tartiner sublimera aussi vos préparations culinaires tel que Mhalabia, la pastilla Jawhara, smoothies, brownies, financiers, et d’autres desserts créatifs, un pur régal.",
                        "Composition : Pistache 76%, amandes 24%, huile d’argan biologique et miel"].map((text, index) => (
                        <div key={index} className="flex items-start space-x-2 mb-4 max-w-lg">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="26" height="26" rx="13" fill="#559123"/>
                                <path
                                    d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                    stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                            </svg>
                            <span className="font-normal text-base text-gray-900 max-w-md">{text}</span>
                        </div>
                    ))}
                </div>

                {/* Right Section with Animated Images */}
                <div className="w-1/2 flex items-start justify-center mt-[30px] -ml-[200px]">
                    <AnimatePresence>
                        {showFirstImage ? (
                            <motion.img
                                key="product"
                                src={product}
                                className="max-w-full"
                                alt="Product"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.5}}
                            />
                        ) : (
                            <motion.img
                                key="pro"
                                src={pro}
                                className="max-w-full"
                                alt="Product Alt"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.5}}
                            />
                        )}
                    </AnimatePresence>

                </div>
                <button
                    className="px-6 py-2 font-medium bg-white border-black border-2 text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">

                    <img src={sac} width={30} className="ml-11"/>
                    <br/>
                    Acheter Maitenant
                </button>
            </div>
        </div>
    );
}

export default Hero;
