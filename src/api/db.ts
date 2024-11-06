export interface IPerson {
    birth_year: string,
    eye_color: string,
    films: string[],
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    created: string,
    edited: string,
    species: string[],
    starships: string[],
    url: string,
    vehicles: string[]
}

export interface IPeople {
    count: number,
    next: string, 
    prev: string, 
    results: IPerson[]
}

export interface IPlanet {
    climate: string,
    created: string,
    diameter: string,
    edited: string,
    films: string[],
    gravity: string,
    name: string,
    orbital_period: string,
    population: string,
    residents: string[],
    rotation_period: string,
    surface_water: string,
    terrain: string,
    url: string
}

export interface IPlanets {
    count: number,
    next: string, 
    prev: string, 
    results: IPlanet[]
}

export interface IStarship {
    MGLT: string,
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    hyperdrive_rating: string,
    length: string,
    manufacturer: string,
    max_atmosphering_speed: string,
    model: string,
    name: string,
    passengers: string,
    films: string[],
    pilots: string[],
    starship_class: string,
    url: string
}

export interface IStarships {
    count: number,
    next: string, 
    prev: string, 
    results: IStarship[]
}