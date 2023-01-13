import React from 'react'
import styled from 'styled-components'
import ProductsItem from './ProductsItem'
import { popularProducts } from '../data.js';

const Container = styled.div`
    ${'' /* display:flex;
    flex-wrap:wrap;
    padding:20px; */}
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding:20px;
`
const Products = () => {
return (
    <Container>
        {popularProducts.map(items => (
            <ProductsItem items={items} key={items.id} />
        ))}
    </Container>
)
}

export default Products