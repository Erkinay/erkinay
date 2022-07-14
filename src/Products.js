import React from 'react';
import Card from "react-bootstrap/Card";
import products from "./products.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from "react-bootstrap";
import {getSpaceUntilMaxLength} from "@testing-library/user-event/dist/utils";
const Products = (props) => {
    // const [name, setName] = useState('')
    // const [count, setCount] = useState('')
    return (
        <div>
            <Row>
                {props.inp.map(e => {
                return (
                <Col className={'mt-4'} md={3}>
                <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Card style={{ position: 'relative',
                    overflow: 'hidden', padding: '10px', border: '1px solid lightblue'}} className={'img'}>
                    {e.discount != null ?  <div style={{justifyContent: 'space-between', padding: '5px', left: '-53px', backgroundColor: 'lightgreen', color: 'red', transform: 'rotate(-45deg)', textAlign: 'center', top: '-4px',  width: '130px', display: 'flex', flexDirection: 'column', position: 'absolute',
                       }}>{e.discount}%</div> : null}
                <div style={{
                    width: 'auto',
                    height: '200px',
                    backgroundImage: `url(https://api.office.promarket.besoft.kg/${e.main_image.path.original})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                </div>

                <center>
                    <Card.Title>
                        {e.title}
                    </Card.Title>
                </center>
                <center>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </center>

                    {e.discount === null ? (
                        <center><button style={{width: '80px', height: '25px', border: 'none', backgroundColor: 'lightblue'}}>{e.price}</button></center>
                    ): (
                        <>
                            <s style={{color: 'red', marginLeft: '90px'}}>{e.price}</s>
                        <center><button style={{width: '80px', height: '25px', border: 'none', backgroundColor: 'lightblue'}}>{(e.price-e.price / 100 * e.discount)}</button></center>
                        </>
                    )}
                {/*<Card.Text>*/}
                {/*wdawad*/}
                {/*</Card.Text>*/}
                {/*<Card.Link href="#">fwafwa</Card.Link>*/}
                {/*<Card.Link href="#">wadwa</Card.Link>*/}

                </Card>
                </div>
                </Col>
                )
            })}
            </Row>

        </div>
    );
};

export default Products;