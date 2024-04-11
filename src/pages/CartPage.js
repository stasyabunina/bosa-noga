import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartList from '../components/cartPage/CartList';
import CartForm from '../features/cart/CartForm';
import Preloader from '../components/Preloader';
import { resetCart } from '../features/cart/cartSlice';

function CartPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, isLoading, error, success } = useSelector((state) => state.cart);
    useEffect(() => {
        success === true && setTimeout(() => {
            dispatch(resetCart());
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