import { Building } from "../../../../interfaces/building.interface";
import "../../../../assets/gradient.css";
import { Pen } from "react-bootstrap-icons";
import { useBuilding } from "../../../../contexts/building";
import Loading from "../../../../components/Loading";
import { motion } from "framer-motion";


export default function Info({ building }: { building: Building }) {
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
                        <img src={'https://via.placeholder.com/150'} alt="logo" className="rounded-lg" />
                        :
                        <Loading width="100%" height="100%" />
                    }
                </div>
                <div className="flex flex-col">
                    {!loading ?
                        <>
                            <h2 className="font-black text-2xl">{building.name}</h2>
                            <h3 className="text-md text-gray-100">{building.address}</h3>
                        </>
                        :
                        <>
                            <div className="mt-1" />
                            <Loading width="6rem" height="1.6rem" />
                            <div className="mt-2" />
                            <Loading width="3.5rem" height="1rem" />
                        </>
                    }

                    <div className="text-sm flex flex-row items-center mt-4">
                        {!loading ?
                            building.state == 1 ?
                                <div className="flex flex-row items-center">
                                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                                    <p className="text-sm">Otevřeno</p>
                                </div>
                                : building.state == 2 ?
                                    <div className="flex flex-row items-center">
                                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
                                        <p className="text-sm">Zavřeno</p>
                                    </div>
                                    : building.state == 3 ?
                                        <div className="flex flex-row items-center">
                                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                                            <p className="text-sm">Neaktivní</p>
                                        </div>
                                        : <></>

                            :
                            <>
                                <div className="animate-pulse bg-gray-400 w-3 h-3 rounded-full mr-2" />
                                <Loading width="3rem" height="1rem" />
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
                        <h4 className="text-sm text-gray-300">1331414</h4>
                        :
                        <Loading width="rnd" height="1rem" />
                    }
                </div>
                <div className="flex flex-col items-left mr-8">
                    <h3 className="text-sm font-bold">POČET SKLADU:</h3>
                    {!loading ?
                        <h4 className="text-sm text-gray-300">1331414</h4>
                        :
                        <Loading width="rnd" height="1rem" />
                    }
                </div>
                <div className="flex flex-col items-left mr-8">
                    <h3 className="text-sm font-bold">POČET LIDI:</h3>
                    {!loading ?
                        <h4 className="text-sm text-gray-300">1331414</h4>
                        :
                        <Loading width="rnd" height="1rem" />
                    }
                </div>
            </div>

        </motion.div>
    )
}
