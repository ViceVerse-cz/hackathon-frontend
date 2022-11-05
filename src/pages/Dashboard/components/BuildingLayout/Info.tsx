import { BData, } from "../../../../interfaces/building.interface";
import "../../../../assets/gradient.css";
import { Pen } from "react-bootstrap-icons";
import { useBuilding } from "../../../../contexts/building";
import Loading from "../../../../components/Loading";
import { motion } from "framer-motion";


export default function Info({ building }: { building: BData }) {
    const { loading } = useBuilding();
    return (
        <motion.div
            className="flex flex-col w-auto h-[30%] bg-black rounded-xl mb-5 p-4 text-white gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-row justify-start items-start">
                <div className="mr-3 w-23 h-23">
                    {!loading ?
                        <img src={`https://avatars.dicebear.com/api/identicon/${building.building.name}.svg`} alt="logo" className="rounded-lg" />
                        :
                        <Loading width="100%" height="100%" />
                    }
                </div>
                <div className="flex flex-col">
                    {!loading ?
                        <>
                            <h2 className="font-black text-2xl">{building.building.name}</h2>
                            <h3 className="text-md text-gray-100">{building.building.address}</h3>
                        </>
                        :
                        <>
                            <div className="mt-2" />
                            <Loading width="8rem" height="1.7rem" />
                            <div className="mt-2" />
                            <Loading width="11rem" height="1rem" />
                        </>
                    }
                    <div className="text-sm flex flex-row items-center mt-2">
                        {!loading ?
                            building.building.state == 1 ?
                                <div className="flex flex-row items-center">
                                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                                    <p className="text-sm">Otevřeno</p>
                                </div>
                                : building.building.state == 2 ?
                                    <div className="flex flex-row items-center">
                                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                                        <p className="text-sm">Zavřeno</p>
                                    </div>
                                    : building.building.state == 3 ?
                                        <div className="flex flex-row items-center">
                                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                                            <p className="text-sm">Neaktivní</p>
                                        </div>
                                        : <></>

                            :
                            <>
                                <div className="animate-pulse bg-gray-400 w-3 h-3 rounded-full mr-2" />
                                <Loading width="4rem" height="1rem" />
                            </>
                        }
                    </div>
                </div>
                <div className="flex justify-center p-2 bg-[#7068E0] rounded-md ml-auto cursor-pointer transition duration-300 ease-in-out hover:bg-[#5A4DB8]">
                    <Pen size={18} color="#fff" />
                </div>

            </div>
            <div className="flex flex-row items-center h-30 mt-4">
                <div className="flex flex-col items-left mr-8">
                    <h3 className="text-sm font-bold">POČET BOT:</h3>
                    {!loading ?
                        <h4 className="text-sm text-gray-300">{building.productCount}</h4>
                        :
                        <Loading width="rnd" height="1rem" />
                    }
                </div>
                <div className="flex flex-col items-left mr-8">
                    <h3 className="text-sm font-bold">POČET PODLAŽÍ:</h3>
                    {!loading ?
                        <h4 className="text-sm text-gray-300">{building.building.floors.length}</h4>
                        :
                        <Loading width="rnd" height="1rem" />
                    }
                </div>
                <div className="flex flex-col items-left mr-8">
                    <h3 className="text-sm font-bold">ID SKLADU:</h3>
                    {!loading ?
                        <h4 className="text-sm text-gray-300 overflow-clip w-20">{building.building._id}</h4>
                        :
                        <Loading width="rnd" height="1rem" />
                    }
                </div>
            </div>

        </motion.div>
    )
}
