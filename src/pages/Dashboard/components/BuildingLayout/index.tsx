import { useBuilding } from "../../../../contexts/building";
import Info from "./Info";
import Menu from "./Menu";

export default function Building() {
    const { building } = useBuilding();

    return (
        <div className="z-10 h-[100vh] ml-[5rem] w-[25rem] absolute flex flex-col pt-4 pb-4 justify-start">
            <Info building={building} />
            <Menu building={building} />
        </div>
    )
}
