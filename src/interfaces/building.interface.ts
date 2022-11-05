export enum BuildingState {
    OPEN = 1,
    BUSY = 2,
    CLOSED = 3
};

export interface Building {
    name: String,
    state: BuildingState,
    address: String,
    floors: Floor[],
    lat: Number,
    long: Number
}

export interface BData {
    building: Building
    productCount: number,
    productMissing: number,
}

export interface BuildingContextData {
    buildingData: BData,
    active: Boolean,
    loading: Boolean,
    getBuilding(id: number): Promise<void>,
    setBuildingData(building: BData): void,
    clearBuilding(): void
}


export enum FloorType {
    WAREHOUSE = "Warehouse",
    SHOP = "Shop"
};

export interface Floor {
    type: FloorType,
    shop: String,
    warehouse: String
};