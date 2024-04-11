import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import config from '../../app/config';

function CartIcon() {
    const { itemsAmount } = useSelector((state) => state.cart);

    return (
        <Link className='bg-transparent header-controls-pic header-controls-cart border-0' to={config.cartUrl}>
            {itemsAmount === 0 ? <></> : <div className='header-controls-cart-full'>{itemsAmount}</div>}
            <div className='header-controls-cart-menu'></div>
        </Link>
    );
}

export default CartIcon;