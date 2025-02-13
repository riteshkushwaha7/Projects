import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import teamImg1 from "../assets/img/gavesh.jpg";
import teamImg2 from "../assets/img/mridul.jpg";
import teamImg3 from "../assets/img/arijeet.jpg";
import teamImg4 from "../assets/img/ritesh.jpg";
import teamImg5 from "../assets/img/aman.jpg";
import teamImg6 from "../assets/img/uday.jpg";
import teamImg7 from "../assets/img/archita.jpg";
import teamImg8 from "../assets/img/ratna.jpg";
import teamImg9 from "../assets/img/yogiraj.jpg";
import teamImg10 from "../assets/img/aayush.jpg";
import teamImg11 from "../assets/img/mohit.jpg";
import teamImg12 from "../assets/img/amey.jpg";
import teamImg13 from "../assets/img/mitanshi.jpg";
import teamImg14 from "../assets/img/sadhvi.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Teams = () => {

  const teams = [
    {
      title: "Gavesh Batham",
      description: "Executive Head",
      imgUrl: teamImg1,
    },
    {
      title: "Mridul Kalra",
      description: "Executive Head",
      imgUrl: teamImg2,
    },
    {
      title: "Arijeet Panchotia",
      description: "Managing Director",
      imgUrl: teamImg3,
    },
    {
      title: "Ritesh Kushwaha",
      description: "Technical Lead",
      imgUrl: teamImg4,
    },
    {
      title: "Aman Pachouri",
      description: "Web Developer",
      imgUrl: teamImg5,
    },
    {
      title: "Uday Kumar Lariya",
      description: "Graphic Designer",
      imgUrl: teamImg6,
    },
    {
      title: "Archita Gattani",
      description: "Graphic Designer",
      imgUrl: teamImg7,
    },
    {
      title: "Ratna Solanki",
      description: "Content and Marketing",
      imgUrl: teamImg8,
    },
    {
      title: "Yogiraj Patidar",
      description: "Video Editor",
      imgUrl: teamImg9,
    },
    {
      title: "Aayush Panwar",
      description: "Video Editor",
      imgUrl: teamImg10,
    },
    {
      title: "Mohit Singh",
      description: "Volunteer",
      imgUrl: teamImg11,
    },
    {
      title: "Amey Agnihotri",
      description: "Volunteer",
      imgUrl: teamImg12,
    },
    {
      title: "Mitanshi Bhawsar",
      description: "Volunteer",
      imgUrl: teamImg13,
    },
    {
      title: "Sadhvi Ladhave",
      description: "Volunteer",
      imgUrl: teamImg14,
    },
    
  ];

  return (
    <section className="team" id="team">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Teams</h2>
                <p>Meet the talented team Members of Codeadept 8.0</p>
                <Row>
                  {
                    teams.map((team, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...team}
                        />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
