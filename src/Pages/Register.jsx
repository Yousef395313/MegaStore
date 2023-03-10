import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    width:100%;
    height:100vh;
    background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    display:flex;
    align-items: center;
    justify-content: center;
    
`
const Wrapper = styled.div`
    background-color:white;
    width:30%;
    padding:20px;
    ${mobile({width:"70%"})}

`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex:1;
    margin:5px 0px;
    padding:10px;
`
const Agreement = styled.span`
    font-size:12px;
    margin:10px 0px;
`
const Button = styled.button`
    padding:15px 20px;
    background-color:teal;
    color:white;
    border:none;
    cursor:pointer;
`
const Register = () => {
return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"/> 
                <Input placeholder="Last name"/> 
                <Input placeholder="Username"/> 
                <Input placeholder="Email"/> 
                <Input placeholder="Password"/> 
                <Input placeholder="Re-enter password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal 
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
)
}

export default Register