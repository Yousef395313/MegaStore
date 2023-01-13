import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
`
const Description = styled.div`
    font-size:24px;
    margin-bottom:20px;
    font-weight:300;
    ${mobile({textAlign:"center"})}

`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgray;
    ${mobile({width:"70%"})}

`
const Input = styled.input`
    flex:8;
    border:none;
    padding:20px;
`
const Button = styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
`

const NewsLetter = () => {
return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder='Your Email' />
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
)
}

export default NewsLetter