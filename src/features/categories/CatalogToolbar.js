import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from './categoriesSlice';

function CatalogToolbar({ categories }) {
    const dispatch = useDispatch();
    const { selectedCategory } = useSelector((state) => state.categories);

    const onClick = (id) => {
        dispatch(updateCategory(id));
    }

    return (
        <ul className='catalog-categories nav justify-content-center'>
            {categories.map((category, _) =>
                <li key={category.id} className='nav-item'>
                    <button type='button' className={`nav-link${category.id === selectedCategory.id ? ' active' : ''}`} onClick={() => onClick(category.id)}>{category.title}</button>
                </li>
            )}
        </ul>
    );
}

export default CatalogToolbar;