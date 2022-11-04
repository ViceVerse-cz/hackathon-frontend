import { createContext, useContext, useEffect, useState } from "react";
import { Building, BuildingContextData } from "../interfaces/building.interface";
import { api } from "../services/api";


const BuildingContext = createContext<BuildingContextData>({} as BuildingContextData);

interface Props {
    children: React.ReactNode;
}

export const BuildingProvider: React.FC<Props> = ({ children }) => {
    const [building, setBuilding] = useState<Building>({} as Building);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);


    async function getBuilding(id: number) {
        setActive(true);
        setLoading(true);
        console.log(active);
        const response = await api.get(`/api/building/fetch/${id}`);
        const data = response.data.data;

        setBuilding(data.building);
        setLoading(false);
    }
    function clearBuilding() {
        setActive(false);
    }


    return (
        <BuildingContext.Provider value={{ building, loading, active, getBuilding, setBuilding, clearBuilding }}>
            {children}
        </BuildingContext.Provider>
    );
}


export const useBuilding = () => {
    return useContext(BuildingContext);
}