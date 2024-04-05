import { useDispatch, useSelector } from 'react-redux';
import { updateSearchValue } from '../../features/catalog/catalogSlice';
import { getCatalog } from './getCatalog';

function SearchForm() {
    const dispatch = useDispatch();
    const { search } = useSelector((state) => state.catalog);
    const { selectedCategory } = useSelector((state) => state.categories);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(getCatalog({id: selectedCategory.id, value: search.trim().toLowerCase()}));
    }

    return (
        <form className='catalog-search-form form-inline' onSubmit={onSubmit}>
            <input className='form-control' placeholder='Поиск' value={search} onChange={(e) => dispatch(updateSearchValue({ value: e.target.value }))} />
        </form>
    );
}

export default SearchForm;