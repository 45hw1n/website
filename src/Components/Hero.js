import React from 'react'
import "../Styles/index.scss"
import {Row, Col, Container} from "react-bootstrap"

const Hero = (props) => {
  return (
    <div className="Hero">
        <Container>
            <Row>
            <Col sm={12} lg={6} className="left">
                <h1>{props.heading}</h1>
                <p>{props.description}</p>
            </Col>
            <Col sm={12} lg={6}>
                <img src={props.image} alt="img" />
            </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default Hero