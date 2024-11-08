"use client";
import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
    useDragControls,
    useMotionValue,
    useAnimate,
    motion,
} from "framer-motion";

function About(props) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="h-[300px] w-full ">
                <h1 className="text-2xl mt-6 ml-3 font-bold">A Propos De Nous : </h1>
                <div className="text-center">
                    <img src="./logo.png" width={130} className="mx-auto mt-2" />
                </div>
                <br />
                <p className="ml-4 text-sm font-semibold text-gray-700">
                    Arganapistashe est une marque 100% marocaine spécialisée dans les produits du Terroir du Maroc.
                    Notre mission est de mettre en valeur les produits de notre terroir à travers leurs merveilleux
                    bienfaits sur la santé mais aussi le travail de nombreux artisans.
                    L'amour que l'on a pour notre terroir et nos traditions nous ont mené à développer une gamme de produits
                    100% d’origine biologique dont les processus de récolte, de fabrication et d'hygiène sanitaire sont
                    rigoureusement contrôlés et certifiés par l’ONSSA. Certains de nos produits sont aussi certifiés Bio et
                    Usda.
                    Tous nos produits sont issus exclusivement de coopératives agricoles et coopératives féminines
                    partenaires qui maîtrisent parfaitement la production et préparation depuis des générations.
                    Pour toute information, n'hésitez pas à nous contacter par téléphone au 06 64 81 06 26 ou par e-mail à
                    info@lesdouceursdumaroc.ma
                </p>
            </div>
            <button
                onClick={() => setOpen(true)}
                className="px-6 py-2 font-medium bg-lime-600 text-white ml-3 w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
                Voir Les Ingrédients
            </button>
            <DragCloseDrawer open={open} setOpen={setOpen}>
                <div className="mx-auto max-w-3xl space-y-4 text-neutral-400">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Fabriqué avec les meilleurs ingrédients
                    </h2>
                    <p className="text-xl ml-6 font-bold text-neutral-200">Provenant directement de fermes marocaines,
                        chaque ingrédient<br/> d'Argana
                        Pistache est méticuleusement choisie pour sa qualité et<br/> <span className="ml-[230px]">son authenticité.</span>
                    </p>
                    <div className="flex justify-center space-x-40">
                        <div className="text-center">
                            <img src="./argan.jpg" width={340} height={170}
                                 className="rounded-full border-4 border-yellow-400"/>
                            <p className="mt-2 text-neutral-200 uppercase font-serif">Huile d'argan</p><br/>
                            <p>L'huile d'argan marocain est d'une beauté rare, un véritable trésor naturel aux bienfaits incomparables.</p>
                        </div>
                        <div className="text-center">
                            <img src="./asl.jpg" width={340}
                                 className="rounded-full border-4 border-amber-800"/>
                            <p className="mt-2 text-neutral-200 uppercase font-serif">Miel Marocain</p><br/>
                            <p>Le miel marocain est un délice pur, un nectar doré aux saveurs exquises, riche en bienfaits pour la santé et la beauté.</p>

                        </div>
                        <div className="text-center">
                            <img src="./pistach.jpg" width={340} height={170}
                                 className="rounded-full border-4 border-lime-600"/>
                            <p className="mt-2 text-neutral-200 uppercase font-serif">Pistaches</p>
                            <br/>
                            <p>Nous utilisons les meilleures pistaches, soigneusement sélectionnées pour leur goût exceptionnel et leur qualité supérieure.</p>
                        </div>
                    </div>

                </div>
            </DragCloseDrawer>
        </>
    );
}

const DragCloseDrawer = ({open, setOpen, children}) => {
    const [scope, animate] = useAnimate();
    const [drawerRef, {height}] = useMeasure();

    const y = useMotionValue(0);
    const controls = useDragControls();

    const handleClose = async () => {
        animate(scope.current, {
            opacity: [1, 0],
        });

        const yStart = typeof y.get() === "number" ? y.get() : 0;

        await animate("#drawer", {
            y: [yStart, height],
        });

        setOpen(false);
    };

    return (
        <>
            {open && (
                <motion.div
                    ref={scope}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    onClick={handleClose}
                    className="fixed inset-0 z-50 bg-neutral-950/70"
                >
                    <motion.div
                        id="drawer"
                        ref={drawerRef}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
                        style={{ y }}
                        drag="y"
                        dragControls={controls}
                        onDragEnd={() => {
                            if (y.get() >= 100) {
                                handleClose();
                            }
                        }}
                        dragListener={false}
                        dragConstraints={{
                            top: 0,
                            bottom: 0,
                        }}
                        dragElastic={{
                            top: 0,
                            bottom: 0.5,
                        }}
                    >
                        <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
                            <button
                                onPointerDown={(e) => {
                                    controls.start(e);
                                }}
                                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
                            ></button>
                        </div>
                        <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}

export default About;
