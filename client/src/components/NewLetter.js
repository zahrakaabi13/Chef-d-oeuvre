import { Container } from "react-bootstrap"

export const NewLetter = () => {
    return (
        <>
          <Container className="NewLetter p-5 mt-5">
             <h2>JOIN OUR NEWSLETTER</h2>
             <input type="text" name ="newletter" placeholder="ENTER YOUR ADRESS EMAIL HERE"/>
          </Container>
        </>
    )
}