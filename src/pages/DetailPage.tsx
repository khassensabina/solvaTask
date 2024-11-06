import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { printValue } from "../api/data";
import EditModal from "../components/EditModal";

export default function DetailPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const {detail} = useParams();
    
    const [entity, setEntity] = useState<typeof location.state>(location.state);
    const [show, setShow] = useState(false);

    const onClose = () => setShow(false);

    const onShow = () => setShow(true);

    const onSave = (obj: typeof entity) => {
        setEntity(obj);
    }

    const onReturn = () => {
        navigate("/starwars/" + detail + "/");
    }

    return (
        <div className="flex flex-col">
            <Table striped responsive>
                <tbody>
                    {Object.keys(entity).map((key) => {
                        return (
                            <tr>
                                <th>{key}</th>
                                <td>{printValue(entity, key, ', ')}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <div className="w-full flex gap-5">
                <Button variant="dark" className="w-1/5 mt-5" onClick={onShow}>Edit</Button>
                <Button variant="outline-dark" className="w-1/5 mt-5" onClick={onReturn}>Return</Button>
            </div>
            <EditModal entity={entity} show={show} onClose={onClose} onSave={onSave} />
        </div>
    )
}