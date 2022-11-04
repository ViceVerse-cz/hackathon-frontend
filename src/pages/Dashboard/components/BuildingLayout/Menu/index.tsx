import { Building } from "../../../../../interfaces/building.interface";
import Interactive from "./Interactive";

export default function Menu({ building }: { building: Building }) {
    return (
        <div className="w-auto h-[70%] bg-[#191C22] rounded-xl text-white p-4">
            <Interactive/>
        </div>
    )
}
