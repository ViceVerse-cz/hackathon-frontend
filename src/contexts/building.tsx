import { createContext, useContext, useState } from "react";
import { BData, BuildingContextData, Floor, FloorBody } from "../interfaces/building.interface";
import { api } from "../services/api";


const BuildingContext = createContext<BuildingContextData>({} as BuildingContextData);

interface Props {
    children: React.ReactNode;
}


export const BuildingProvider: React.FC<Props> = ({ children }) => {
    const [buildingData, setBuildingData] = useState<BData>({} as BData);
    const [loading, setLoading] = useState(false);
    const [floorLoading, setFloorLoading] = useState(false);
    const [active, setActive] = useState(false);
    const [floor, setFloor] = useState<FloorBody>({} as FloorBody);


    async function getBuilding(id: String) {
        setActive(true);
        setLoading(true);
        console.log(active);
        const response = await api.get(`/api/building/fetch/${id}`);
        const data = response.data.data;

        setBuildingData(data);
        setLoading(false);
    }

    async function getFloor(id: String) {
        setFloorLoading(true);

        const response = await api.get(`/api/floor/fetch/${id}`);
        const data = response.data.data;

        setFloor(data);
        setFloorLoading(false);
    }

    function clearBuilding() {
        setActive(false);
    }



    return (
        <BuildingContext.Provider value={{ buildingData, floor, loading, floorLoading, active, getFloor, getBuilding, setBuildingData, clearBuilding }}>
            {children}
        </BuildingContext.Provider>
    );
}


export const useBuilding = () => {
    return useContext(BuildingContext);
}