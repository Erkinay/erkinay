import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Products";
import product from "./products.json"
import categories from "./categories.js"
function NavScrollExample() {
        const [name, setName] = useState("")
        const [poisk, setPoisk] = useState("")
        const [count1, setCount1] = useState(null)
        const [count, setCount] = useState(false)
        const inp = product.filter(inp2 => {
            if(count){
                return inp2.discount !== null
            }else if(count1 !== null){
               return inp2.category_id === count1.id
            }

            if(inp2.title.toLowerCase().includes(name.toLowerCase())) {
                return true
            } else{
                return false
            }
        })

    return (
        <>
        <Navbar bg="dark" variant={"dark"} expand="lg">

            <Container fluid>
                <Navbar.Brand href="#">ProMarket</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link href="#action1" onClick={() => {

                            setCount(false)
                                setCount1(null)
                                setName('')
                                setPoisk('')
                        }}>Главная</Nav.Link>
                        <Nav.Link href="#action2" onClick={() => {

                            setCount(true)
                            setCount1(false)
                        }}>Скидки</Nav.Link>

                        <NavDropdown  title="Категории" id="navbarScrollingDropdown">

                        {categories.map(i => (
                            <NavDropdown.Item onClick={() => {
                                setCount1(i)
                                setCount(false)
                            }} href="#action3">{i.short_title}</NavDropdown.Item>
                            ))}
                        </NavDropdown>

                        <Nav.Link href="#" disabled>

                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            onChange={(e) => setPoisk(e.target.value)}
                            type="search"
                            placeholder="Что ищете?"
                            className="me-2"
                            aria-label="Search"
                         />
                        <Button variant="outline-success" onClick={() => {setName(poisk)}}>Найти</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            {!count1 ? null : <div style={{textAlign: 'center', fontSize: '30px', color: 'red'}} >{count1.short_title}</div>}
            {!count ? null : <div style={{textAlign: 'center', fontSize: '30px', color: 'red'}}>Скидка</div>}
     <Products inp={inp}/>
        </>
    );
}

export default NavScrollExample;