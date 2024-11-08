"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import Match from "@/app/compnement/Match";


function Heroo() {

    // Define animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.05 }
    };

    return (
        <div className="">
            <div className="flex flex-col lg:flex-row bg-white">
                {/* First Card with a delay of 2 seconds */}
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ duration: 0.4, delay: 2 }}
                >
                    <Card className="relative w-full lg:w-[300px] h-[450px] mb-6 lg:mb-0 ml-2 cursor-pointer">
                        <img src="./remov.jpg" className="rounded-2xl h-full w-full object-cover" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center mt-[320px] rounded-2xl">
                            <p className="text-white text-2xl font-semibold mb-4"></p>
                        </div>
                    </Card>
                </motion.div>

                <div className="flex flex-col lg:flex-row lg:ml-7">
                    {/* Other Cards without delay */}
                    {["./pp.jpg", "./yy.jpg", "./tt.jpg"].map((src, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="relative w-full lg:w-[300px] h-[450px] mb-6 lg:mb-0 cursor-pointer">
                                <div className="flex-grow">
                                    <img src={src} alt="player" className="w-full h-[200px] rounded-2xl object-cover" />
                                </div>
                                <div className="p-3 mt-3">
                                    <h1 className="text-center text-lg font-semibold">
                                        {index === 0 ? "Les Produit Les Plus Vendus" : index === 1 ? "Nouvel Arrivage" : "Les Produits Torrides"}
                                    </h1>
                                    <p className="text-sm mt-3 text-gray-600">
                                        {index === 0
                                            ? "L’Amlou TER’NATURE possède des qualités nutritives exceptionnelles. Riche en protéines, sels minéraux et vitamines, cette délicieuse pâte à tartiner est très énergétique et nourrissante."
                                            : index === 1
                                                ? "Une délicieuse pâte à tartiner 100% naturelle. Elle est très riche en fibres, en vitamines et en minéraux. A déguster avec une brioche, une biscotte ou à associer à d’autres recettes gourmandes."
                                                : "L’Amlou TER’NATURE possède des qualités nutritives exceptionnelles. Riche en protéines, sels minéraux et vitamines, cette délicieuse pâte à tartiner est très énergétique. Ingrédients : Pistache, Huile d’Argan & Miel."
                                        }
                                    </p>
                                </div>
                                <CardContent className="flex justify-between mt-6">
                                    <p className="text-sm text-gray-600">3h | news</p>
                                    <a href="/">
                                        <svg width="17" height="17" className="ml-2" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="... (SVG path here)" />
                                        </svg>
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Match/>
        </div>
    );
}

export default Heroo;
