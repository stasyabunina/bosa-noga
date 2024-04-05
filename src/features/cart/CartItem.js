import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from './cartSlice';

function CartItem({ item, index }) {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(removeItem({ id: item.id, priceSum: item.priceSum }))
    }

    return (
        <tr>
            <td scope='row'>{index + 1}</td>
            <td><Link to={`/catalog/${item.id}`}>{item.title}</Link></td>
            <td>{item.size}</td>
            <td>{item.amount}</td>
            <td>{item.price} руб.</td>
            <td>{item.priceSum} руб.</td>
            <td><button type='button' className='btn btn-outline-danger btn-sm' onClick={onClick}>Удалить</button></td>
        </tr>
    );
}

export default CartItem;