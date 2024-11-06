import { useEffect, useState } from "react"
import { getId, getPeople, printValue } from "../api/data"
import { IPeople, IPerson } from "../api/db";
import Table from "react-bootstrap/Table";
import PaginationElement from "../components/PaginationElement";
import { Link } from "react-router-dom";

export default function PeoplePage() {
    const [pageNumber, setPageNumber] = useState(1);
    const [people, setPeople] = useState<IPeople>({count:0,next:'',prev:'',results:[]});
    const [keys, setKeys] = useState<string[]>([]);
    
    useEffect(() => {
        getPeople(pageNumber).then((data) => setPeople(data));
        if (people.results[0] != null) {
            setKeys(Object.keys(people.results[0]));
        }
    }, [people.count, pageNumber]);

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
                        people.results.map((person: IPerson) => {
                            return (<tr className="relative">{
                                keys.map((key) => {
                                    return <td>{printValue(person, key, '\n')}</td>
                                })
                                }
                                <td className="p-0">
                                    <Link 
                                        to={`/starwars/people/${getId(people.results as [any], person, pageNumber)}`}
                                        className="absolute top-0 left-0 w-full h-full bg-transparent" 
                                        state={person}
                                    />
                                </td>
                            </tr>);
                        })
                    :<tr></tr>}
                </tbody>
            </Table>
            <PaginationElement 
                current={pageNumber} 
                totalItems={people.count} 
                onChangePage={setPageNumber}
            />
        </div>
    )
}