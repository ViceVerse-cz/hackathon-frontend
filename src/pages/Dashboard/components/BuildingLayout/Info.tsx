import { Building } from "../../../../interfaces/building.interface";


export default function Info({ building }: { building: Building }) {
    return (
        <div className="w-auto h-[25%] bg-black rounded mb-5 text-white ">
            {building.name}
        </div>
    )
}
