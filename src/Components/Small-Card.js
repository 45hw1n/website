import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";

const SmallCard = (props) => {
  return (
    <div className="Small-card-wrapper">
      <Container>
        <Row>
          {props.items.heading.map((el, idx) => {
            return (
                <div className="Small-card">
                  <div className="left">
                    <img src={props.items.image[idx].url} alt="icon" />
                  </div>

                  <div className="right">
                    <p className="heading">{el}</p>
                    <p className="content">
                      {ReactHtmlParser(props.items.content[idx].html)}
                    </p>
                  </div>
                </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SmallCard;
