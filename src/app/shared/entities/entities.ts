export type Heroe = Readonly<{
    id: number;
    name: string;
    heroe_type: string;
    condition: string;
    image_url: string;
    cities_id: number;
}>;

export type Vehicle = Readonly<{
    id: number;
    name: string;
    vehicle_type: string;
    heroes_id: number;
}>;