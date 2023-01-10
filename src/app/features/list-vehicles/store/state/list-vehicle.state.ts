import { VehiclesState } from "../reducers/data/list-vehicles.reducers";

export type ListVeviclesState = Readonly <{
    vehicles: VehiclesState;
}>;