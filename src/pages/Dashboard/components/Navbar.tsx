import { User } from "../../../interfaces/user.interface";

import {
    BoxArrowRight,
    Search as SearchIcon,
    XLg
} from "react-bootstrap-icons";
import { useState } from "react";
import { Search } from "./Search";

interface NavbarProps {
    user: User | null;
    handleSingOut: () => void;
}


export default function Navbar({ user, handleSingOut }: NavbarProps) {
    const [searchOpen, setSearchOpen] = useState<Boolean>(false);

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
                            <div className='bg-gray-800 opacity-80 top-0 left-0 h-[100vh] w-[100vw] absolute z-100' />
                            <XLg size={25} color="white" className="z-10000 absolute top-0 right-0 m-10 cursor-pointer" onClick={() => setSearchOpen(!searchOpen)} />

                            <Search />
                        </>
                    )}


                </div>
            </div>

            <button onClick={handleSingOut}>
                <BoxArrowRight size={30} color="#fff" />
            </button>
        </div>
    )
}