import { ArrowDownUp } from "react-bootstrap-icons";
import Loading from "../../../../../components/Loading";
import { useBuilding } from "../../../../../contexts/building";
import { FloorType } from "../../../../../interfaces/building.interface";
import Interactive from "./Interactive";
import Product from "./Product";

export default function Overview() {
    const { floor, floorLoading } = useBuilding();

    const products = () => {
        console.log(floor);

        if (floor.floor.type === FloorType.WAREHOUSE) {
            if (typeof floor.floor.warehouse.products != null && floor.floor.warehouse.products.length != 0 && floor.floor.warehouse.products[0].product != null) return <Product products={floor.floor.warehouse.products} />
        } else if (floor.floor.type === FloorType.SHOP) {
            if (typeof floor.floor.shop.products != null && floor.floor.shop.products.length != 0 && floor.floor.shop.products[0].product != null) return <Product products={floor.floor.shop.products} />
        }
    }


    return (
        <>
            <div className="flex flex-row justify-start items-start h-1/2">
                <div className="flex-1 flex-col justify-start items-start h-1/2">
                    <div className="w-full h-4/5 bg-black rounded-xl p-4 mb-5 flex justify-center flex-col">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col">
                                {!floorLoading ? <h1 className="text-2xl font-black">{floor.productCount}</h1> : <Loading width="6rem" height="1.3rem" />}
                                <h3 className="text-md font-medium">Produktů</h3>
                            </div>
                            <ArrowDownUp className="text-green-500" />

                        </div>
                    </div>
                    <div className="h-full bg-black rounded-xl p-4 flex justify-center flex-col">
                        {!floorLoading ? <h1 className="text-2xl font-black">{floor.productMissing}</h1> : <Loading width="5rem" height="1.3rem" />}
                        <h3 className="text-md font-medium">Nedostupných</h3>
                    </div>
                </div>
                <div className="flex-2 flex-col justify-center items-center w-[45%] h-full ml-5">
                    <div className="p-2 h-full bg-black rounded-xl">
                        <Interactive />
                    </div>
                </div>

            </div>
            <div className="flex flex-col justify-start items-start mt-5 overflow-hidden h-50 gra   ">
                <h1 className="text-2xl font-black ">Produkty</h1>
                {
                    !floorLoading && typeof floor !== 'undefined'
                        ? products()
                        : <div className="mt-2 flex flex-row">
                            <Loading width="5rem" height="5rem" />
                            <div className="ml-2 flex flex-col">
                                <Loading width="5rem" height="1.2rem" />
                                <div className="mt-2" />
                                <Loading width="8rem" height="1.2rem" />
                            </div>
                        </div>
                }
            </div>
        </>
    )
}
