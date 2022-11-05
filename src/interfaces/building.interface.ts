export enum BuildingState {
    OPEN = 1,
    BUSY = 2,
    CLOSED = 3
};

export interface Building {
    _id: String,
    name: String,
    state: BuildingState,
    address: String,
    floors: Floor[],
    lat: Number,
    long: Number
}

export interface BData {
    _id: String,
    building: Building
    productCount: number,
    productMissing: number,
}

export interface BuildingContextData {
    buildingData: BData,
    floor: FloorBody,
    active: Boolean,
    loading: Boolean,
    floorLoading: boolean;
    getBuilding(id: String): Promise<void>,
    getFloor(id: String): Promise<void>,
    setBuildingData(building: BData): void,
    clearBuilding(): void
}



export enum FloorType {
    WAREHOUSE = "Warehouse",
    SHOP = "Shop"
};

export interface Floor {
    _id: String,
    type: FloorType,
    shop: any,
    warehouse: any,
};

export interface FloorBody {
    floor: Floor,
    productCount: number,
    productMissing: number,
}

export interface Shop {
    name: String,
    products: Product[]
}


export interface Product {
    name: String,
    description: String,
    variants: Variant[]
}

export interface Variant {
    name: String,
    price: Number,
    count: Number
};
