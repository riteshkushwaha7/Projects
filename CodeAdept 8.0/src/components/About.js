import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import './About.css';

export const About = () => {
    //  JS functions
   

    return (
    //   jsx file
    <section className="Detail" id="Detail">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Coding Club</h2>
            <p>Coding club is an initiative of the Department of Information Technology, UIT RGPV. The purpose of the Coding Club is to foster a collaborative environment where learners and developers of all skill levels can share knowledge, build projects, solve challenges, and grow their coding expertise.</p>
            <div className="Detail-container">
              <div className="Detail-item">
              <div className="Detail-event">
                  <h3>Goal</h3>
                 
                  <p>The goal of the Coding Club is to create a supportive community where members can enhance their programming skills through collaborative projects, peer-to-peer learning, and hands-on experience. By fostering creativity, problem-solving, and innovation, the club aims to empower individuals to become confident developers ready to tackle real-world challenges. </p>
                </div>
             </div>
             <div className="Detail-item">
              <div className="Detail-event">
                  <h3>Vision</h3>
                  {/* <h2>General Coding</h2> */}
                  <p>The vision of the Coding Club is to inspire a new generation of programmers by providing an inclusive space for learning and innovation. We strive to cultivate a culture of creativity, continuous improvement, and technological exploration, equipping members with the skills to make a meaningful impact in the digital world.</p>
                </div>
             </div>
             <div className="Detail-item">
              <div className="Detail-event">
                  <h3>Mission</h3>
                  {/* <h2>Core Coding</h2> */}
                  <p>The mission of the Coding Club is to provide a platform for aspiring and experienced coders to collaborate, learn, and grow. Through workshops, projects, and mentorship, we aim to foster technical skills, critical thinking, and a passion for coding, preparing members to excel in their personal and professional tech journeys.</p>
                </div>
             </div>
            </div>
         </Col>
        </Row>
      </Container>
       <img className="background-image-right" src={colorSharp2} alt="background" /> 
      
    </section>
    );
};