import { FavoriteBorderOutlined, LocalMallOutlined, Search } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:3;
    opacity:0;
    transition:all 0.5s ease;
    cursor:pointer;
`

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    
    &:hover ${Info}{
        opacity:1;
    }
`
const Circle = styled.div`
    width: 200px;
    height:200px;
    background-color:white;
    border-radius:50%;
    position:absolute;
`
const Image = styled.img`
    height:75%;
    z-index:2;
`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    margin:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;

    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }
`
const ProductsItem = ({items}) => {
return (
    <Container>
        <Circle/>
        <Image src={items.img} />
        <Info>
            <Icon>
                <LocalMallOutlined/>
            </Icon>
            <Icon>
                <Search/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
)
}

export default ProductsItem