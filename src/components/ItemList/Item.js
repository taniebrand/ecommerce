import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          $ {product.price}
          {product.description}
        </Card.Text>
        <Link to={`/item/${product.id}`}> 
        <Button variant="primary">
          
          Go somewhere
         
          </Button>
          </Link>
      </Card.Body>
    </Card>
  );
}
 
export default Item;