import { Card, Button } from 'react-bootstrap';

const Item = ({producto}) => {
    return (
        <div>
            <Card className="card text-center bg-success mx-auto" style={{ width: '15rem' }}>
                <Card.Title > { producto.titulo } </Card.Title>
                <Card.Img variant="top" src= {producto.imagen} />
                <Card.Body>
                <Card.Title >Precio ${ producto.precio }</Card.Title>
                <Button variant="primary">Detalle</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
