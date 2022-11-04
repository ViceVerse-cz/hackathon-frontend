import { Building } from "../../../../../interfaces/building.interface";
import Interactive from "./Interactive";

export default function Menu({ building }: { building: Building }) {
    return (
        <div className="w-auto h-[70%] bg-black rounded text-white">
            <Interactive/>
        </div>
    )
}
