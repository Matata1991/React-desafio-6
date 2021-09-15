import React from 'react'
import { Card, Button } from 'react-bootstrap';

const ItemDetail = ({ producto }) => {
    return (
            <Card className="card text-center bg-success mx-auto" style={{ width: '15rem' }}>
                <Card.Title > { producto.titulo } </Card.Title>
                <Card.Img variant="top" src= {producto.imagen} />
                <Card.Body>
                <Card.Title >{ producto.precio }</Card.Title>
                <Card.Text>
                { producto.descripcion }
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
    )
}

export default ItemDetail
