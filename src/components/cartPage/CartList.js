import { useSelector } from 'react-redux';
import CartItem from '../../features/cart/CartItem';

function CartList() {
    const { items, priceSum } = useSelector((state) => state.cart);

    return (
        <section className='cart'>
            <h2 className='text-center'>Корзина</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Название</th>
                        <th scope='col'>Размер</th>
                        <th scope='col'>Кол-во</th>
                        <th scope='col'>Стоимость</th>
                        <th scope='col'>Итого</th>
                        <th scope='col'>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <CartItem key={index} index={index} item={item} />
                    ))}
                    <tr>
                        <td colSpan='5' className='text-end'>Общая стоимость</td>
                        <td>{priceSum} руб.</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default CartList;