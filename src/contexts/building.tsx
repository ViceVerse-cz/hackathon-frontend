import { createContext, useContext, useState } from "react";
import { BData, Building, BuildingContextData } from "../interfaces/building.interface";
import { api } from "../services/api";


const BuildingContext = createContext<BuildingContextData>({} as BuildingContextData);

interface Props {
    children: React.ReactNode;
}


export const BuildingProvider: React.FC<Props> = ({ children }) => {
    const [buildingData, setBuildingData] = useState<BData>({} as BData);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);


    async function getBuilding(id: number) {
        setActive(true);
        setLoading(true);
        console.log(active);
        const response = await api.get(`/api/building/fetch/${id}`);
        const data = response.data.data;

        setBuildingData(data);
        setLoading(false);
    }

    function clearBuilding() {
        setActive(false);
    }


    return (
        <BuildingContext.Provider value={{ buildingData, loading, active, getBuilding, setBuildingData, clearBuilding }}>
            {children}
        </BuildingContext.Provider>
    );
}


export const useBuilding = () => {
    return useContext(BuildingContext);
}