import { User } from "../../../interfaces/user.interface";

import { motion } from "framer-motion";
import {
    BoxArrowRight,
    Search as SearchIcon,
    PlusCircle
} from "react-bootstrap-icons";
import { useState } from "react";
import { Search } from "./Search";

interface NavbarProps {
    user: User | null;
    handleSingOut: () => void;
}


export default function Navbar({ user, handleSingOut }: NavbarProps) {
    const [searchOpen, setSearchOpen] = useState<Boolean>(false);
    const [panelOpen, setPanelOpen] = useState<Boolean>(false);

    return (
        <div
            className="w-[8vh] bg-[#08070C] flex flex-col justify-between items-center pt-4 pb-4"
        >
            <div>
                <img
                    src={user?.avatar}
                    alt="logo"
                    className="w-[35px]  mr-auto ml-auto h-[35px] rounded-1"
                />

                <div className="text-center mt-10">
                    <button className=" p-4 transition-all ease-in-out rounded-2xl h-[60px] w-[60px] hover:rounded-lg" onClick={() => setSearchOpen(!searchOpen)}>
                        <SearchIcon

                            size={25}
                            color="white"
                        />
                    </button>
                    {searchOpen && (
                        <>
                            <Search />
                            <div className='bg-gray-800 opacity-80 top-0 left-0 h-[100vh] w-[100vw] absolute z-20' onClick={() => setSearchOpen(false)} />
                        </>
                    )}


                    <button className="mt-4 transition-all ease-in-out p-4 rounded-2xl h-[60px] w-[60px] hover:rounded-lg">
                        <PlusCircle
                            onClick={() => setPanelOpen(!panelOpen)}
                            size={25}
                            color="white"
                        />
                    </button>
                </div>
            </div>

            <button onClick={handleSingOut}>
                <BoxArrowRight size={30} color="#fff" />
            </button>
        </div>
    )
}