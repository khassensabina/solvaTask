import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { printValue } from "../api/data";
import { useState } from "react";

type EditModalProps = {
    entity: {},
    show: boolean,
    onClose: () => void,
    onSave: (obj: {}) => void
}

export default function EditModal(props: EditModalProps) {
    const {entity, show, onClose, onSave} = props;
    const [edit, setEdit] = useState<typeof entity>(entity);

    const onChange = (e: any) => {
        const key = e.target.name;
        setEdit({
            ...edit,
            [key]: e.target.value
        })
    }

    const onEdit = () => {
        onSave(edit);
        onClose();
    }

    return (
        <Modal show={show} onHide={onClose} centered scrollable>
            <Modal.Header closeButton>
                <Modal.Title>Edit details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {Object.keys(edit).map((key) => {
                        return (
                            <Form.Group className="mb-3" controlId={key}>
                                <Form.Label>{key}</Form.Label>
                                <Form.Control
                                    name={key}
                                    value={printValue(edit, key, ', ')}
                                    onChange={onChange}
                                />
                            </Form.Group>
                        )
                    })}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onEdit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}