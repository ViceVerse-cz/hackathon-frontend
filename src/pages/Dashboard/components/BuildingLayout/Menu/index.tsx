import { Building } from "../../../../../interfaces/building.interface";
import "../../../../../assets/gradient.css";

import Overview from "./Overview";

export default function Menu({ building }: { building: Building }) {
    return (
        <div className="w-auto h-[70%] bg-[#191C22] rounded-xl text-white">
            <div className="px-10 w-full h-[10%] flex items-center justify-between bg-black rounded-t-xl">
                <p className="text-sm font-medium ">Přehled</p>
                <p className="text-sm font-medium ">Přehled</p>
                <p className="text-sm font-medium ">Přehled</p>
                <p className="text-sm font-medium ">Přehled</p>
            </div>
            <div className="w-full h-[90%] p-5 ">
                <Overview />
            </div>

        </div>
    )
}
