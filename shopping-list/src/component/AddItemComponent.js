import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,InputGroup, Input  } from 'reactstrap';
import axios from 'axios'

export default function AddItemComponent() {
        const [addItem, setAddItem] = useState('')
      
        const [modal, setModal] = useState(false);
        const toggle = () => setModal(!modal);
        
  

        const addItemToDatabase = (e) => {

            const Items = {
                item: addItem
            }
            

            axios.post("http://localhost:5000/items/add", Items)
            .then(res => console.log("Data addded successfully" + res.data))
            .catch(err => console.error("Error: " + err))

            setAddItem('')
            setModal(!modal)

        }

    return (
        <div className="container my-4">
            <Button color="dark" onClick={toggle}>Add Item</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add To The Shopping List</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <Input placeholder="Add Shopping Item" value={addItem} onChange={ (e) => setAddItem(e.target.value)} />
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" block onClick={addItemToDatabase} >Add Item</Button>
                </ModalFooter>
            </Modal>

    </div>
    )
}
