import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartList from '../components/cartPage/CartList';
import CartForm from '../features/cart/CartForm';
import Preloader from '../components/Preloader';
import { loadCart, resetCart } from '../features/cart/cartSlice';
import useDidMountEffect from '../app/hooks';
import { totalPriceSum } from '../features/cart/selectors';

function CartPage() {
    const dispatch = useDispatch();
    const didRender = useDidMountEffect();
    const navigate = useNavigate();
    const { items, itemsAmount, isLoading, error, success } = useSelector((state) => state.cart);
    const total = useSelector(totalPriceSum);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart && items.length === 0) {
            dispatch(loadCart(cart));
        }
    }, []);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (didRender && items.length < cart.items.length) {
            if (items.length === 0) {
                localStorage.removeItem('cart');
            } else {
                localStorage.setItem('cart', JSON.stringify({ items: items, itemsAmount: itemsAmount, priceSum: total }));
            }
        }
    }, [didRender, items]);

    useEffect(() => {
        success === true && setTimeout(() => {
            dispatch(resetCart());
            localStorage.removeItem('cart');
            navigate('/');
        }, 3000)
    }, [success]);

    return (
        <>
            {!success && items.length !== 0 ? <CartList /> : !success ? <div className='w-100 text-center pb-5 pt-5'><span className='d-block'>Корзина пуста.</span></div> : <></>}
            {!success && items.length !== 0 ? <CartForm /> : <></>}
            {isLoading ? <Preloader /> : error ? <span>{error}</span> : success ? <div className='w-100 text-center pb-5 pt-5'><span className='d-block'>Заказ успешно отправлен. Вы будете перенаправлены...</span></div> : <></>}
        </>
    );
}

export default CartPage;