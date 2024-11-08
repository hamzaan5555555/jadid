import React from 'react';

function Navbar() {
    const logo = "./logo.png";
    return (
        <div className="flex flex-col items-center -mt-6 hover:bg-white ">
            {/* Logo */}
            <img src={logo} width={160} alt="Logo" />

            {/* Menu */}
            <nav className="mt-3 ">
                <ul className="flex space-x-20 text-xl font-medium ">
                    <li className="font-bold cursor-pointer ">New Product</li>
                    <li className="font-bold cursor-pointer ">Market</li>
                    <li className="font-bold cursor-pointer ">Shop</li>
                    <li className="font-bold cursor-pointer ">About</li>
                    <li className="font-bold cursor-pointer ">Contact</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
