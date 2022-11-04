
import { BoxArrowRight } from "react-bootstrap-icons";
import { User } from "../../../interfaces/user.interface";

interface NavbarProps {
    user: User | null;
    handleSingOut: () => void;
}


export default function Navbar({ user, handleSingOut }: NavbarProps) {

    return (
        <div className="w-[8vh] bg-black flex flex-col justify-between items-center pt-4 pb-4">
            <img src="https://i.imgur.com/4Q1Qq7y.png" alt="logo" className="w-10 h-10 rounded-1" />
            <button onClick={handleSingOut}>
                <BoxArrowRight size={30} color="#fff" />
            </button>

        </div>
    )
}