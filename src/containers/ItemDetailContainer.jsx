import { useState, useEffect } from "react"
import ItemDetail from "../components/ItemDetail"
import {getProducto} from '../Utils/Mock';



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)


    useEffect(() => {
        getProducto
        .then(respuesta =>{
            setProducto(respuesta)
         })
         .catch(error => console.log(error))
         .finally(() => setCargando(false))
    }, [])

    return (
        <div>
            {cargando ? <h2>Cargando...</h2> : <ItemDetail producto={ producto }/>}
        </div>
    )
}

export default ItemDetailContainer
