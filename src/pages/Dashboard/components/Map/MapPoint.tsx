import { useBuilding } from "../../../../contexts/building";
import { Building } from "react-bootstrap-icons";
import { motion } from 'framer-motion';

interface MapPointProps {
    id: number;
}

export default function MapPoint({ id }: MapPointProps) {
    const { getBuilding } = useBuilding();

    return (
        <motion.div 
            onClick={() => getBuilding(id)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-transparent w-12 h-12 rounded-full border-3 border-hidden flex items-center justify-center">
                <div className="absolute w-10 h-10 rounded-full bg-purple-500 animate-ping"></div>
                <div className="absolute w-10 h-10 rounded-full bg-purple-500"></div>
                <Building size={20} color="#fff" className="z-10" />
            </div>
        </motion.div>
    );
}
