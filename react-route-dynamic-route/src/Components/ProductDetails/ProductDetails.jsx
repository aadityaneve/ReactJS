import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../Contexts/Products';

import { ProductDiv } from './Styles';

const ProductDetails = () => {
    const { products } = useContext(ProductsContext);
    const { id } = useParams();

    // console.log()

    let { image, title, rating, price, description } = products.find((item) =>
        +item.id === +id ? true : false
    );

    return (
        <ProductDiv style={{ width: '350px' }}>
            <img src={image} alt='title' style={{ width: '200px' }} />
            <h4>{title}</h4>
            <h5>Rating: {rating.rate}/5</h5>
            <h5>Price: {price}$</h5>
            <p>{description}</p>
        </ProductDiv>
    );
};

export default ProductDetails;
