import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/DoIT .png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="footer-logo">
            <img src={logo} alt="Logo" />
          </Col>
          
          <Col xs={12} md={4} className="footer-contact">
            <p>Mobile No. : +919691497996</p>
            <p>Email : codeadept@doitcoding.club</p>
          </Col>
          
          <Col xs={12} md={4} className="footer-social">
            <div className="social-icon">
              <a href="https://www.linkedin.com/showcase/codeadept" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://x.com/codeadept_" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/codeadept/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
