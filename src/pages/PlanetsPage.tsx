import { useEffect, useState } from "react"
import { getId, getPlanets, printValue } from "../api/data"
import { IPlanets, IPlanet } from "../api/db";
import Table from "react-bootstrap/Table";
import PaginationElement from "../components/PaginationElement";
import { Link } from "react-router-dom";

export default function PlanetsPage() {
    const [pageNumber, setPageNumber] = useState(1);
    const [planets, setPlanets] = useState<IPlanets>({count:0,next:'',prev:'',results:[]});
    const [keys, setKeys] = useState<string[]>([]);
    
    useEffect(() => {
        getPlanets(pageNumber).then((data) => setPlanets(data));
        if (planets.results[0] != null) {
            setKeys(Object.keys(planets.results[0]));
        }
    }, [planets.count, pageNumber]);

    return (
        <div className="flex flex-col">
            <Table striped responsive>
                <thead>
                    <tr>
                        {(keys[0] != null) ? 
                            keys.map((el: string) => {
                                return <th>{el}</th>
                            }) 
                        : <th></th>}
                    </tr>
                </thead>
                <tbody>
                    {(keys != null) ? 
                        planets.results.map((planet: IPlanet) => {
                            return (<tr className="relative">{
                                keys.map((key) => {
                                    return <td>{printValue(planet, key, '\n')}</td>
                                })
                                }
                                <td className="p-0">
                                    <Link 
                                        to={`/starwars/planets/${getId(planets.results as [any], planet, pageNumber)}`}
                                        className="absolute top-0 left-0 w-full h-full bg-transparent" 
                                        state={planet}
                                    />
                                </td>
                            </tr>);
                        })
                    :<tr></tr>}
                </tbody>
            </Table>
            <PaginationElement 
                current={pageNumber} 
                totalItems={planets.count} 
                onChangePage={setPageNumber}
            />
        </div>
    )
}