import ProductDetail from './ProductDetail';
import ProductForm from '../../features/product/ProductForm';

function Product({ item }) {
    return (
        <>
            <h2 className='text-center'>{item.title}</h2>
            <div className='row'>
                <div className='col-5'>
                    <img src={item.images[0]}
                        className='img-fluid' alt={item.title} />
                </div>
                <div className='col-7'>
                    <ProductDetail item={item} />
                    <ProductForm item={item} />
                </div>
            </div>
        </>
    );
}

export default Product;