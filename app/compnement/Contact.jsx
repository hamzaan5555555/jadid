"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok,  SiYoutube ,SiWhatsapp , SiInstagram } from "react-icons/si";
import {Example} from "@/app/compnement/TextCard";

const RevealBento = () => {
    return (
        <div className="min-h-screen bg-slate-50 px-4 py-12 text-zinc-50 mt-10">

            <br/>
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
            >
                <HeaderBlock />
                <SocialsBlock />
                <AboutBlock />

            </motion.div>
            <Footer />
        </div>
    );
};
export default RevealBento;
const Block = ({ className, ...rest }) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = () => (
    <></>
);

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-red-500 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiYoutube />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-green-600 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiWhatsapp />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-zinc-50 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-black"
            >
                <SiTiktok />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-black md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiInstagram/>
            </a>
        </Block>
    </>
);

const AboutBlock = () => (
    <Block className="col-span-12 text-3xl leading-snug">
        <Example/>






    </Block>
);



const EmailListBlock = () => (
    <></>
);

const Logo = () => {
    // Temp logo from https://logoipsum.com/
    return (
        <svg
            width="40"
            height="auto"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-12 fill-zinc-50"
        >
            <path
                d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                stopColor="#000000"
            ></path>
            <path
                d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                stopColor="#000000"
            ></path>
        </svg>
    );
};

const Footer = () => {
    return (
        <></>
    );
};