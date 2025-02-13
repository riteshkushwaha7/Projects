import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import './Timeline.css'; // Import your custom CSS for timeline

export const Timeline = () => {
  return (
    <section className="timeline" id="timeline">
      <Container>
        <Row>
          <Col size={12}>
            <h2> Outline Of The Event </h2>
            {/* <p>CodeAdept i an initiative of the Department of Information Technology, UIT RGPV. The development of CodeAdept 6.0 will begin with two webinars, followed by three rounds of competition.</p> */}
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-date">Oct 20, 2024</div>
                <div className="timeline-event">
                  <h3>Register</h3>
                  <p>Register Yourself At CodeAdept</p>
                  <p>Registration Starting From Oct 20, 2024</p>
                  <p>Registration closes on Nov 07, 2024</p>
                  <p>Mock test and contests link will be shared through email.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Nov 11, 2024</div>
                <div className="timeline-event">
                  <h3>Webinar</h3>
                  <p>Pre-competition webinar, where expert will share key strategies and tips to help you thrive in the competition.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Nov 14, 2024</div>
                <div className="timeline-event">
                  <h3>SEMINAR</h3>
                  <p>Join us for an exclusive seminar featuring a distinguished alumni who will share valuable insights and experiences from their professional journey.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">22 Nov 2024</div>
                <div className="timeline-event">
                  <h3>Mock Test</h3>
                  <p>Aptitude Question - 10 & Coding Question - 10</p>
                  <p>Time - 120 Minutes</p>
                  <p>Mock Test contain mixed questions that will be good for practise.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Nov 23, 2024</div>
                <div className="timeline-event">
                  <h3>ROUND 1</h3>
                  <p>Aptitude & Reasoning Questions - 30</p>
                  <p>Time - 45 Minutes</p>
                  <p>This round tests your aptitude skills and technical knowledge with no constraints on programming language.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">24 Nov 2022</div>
                <div className="timeline-event">
                  <h3>ROUND 2</h3>
                  <p>General Coding Questions - 6</p>
                  <p>Time - 90 Minutes</p>
                  <p>This round tests your technical knowledge with basic debugging problems and coding questions.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">26 Nov 2024</div>
                <div className="timeline-event">
                  <h3>ROUND 3</h3>
                  <p>Core Coding Questions - 5</p>
                  <p>Time - 90 Minutes</p>
                  <p>The final round where you choose your programming weapon and solve challenging coding questions.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Stay Tuned</div>
                <div className="timeline-event">
                  <h3>Result Announcement</h3>
                  <p>Result will ne shared through email and prize distibution ceremony will be held at IT Department UIT RGPV.</p>
                </div>
              </div>
            </div>
           
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
