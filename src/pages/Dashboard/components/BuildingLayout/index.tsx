import { useBuilding } from "../../../../contexts/building";
import Info from "./Info";
import Menu from "./Menu";

export default function Building() {
    const { buildingData } = useBuilding();

    return (
        <div className="z-10 h-[100vh] ml-[5rem] w-[25rem] absolute flex flex-col pt-4 pb-4 justify-start">
            <Info building={buildingData.building} />
            <Menu building={buildingData.building} />
        </div>
    )
}
