import { useEffect, useState } from "react"
import { getId, getStarships, printValue } from "../api/data"
import { IStarships, IStarship } from "../api/db";
import Table from "react-bootstrap/Table";
import PaginationElement from "../components/PaginationElement";
import { Link } from "react-router-dom";

export default function StarshipsPage() {
    const [pageNumber, setPageNumber] = useState(1);
    const [starships, setStarships] = useState<IStarships>({count:0,next:'',prev:'',results:[]});
    const [keys, setKeys] = useState<string[]>([]);
    
    useEffect(() => {
        getStarships(pageNumber).then((data) => setStarships(data));
        if (starships.results[0] != null) {
            setKeys(Object.keys(starships.results[0]));
        }
    }, [starships.count, pageNumber]);

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
                        starships.results.map((starship: IStarship) => {
                            return (<tr className="relative">{
                                keys.map((key) => {
                                    return <td>{printValue(starship, key, '\n')}</td>
                                })
                                }
                                <td className="p-0">
                                    <Link 
                                        to={`/starwars/starships/${getId(starships.results as [any], starship, pageNumber)}`}
                                        className="absolute top-0 left-0 w-full h-full bg-transparent" 
                                        state={starship}
                                    />
                                </td>
                            </tr>);
                        })
                    :<tr></tr>}
                </tbody>
            </Table>
            <PaginationElement 
                current={pageNumber} 
                totalItems={starships.count} 
                onChangePage={setPageNumber}
            />
        </div>
    )
}