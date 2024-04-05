import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSales } from './getSales';
import Preloader from '../../../components/Preloader'
import ProductList from '../../../components/homePage/ProductList'

function TopSales() {
    const dispatch = useDispatch();
    const { isLoading, error, items } = useSelector((state) => state.sales);

    useEffect(() => {
        dispatch(getSales())
    }, [dispatch]);

    return (
        <section className='top-sales'>
            <h2 className='text-center'>Хиты продаж!</h2>
            {isLoading ? <Preloader /> : error ? <span>{error}</span> : items.length !== 0 ? <ProductList items={items} /> : <></>}
        </section>
    );
}

export default TopSales;