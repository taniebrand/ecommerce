import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getAllProduct } from "../../utils/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  const { id } = useParams();
  
  useEffect(() => {
    getAllProduct(id)
    .then((data)=>{
      setProduct(data)
    })
    .catch(error => console.warn(error))
  }, [id])

  console.log(product)


  return (
    <Container>
      <h1>Detalle del Producto</h1>
      {product && <ItemDetail product = {product} />}
    </Container>    
  );
}
 
export default ItemDetailContainer;