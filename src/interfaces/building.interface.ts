export enum BuildingState {
    ACTIVE = 1,
    INACTIVE = 2,
    PAUSED = 3
};

export interface Building {
    name: String,
    state: BuildingState,
    address: String,
    floors: Floor[],
    lat: Number,
    long: Number
}

export interface BuildingContextData {
    building: Building,
    active: Boolean,
    loading: Boolean,
    getBuilding(id: number): Promise<void>,
    setBuilding(building: Building): void,
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