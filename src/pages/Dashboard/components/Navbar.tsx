import { User } from "../../../interfaces/user.interface";
import { 
    BoxArrowRight, 
    Search, 
    PlusCircleFill 
} from "react-bootstrap-icons";

interface NavbarProps {
    user: User | null;
    handleSingOut: () => void;
}


export default function Navbar({ user, handleSingOut }: NavbarProps) {

    return (
        <div 
            className="w-[8vh] bg-[#08070C] flex flex-col justify-between items-center pt-4 pb-4"
        >
            <div>
                <img 
                    src={user?.avatar} 
                    alt="logo" 
                    className="w-[50px] w-fit mr-auto ml-auto h-[50px] rounded-1"
                />

                <div className="text-center mt-10">
                    <button className="bg-[#160F33] p-4 transition-all ease-in-out rounded-2xl h-[60px] w-[60px] hover:rounded-lg"> 
                        <Search size={28} color="white"/>
                    </button> 

                    <button className="bg-[#160F33] mt-4 transition-all ease-in-out p-4 rounded-2xl h-[60px] w-[60px] hover:rounded-lg">
                        <PlusCircleFill size={28} color="white"/>
                    </button>
                </div>
            </div>

            <button onClick={handleSingOut}>
                <BoxArrowRight size={30} color="#fff" />
            </button>
        </div>
    )
}