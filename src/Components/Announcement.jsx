import styled from "styled-components"

const Container = styled.div`
    background-color:teal;
    height:30px;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Announcement = () => {
return (
    <Container>
        Super Deal! Free Shipping on Order Over 50$
    </Container>
)
}

export default Announcement;