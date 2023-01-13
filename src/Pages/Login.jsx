import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'


const Container = styled.div`
    width:100%;
    height:100vh;
    background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
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
const Button = styled.button`
    padding:15px 20px;
    background-color:teal;
    color:white;
    border:none;
    cursor:pointer;
`
const LinkContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const Link = styled.a`
    margin-top:5px;
    cursor:pointer;
    text-decoration:underline;
    ${mobile({fontSize:"14px"})}

`
export const Login = () => {
return (

        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username or Email"/> 
                <Input placeholder="Password"/> 
                <Button>Log In</Button>
                <LinkContainer>
                    <Link>forget password?</Link>
                    <Link>create an account</Link>
                </LinkContainer>
                
            </Form>
        </Wrapper>
    </Container>

)
}
export default Login;
