import ProductItem from './ProductItem';
import { Row } from 'react-bootstrap';

function ProductList({ items }) {
    const numberOfRows = Math.ceil(items.length / 3);

    return (
        Array(numberOfRows).fill().map((_, rowIndex) => (
            <Row className='row-cols-4' key={rowIndex}>
                {items.slice(rowIndex * 3, (rowIndex * 3) + 3).map(item => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </Row>
        ))
    );
}

export default ProductList;