import Interactive from "./Interactive";

export default function Overview() {
    return (
        <>
            <div className="flex flex-row justify-start items-start h-1/2">
                <div className="flex-1 flex-col justify-start items-start h-1/2">
                    <div className="w-full h-4/5 bg-black rounded-xl p-4 mb-5 flex justify-center flex-col">
                        <h1 className="text-2xl font-black">5.5K</h1>
                        <h3 className="text-md font-medium">Produktů</h3>
                    </div>
                    <div className="h-full bg-black rounded-xl p-4 flex justify-center flex-col">
                        <h1 className="text-2xl font-black">5.5K</h1>
                        <h3 className="text-md font-medium">Nedostupných</h3>
                    </div>
                </div>
                <div className="flex-2 flex-col justify-center items-center w-[45%] h-full ml-5">
                    <div className="p-2 h-full bg-black rounded-xl">

                        <Interactive />
                    </div>
                </div>

            </div>
            <div className="flex flex-col justify-start items-start mt-5">
                <h1 className="text-2xl font-black">Aktivity</h1>
            </div>
        </>
    )
}