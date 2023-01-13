import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../Responsive';

const Container = styled.div`
`
const Wrapper = styled.div`
    display:flex;
    padding:50px;
    ${mobile({flexDirection:"column",padding:"10px"})}
`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height:85vh;
    object-fit:cover;
    ${mobile({height:"50vh"})}
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    ${mobile({padding:"5px 10px"})}
    
`
const Title = styled.h1`
    font-weight:300;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
    font-weight:200;
    font-size:40px;
    
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin:30px 0px;
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.h3`
font-weight:300;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props => props.color};
    margin:0px 5px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 10px;
    

`
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    font-weight:500;
    cursor:pointer;
    &:hover{
        background-color:#f8f4f4;
    }
`
const SingleProduct = () => {
return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImageContainer>
                <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed ipsum velit, eleifend at felis sit amet,
                    cursus suscipit quam. Integer varius dapibus nibh,
                    vitae consectetur odio tempor aliquet.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Proin at vulputate eros.
                    Cras lobortis ullamcorper ante eget.
                </Desc>
                <Price>$35</Price>
                <FilterContainer>
                    
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{cursor:"pointer"}} />
                        <Amount>1</Amount>
                        <Add style={{cursor:"pointer"}}/>
                    </AmountContainer>
                    <Button>Add To Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer/>
    </Container>
)
}

export default SingleProduct