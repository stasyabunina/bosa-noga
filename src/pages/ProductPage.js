import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../features/product/getProduct';
import Product from '../components/productPage/Product';
import Preloader from '../components/Preloader';
import useDidMountEffect from '../app/hooks';

function ProductPage() {
    const dispatch = useDispatch();
    const didRender = useDidMountEffect();
    const { isLoading, error, item } = useSelector((state) => state.product);
    const { items, itemsAmount, priceSum } = useSelector((state) => state.cart);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProduct(id))
    }, [dispatch, id]);

    useEffect(() => {
        if (didRender && items.length !== 0) {
            localStorage.setItem('cart', JSON.stringify({ items: items, itemsAmount: itemsAmount, priceSum: priceSum }));
        }
    }, [didRender, items]);

    // useEffect(() => {
    //     didRender && console.log('hi')
    //     // navigate(process.env.REACT_APP_CART_PATH);
    // }, [didRender, items]);

    return (
        <section className='catalog-item'>
            {isLoading ? <Preloader /> : error ? <span>{error}</span> : item ? <Product item={item} /> : <></>}
        </section>
    );
}

export default ProductPage;