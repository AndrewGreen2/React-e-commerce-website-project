import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id: 1, name: "Shoes", description: 'Running Shoes.', price:'$5.00', image: 'https://www.target.com.au/medias/static_content/product/images/full/07/18/A1390718.jpg?impolicy=product_portrait_hero'},
    {id: 2, name: "Macbook", description: 'Apple Macbook.',price:'$15.00', image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg'},
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
        <Grid container justify = "center" spacing = {4}>
            {products.map((product) => (
                <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;