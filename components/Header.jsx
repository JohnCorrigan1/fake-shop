import { useState } from 'react';
import Image from "next/image";
import CartModal from "./CartModal"

const Header = () => {

    const [open, setOpen] = useState(false)

    const openCart = () => {
        setOpen(true)
    }

    return(
        <div className="bg-slate-600 text-violet-100 shadow-md shadow-black">
            <CartModal onClose={() => setOpen(false)} open={open} link="/shoe1.png" />
            <nav className="flex justify-between mr-10 ml-10 p-5 items-center ">
                <a href="/"><h1 className="font-bold text-2xl hover:-translate-y-1 duration-300 cursor-pointer">Fake Store</h1></a>
                <ul className="flex gap-10">
                    <a href="/shop"><li className="text-lg font-semibold hover:-translate-y-1 cursor-pointer hover:underline duration-300">Shop</li></a>
                    <li onClick={openCart} className="text-lg font-semibold hover:-translate-y-1 cursor-pointer hover:underline duration-300">Cart</li>
                    <a href="/Contact"><li className="text-lg font-semibold hover:-translate-y-1 cursor-pointer hover:underline duration-300">Contact</li></a>
                </ul>
            </nav>
        </div>
    )
}

export default Header;