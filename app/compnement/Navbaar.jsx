import React from 'react';
import Navbar from "@/app/compnement/Navbar";

function Navbaar() {
    return (
        <>
            <div className="h-6 w-full bg-white flex text-sm font-semibold">
                <a className="ml-5 mt-0.5">Notre Histoire</a>
                <a className="ml-4 mt-0.5">Nos Fornisseures</a>
            </div>
            <Navbar/>
        </>
    );
}

export default Navbaar;