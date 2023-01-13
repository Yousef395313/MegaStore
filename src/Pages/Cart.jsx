import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { mobile } from '../Responsive'

const Container = styled.div`
`
const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:"10px"})}

`
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`
const TopButton = styled.button`
    padding:10px;
    cursor:pointer;
    font-weight:600;
    border:${(props)=>props.type === "filled" && "none" };
    background-color:${(props)=>props.type === "filled" ? "black" : "transparent" };
    color:${(props)=>props.type === "filled" && "white" };
`
const TopTexts = styled.div`

`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin:0px 10px;
    ${mobile({display:"none"})}
`
const Bottom = styled.div`
    display:flex;
    justify-content: space-between;
    padding:20px;
    ${mobile({flexDirection:"column"})}
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display:flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column", marginBottom:"10px"})}

`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
    
`
const Image = styled.img`
    width:200px;
`
const Detail = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.div`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${(props)=>props.color};
`
const ProductSize = styled.span`
`
const PriceDetails = styled.span`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const PriceAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
`
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({margin:"5px 15px"})}

`
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:300;
`
const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:3px;
`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:40vh;
`
const SummaryTitle = styled.div`
    font-weight:300;
`
const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type === "total" && "500"};
    font-size:${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`
`
const Button = styled.button`
    width:100%;
    background-color:black;
    color:white;
    padding:10px;
    font-weight:600;
    cursor:pointer;
`
export const Cart = () => {
return (
    <Container>
        <Announcement />
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECK OUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.footlocker.com.eg/assets/styles/FootLocker/image-thumb__136710__product_zoom_medium_606x504/314209206904_01.jpg"/>
                            <Detail>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b>199254</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>44</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetails>
                            <PriceAmountContainer>
                                <Remove style={{cursor:"pointer"}}/>
                                <ProductAmount>2</ProductAmount>
                                <Add style={{cursor:"pointer"}}/>                               
                            </PriceAmountContainer>
                            <ProductPrice>$ 40</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                            <Detail>
                                <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                <ProductId><b>ID:</b>17989254</ProductId>
                                <ProductColor color="gray"/>
                                <ProductSize><b>Size:</b>40</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetails>
                            <PriceAmountContainer>
                                <Remove style={{cursor:"pointer"}}/>
                                <ProductAmount>2</ProductAmount>
                                <Add style={{cursor:"pointer"}}/>                               
                            </PriceAmountContainer>
                            <ProductPrice>$ 35</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CheckOut Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
)
}
export default Cart;
