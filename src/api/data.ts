import { IPeople, IPlanets, IStarships } from "./db";

const rootLink = "https://swapi.dev/api/";

export function getId(arr:[any], obj: {}, pagenumber: number): number {
    const index = (pagenumber - 1) * 10 + arr.indexOf(obj) + 1;
    return index;
}

export function printArray(arr: string[], separator: string): string {
    let str: string = '';
    arr.forEach((el, index) => {
        if (index != arr.length - 1) str += el + separator;
        else str += el;
    })
    return str;
}

export function printValue(obj: {}, key: string, separator: string): string {
    if (Array.isArray(obj[key as keyof typeof obj])) {
        return printArray(obj[key as keyof typeof obj], separator);
    }
    else
        return obj[key as keyof typeof obj];
}

export async function getEntity(detail: string, id: string): Promise<any> {
    const link = rootLink + detail + "/" + id + "/";
    let data: any;
    try {
        const response = await fetch(link);
        data = await response.json();
    } catch (err) {
        console.log('Error loading details');
        return {};
    } 
    return data;
}

export async function getPeople(pagenumber: number): Promise<IPeople> {
    const link = rootLink + "people/?page=" + pagenumber.toString();
    let data: any;
    try {
        const response = await fetch(link);
        data = await response.json();
    } catch (err) {
        console.log('Error loading People');
        return {count:0,next:'',prev:'',results:[]};
    } 
    return data;
}

export async function getPlanets(pagenumber: number): Promise<IPlanets> {
    const link = rootLink + "planets/?page=" + pagenumber.toString();
    let data: any;
    try {
        const response = await fetch(link);
        data = await response.json();
    } catch (err) {
        console.log('Error loading Planets');
        return {count:0,next:'',prev:'',results:[]};
    } 
    return data;
}

export async function getStarships(pagenumber: number): Promise<IStarships> {
    const link = rootLink + "starships/?page=" + pagenumber.toString();
    let data: any;
    try {
        const response = await fetch(link);
        data = await response.json();
    } catch (err) {
        console.log('Error loading Starships');
        return {count:0,next:'',prev:'',results:[]};
    } 
    return data;
}