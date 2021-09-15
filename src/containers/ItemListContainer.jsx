import React, { useState }  from 'react'
import {get} from '../Utils/Mock';
import ItemList from '../components/ItemList';


function ItemListContainer() {
    
     const [productos, setProductos] = useState([])

     get 
     .then(respuesta =>{
        setProductos(respuesta)
     })
     .catch(error => console.log(error))
     .then(resp => console.log(resp))
    
    console.log(productos)

    return (
        <>
        <ItemList productos={productos} />
        </>
      )
}
export default ItemListContainer
