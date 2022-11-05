import { useBuilding } from "../../../../contexts/building";
import { Building } from "react-bootstrap-icons";
import { motion } from 'framer-motion';
import { BuildingState } from "../../../../interfaces/building.interface";

interface MapPointProps {
    id: number;
    state: BuildingState
}

export default function MapPoint({ id, state }: MapPointProps) {
    const { getBuilding } = useBuilding();

    return (
        <motion.div
            onClick={() => getBuilding(id)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-transparent w-12 h-12 rounded-full border-3 border-hidden flex items-center justify-center cursor-pointer transform transition hover:(scale-110 opacity-90)">
                {state == BuildingState.BUSY && <><div className="absolute bg-yellow-500 w-10 h-10 rounded-full " /><div className="absolute w-10 h-10 rounded-full bg-yellow-500 animate-ping" /></>}
                {state == BuildingState.OPEN && <div className="absolute bg-green-500 w-10 h-10 rounded-full " />}
                {state == BuildingState.CLOSED && <div className="absolute bg-gray-500 w-10 h-10 rounded-full " />}
                <Building size={20} color="#fff" className="z-10" />
            </div>
        </motion.div>
    );
}
