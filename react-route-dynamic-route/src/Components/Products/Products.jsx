import React, {  useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../Contexts/Products';

import { ProductsDiv } from './Styles'

const Products = () => {
    const { products, handleProducts, /* product, handleProduct */ } =
        useContext(ProductsContext);

    useEffect(() => {
        getProducts();
        // console.log('products:', products);
    }, []);

    const getProducts = () => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((response) => {
                handleProducts(response.data);
            })
            .catch((error) => {
                console.log('error:', error);
            });
    };

    const handleClick = (userProduct) => {
        // handleProduct(userProduct);
        // console.log(product)
    };

    return (
        <ProductsDiv>
            {products.map(
                ({ id, image, title, rating, price, description }) => {
                    return (
                        <div
                            key={id}
                            style={{ width: '150px' }}
                            onClick={() =>
                                handleClick({
                                    id,
                                    image,
                                    title,
                                    rating,
                                    price,
                                    description,
                                })
                            }
                        >
                            <img
                                src={image}
                                alt='title'
                                style={{ width: '150px' }}
                            />
                            <Link to={`/products/${id}`}>
                                <h4>{title}</h4>
                            </Link>
                            <h5>Rating: {rating.rate}/5</h5>
                            <h5>Price: {price}$</h5>
                            {/* <p>{description}</p> */}
                        </div>
                    );
                }
            )}
        </ProductsDiv>
    );
};

export default Products;
