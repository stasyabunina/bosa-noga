import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postCartOrder } from './postCartOrder';

function CartForm() {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);
    const [form, setForm] = useState({
        phone: '',
        address: '',
    });
    const[isAgreed, setIsAgreed] = useState(false);
    const[formError, setFormError] = useState(false);

    const onAgreementChange = () => {
        setIsAgreed(!isAgreed);
    }

    const onValueChange = (e) => {
        setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.phone.trim() === '' || form.address.trim() === '') {
            setFormError(true);
            return;
        }
        const obj = {
            owner: {
                phone: form.phone,
                address: form.address,
            },
            items: items.map(item => ({ id: item.id, price: item.priceSum, count: item.amount }))
        }
        setFormError(false);
        isAgreed && dispatch(postCartOrder(obj)).then(setForm(({
            phone: '',
            address: '',
        })));
    }

    return (
        <section className='order'>
            <h2 className='text-center'>Оформить заказ</h2>
            <div className='card' style={{ maxWidth: '30rem', margin: '0 auto' }}>
                <form className='card-body' onSubmit={onSubmit}>
                    <div className='form-group'>
                        {form.phone.trim() === '' && formError ? <div className='pb-2 pt-2'><span className='text-danger'>Поле не может быть пустым</span></div> : <></>}
                        <label htmlFor='phone'>Телефон</label>
                        <input id='phone' className='form-control' name='phone' placeholder='Ваш телефон' value={form.phone} onChange={onValueChange} />
                    </div>
                    <div className='form-group'>
                        {form.address.trim() === '' && formError ? <div className='pb-2 pt-2'><span className='text-danger'>Поле не может быть пустым</span></div> : <></>}
                        <label htmlFor='address'>Адрес доставки</label>
                        <input id='address' className='form-control' name='address' placeholder='Адрес доставки' value={form.address} onChange={onValueChange} />
                    </div>
                    <div className='form-group form-check'>
                        <input type='checkbox' id='agreement' className='form-check-input' name='agreement' checked={isAgreed ? true : false} onChange={onAgreementChange} />
                        <label className='form-check-label' htmlFor='agreement'>Согласен с правилами доставки</label>
                    </div>
                    <button className='btn btn-outline-secondary' disabled={isAgreed === false ? true : false}>Оформить</button>
                </form>
            </div>
        </section>
    );
}

export default CartForm;