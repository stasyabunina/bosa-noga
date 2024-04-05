import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

function SalesItem({ item }) {
    return (
        <Col className='catalog-item-card col-4 d-flex align-items-stretch'>
            <div className='card flex-fill'>
                <img src={item.images[0]} className='card-img-top object-fit-cover img-fluid' alt={item.title} />
                <div className='card-body'>
                    <p className='card-text'>{item.title}</p>
                    <p className='card-text'>{item.price}</p>
                    <Link to={`${process.env.REACT_APP_CATALOG_PATH}/${item.id}`} className='btn btn-outline-primary'>Заказать</Link>
                </div>
            </div>
        </Col>
    );
}

export default SalesItem;