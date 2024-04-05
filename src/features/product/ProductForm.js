import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import { updateItem } from '../cart/cartSlice';

function ProductForm({ item }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSubmmited, setIsSubmitted] = useState(false);
    const { items } = useSelector((state) => state.cart);
    const [form, setForm] = useState({
        id: item.id,
        title: item.title,
        price: item.price,
        priceSum: item.price * 1,
        size: null,
        amount: 1
    });

    const onAmountIncrease = () => {
        form.amount < 10 && setForm((prevForm) => ({ ...prevForm, amount: form.amount + 1, priceSum: item.price * (form.amount + 1) }));
    }

    const onAmountDecrease = () => {
        form.amount > 1 && setForm((prevForm) => ({ ...prevForm, amount: form.amount - 1, priceSum: item.price * (form.amount - 1) }));
    }

    const onChangeSize = (size) => {
        setForm((prevForm) => ({ ...prevForm, size }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (items.find(o => o.id === form.id && o.size === form.size)) {
            dispatch(updateItem({ id: form.id, size: form.size, amount: form.amount, priceSum: form.priceSum }));
        } else {
            dispatch(addItem(form));
        }
        setIsSubmitted(true)
    }

    useEffect(() => {
        isSubmmited && navigate(process.env.REACT_APP_CART_PATH);
    }, [isSubmmited]);

    return (
        <form className='text-center d-flex flex-column' onSubmit={onSubmit}>
            <div className='d-flex justify-content-center'>
                <p>Размеры в наличии:&nbsp;</p>
                {item.sizes.map((o, index) => (
                    <div key={index}>
                        <button type='button' className={`border-0 catalog-item-size${o.size === form.size ? ' selected bg-secondary' : ' bg-transparent'}`} disabled={o.available ? false : true} onClick={() => onChangeSize(o.size)}>{o.size}</button>
                    </div>
                ))}
            </div>
            {item.sizes.find(size => size.available === true) && form.size ?
                <div className='d-flex justify-content-center'>
                    <p>Количество: <span className='btn-group btn-group-sm pl-2'></span>
                        <button type='button' className='btn btn-secondary' onClick={onAmountDecrease}>-</button>
                        <span className='btn btn-outline-primary'>{form.amount}</span>
                        <button type='button' className='btn btn-secondary' onClick={onAmountIncrease}>+</button></p>
                </div> : <></>}
            {item.sizes.find(size => size.available === true) && form.size ? <button className='btn btn-danger btn-block btn-lg'>В корзину</button> : <></>}
        </form>
    );
}

export default ProductForm;