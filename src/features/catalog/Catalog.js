import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Catalog.css';
import CatalogToolbar from '../categories/CatalogToolbar';
import { getCatalog } from './getCatalog';
import { getCategories } from '../categories/getCategories';
import Preloader from '../../components/Preloader'
import ProductList from '../../components/homePage/ProductList'
import SearchForm from './SearchForm';
import { loadItems } from './loadItems';

function Catalog({ isSearch }) {
    const dispatch = useDispatch();
    const { moreLoading, moreError, isLoading, error, items, search, loadedItemsLength } = useSelector((state) => state.catalog);
    const { categories, selectedCategory } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    useEffect(() => {
        search.trim() !== '' && isSearch ? dispatch(getCatalog({ id: selectedCategory.id, value: search.trim().toLowerCase() })) : dispatch(getCatalog({ id: selectedCategory.id }))
    }, [selectedCategory.id]);

    const onClick = () => {
        search.trim() !== '' && isSearch ? dispatch(loadItems({ id: selectedCategory.id, offset: items.length, value: search.trim().toLowerCase()})) : dispatch(loadItems({ id: selectedCategory.id, offset: items.length }));
    }

    return (
        <section className='catalog'>
            <h2 className='text-center'>Каталог</h2>
            {isSearch && <SearchForm />}
            {isLoading ? <span className='text-center'>Loading...</span> : error ? <span>{error}</span> : <CatalogToolbar categories={categories} />}
            {isLoading ? <Preloader /> : error ? <span>{error}</span> : items.length !== 0 ? <ProductList items={items} /> : <></>}
            {moreLoading ? <Preloader /> : moreError ? <span>{moreError}</span> : isSearch && search.trim() !== '' && items.length === 0 ? <div className='w-100 text-center pb-5 pt-5'><span className='d-block'>Ничего не найдено.</span></div> : (typeof loadedItemsLength == 'number' && loadedItemsLength < 6) || items.length < 6 ? <></>
                : <div className='text-center'>
                    <button type='button' className='btn btn-outline-primary' onClick={onClick}>Загрузить ещё</button>
                </div>}
        </section>
    );
}

export default Catalog;