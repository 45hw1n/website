import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/index.scss";
import { StaticQuery, graphql, Link } from "gatsby";
import Hero from "../Components/Hero";
import { Row, Col, Container, Button } from "react-bootstrap";
import SmallCard from "../Components/Small-Card";
const Home = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query Homepage {
            Website {
              homePages {
                hero {
                  heading
                  image {
                    url
                  }
                  description
                }
                aboutUs
                cards {
                  heading
                  content {
                    html
                    text
                  }
                  image {
                    url
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Hero
              heading={data.Website.homePages[0].hero.heading}
              image={data.Website.homePages[0].hero.image.url}
              description={data.Website.homePages[0].hero.description}
            />

            {/* CTA  */}
            <div className="CTA">
              <Container>
                <Row>
                  <Col sm={12} lg={4}>
                    <p className="stat-left">
                      Trusted by over 50k users worldwide since 2010
                    </p>
                  </Col>

                  <Col sm={12} lg={7}>
                    <div className="Stats-box">
                      <div className="single-stat">
                        <p className="bold-text">4.9</p>
                        <div className="rating">
                          <img
                            src="https://media.graphcms.com/CswjyRPoRgiHS263kCc7"
                            width="24px"
                          />
                          <img
                            src="https://media.graphcms.com/CswjyRPoRgiHS263kCc7"
                            width="24px"
                          />
                          <img
                            src="https://media.graphcms.com/CswjyRPoRgiHS263kCc7"
                            width="24px"
                          />
                          <img
                            src="https://media.graphcms.com/CswjyRPoRgiHS263kCc7"
                            width="24px"
                          />
                        </div>
                        <p className="stat-des">4000 Ratings</p>
                      </div>

                      <div className="single-stat">
                        <p className="bold-text">5M+</p>
                        <p className="stat-des">Product sales</p>
                      </div>

                      <div className="single-stat">
                        <p className="bold-text">20+</p>
                        <p className="stat-des">Products to choose from</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* CTA  ENDS*/}
            {console.log(data.Website.homePages[0])}
            <section className="about-us">
              <Container>
                <h2 className="section-heading text-center">About Us</h2>
                <div className="section-content">
                  <p>{data.Website.homePages[0].aboutUs}</p>
                </div>
              </Container>

              <SmallCard items={data.Website.homePages[0].cards[0]} />
            </section>

            <section className="about-us contact-us">
              <h2 className="section-heading text-center">Contact Us</h2>

              <Container>
                <Row className="justify-content-center row-wrapper">
                  <Col sm={12} lg={4}>
              <SmallCard items={data.Website.homePages[0].cards[1]} />

                  </Col>
                  {console.log(data.Website.homePages[0].cards[1])}
                  <Col sm={12} lg={6}>
                    <div className="form-box">
                      <p className="form-text">Have project in your mind ?<br/> Reach out to us</p>
                      <form>
                        <div className="position-relative">
                          <input />
                          <label>Name</label>
                        </div>

                        <div className="position-relative">
                          <input />
                          <label>Email</label>
                        </div>

                        <div className="position-relative">
                          <textarea rows="10" />
                          <label>Message</label>
                        </div>

                        <Button className="w-100" variant="primary">SUBMIT</Button>
                      </form>
                    </div>
                  </Col>
                </Row>
              </Container>

            </section>
          </>
        )}
      />
    </>
  );
};

export default Home;
