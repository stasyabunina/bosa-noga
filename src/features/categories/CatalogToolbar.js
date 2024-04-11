import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from './categoriesSlice';

function CatalogToolbar({ categories }) {
    const dispatch = useDispatch();
    const { selectedCategory } = useSelector((state) => state.categories);

    const category = !selectedCategory ? null : selectedCategory.id;

    return (
        <ul className='catalog-categories nav justify-content-center'>
            <li className='nav-item'>
                <button type='button' className={`nav-link${!selectedCategory ? ' active' : ''}`} onClick={() => dispatch(updateCategory())}>Все</button>
            </li>
            {categories.map((o, index) =>
                <li key={index} className='nav-item'>
                    <button type='button' className={`nav-link${o.id === category ? ' active' : ''}`} onClick={() => dispatch(updateCategory(o.id))}>{o.title}</button>
                </li>
            )}
        </ul>
    );
}

export default CatalogToolbar;