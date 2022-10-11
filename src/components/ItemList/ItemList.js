import Item from "./Item";
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <>
      <h1>ItemList</h1>
      <div className="itemlist">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
      </div>
    </>
  );
}
 
export default ItemList;