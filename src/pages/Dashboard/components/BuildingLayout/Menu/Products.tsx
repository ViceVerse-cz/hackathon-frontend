import Loading from "../../../../../components/Loading";
import { useBuilding } from "../../../../../contexts/building";
import { FloorType } from "../../../../../interfaces/building.interface";
import Product from "./Product";

export default function Products() {

    const { floor, floorLoading } = useBuilding();

    const products = () => {

        if (floor.floor.type === FloorType.WAREHOUSE) {
            if (typeof floor.floor.warehouse.products != null && floor.floor.warehouse.products.length != 0 && floor.floor.warehouse.products[0].product != null) return <Product products={floor.floor.warehouse.products} />
        } else if (floor.floor.type === FloorType.SHOP) {
            if (typeof floor.floor.shop.products != null && floor.floor.shop.products.length != 0 && floor.floor.shop.products[0].product != null) return <Product products={floor.floor.shop.products} />
        }
    }
    return (
        <div className="flex flex-col justify-start items-start overflow-scroll h-[25rem]">
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
                        <Loading width="5rem" height="5rem" />
                        <div className="ml-2 flex flex-col">
                            <Loading width="5rem" height="1.2rem" />
                            <div className="mt-2" />
                            <Loading width="8rem" height="1.2rem" />
                        </div>
                        <Loading width="5rem" height="5rem" />
                        <div className="ml-2 flex flex-col">
                            <Loading width="5rem" height="1.2rem" />
                            <div className="mt-2" />
                            <Loading width="8rem" height="1.2rem" />
                        </div>
                        <Loading width="5rem" height="5rem" />
                        <div className="ml-2 flex flex-col">
                            <Loading width="5rem" height="1.2rem" />
                            <div className="mt-2" />
                            <Loading width="8rem" height="1.2rem" />
                        </div>
                        <Loading width="5rem" height="5rem" />
                        <div className="ml-2 flex flex-col">
                            <Loading width="5rem" height="1.2rem" />
                            <div className="mt-2" />
                            <Loading width="8rem" height="1.2rem" />
                        </div>
                    </div>
            }
        </div>

    )
}
