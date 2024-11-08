"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
    { id: 1, name: 'Amlou Pistache', href: '#', imageSrc: './pro.png', price: '130DH', color: '190g' },
    { id: 2, name: 'Amlou Pistache', href: '#', imageSrc: './product.png', price: '24DH', color: '30g' },
    { id: 3, name: 'Amlou Pistache', href: '#', imageSrc: './pro.png', price: '70DH', color: '90g' },
    { id: 4, name:'Amlou Pistache', href: '#', imageSrc: './pro.png', price: '50DH', color: '60g' },
    { id: 1, name: 'Amlou Pistache', href: '#', imageSrc: './product.png', price: '130DH', color: '190g' },
    { id: 2, name: 'Amlou Pistache', href: '#', imageSrc: './product.png', price: '24DH', color: '30g' },
    { id: 3, name: 'Amlou Pistache', href: '#', imageSrc: './pro.png', price: '70DH', color: '90g' },
    { id: 4, name:'Amlou Pistache', href: '#', imageSrc: './pro.png', price: '50DH', color: '60g' },

];

function Vendu() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % products.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + products.length) % products.length);
    };

    const currentItems = products.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className="mt-12 w-full h-auto bg-white pb-16"> {/* Ajustement de la hauteur et ajout de pb-16 */}

            <div className="relative flex items-center justify-between mx-auto max-w-7xl px-8">
                <button onClick={handlePrev}
                        className="text-xl font-bold px-3 py-1 bg-gray-300 rounded-full">&lt;</button>

                <AnimatePresence>
                    <motion.div
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-4"  // Ajout de mt-4
                        initial={{x: 300}}
                        animate={{x: 0}}
                        exit={{x: -300}}
                        transition={{duration: 0.5}}
                    >
                        {currentItems.map((product) => (
                            <motion.div key={product.id} className="p-4 bg-gray-100 rounded-lg" layout>
                                <img src={product.imageSrc} alt={product.name}
                                     className="h-40 w-full object-cover rounded-md"/>
                                <h3 className="mt-4 text-lg font-semibold text-gray-700">{product.name}</h3>
                                <p className="text-sm text-gray-500">{product.color}</p>
                                <p className="mt-1 text-sm  text-black font-bold">{product.price}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <button onClick={handleNext}
                        className="text-xl font-bold px-3 py-1 bg-gray-300 rounded-full">&gt;</button>
            </div>
            <div className="text-center mt-5"> {/* Centre et abaisse le titre */}
                <button
                    className="px-6 py-2 font-medium bg-lime-600 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                    Voir tous les produits
                </button>
            </div>
        </div>
    );
}

export default Vendu;
