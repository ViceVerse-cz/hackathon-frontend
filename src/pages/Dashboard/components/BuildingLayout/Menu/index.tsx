import { Building } from "../../../../../interfaces/building.interface";
import "../../../../../assets/gradient.css";

import Overview from "./Overview";
import { useState } from "react";
import Products from "./Products";

export default function Menu({ building }: { building: Building }) {
    const [tab, setTab] = useState(1);
    return (
        <div className="w-auto h-[70%] bg-[#191C22] rounded-xl text-white">
            <div className="px-10 w-full h-[10%] flex items-center justify-between bg-black rounded-t-xl">
                <p className="text-sm font-medium cursor-pointer" onClick={() => setTab(1)}>Přehled</p>
                <p className="text-sm font-medium cursor-pointer" onClick={() => setTab(2)}>Produkty</p>
            </div>
            <div className="w-full h-[90%] p-5 ">
                {tab == 1 ? <Overview /> : tab == 2 ? <Products /> : <></>}
            </div>

        </div>
    )
}
