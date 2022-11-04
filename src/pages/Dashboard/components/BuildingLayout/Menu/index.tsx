import { Building } from "../../../../../interfaces/building.interface";
import Interactive from "./Interactive";

export default function Menu({ building }: { building: Building }) {
    return (
        <div className="w-auto h-[70%] bg-[#191C22] rounded-xl text-white">
            <div className="px-4 w-full h-[10%] flex items-center justify-start bg-black rounded-t-lg">
                <p className="text-sm font-medium ">{building.name}</p>
            </div>
            <div className="w-full h-[90%] flex flex-col items-center justify-center">
                <Interactive />
            </div>

        </div>
    )
}
