import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem, Button} from 'reactstrap'; 
import axios from 'axios'
import './itemsComponent.css'

export default function ItemsComponent() {
    const [allItems, setAllItems] = useState([])
    // console.log(allItems)

    useEffect( () => {
        axios.get("http://localhost:5000/items")
        .then(res => setAllItems(res.data))
    }, [allItems])

    const delItem = (id) => {
        axios.delete(`http://localhost:5000/items/delete/${id}`)
        .then(res => {  
            console.log(res);  
            console.log(res.data);  
        })

    }
    return (
            <div className="itemContainer">
                
                <ListGroup>
                        {allItems.map( ({_id, item}) => (
                            <ListGroupItem  key={_id} id={_id} onClick={ () => delItem(_id)}> <Button color="danger" size="sm">X</Button> {item}</ListGroupItem>
                        ))}
                </ListGroup>
            </div>

    )
}
