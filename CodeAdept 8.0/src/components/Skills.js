import img from "../assets/img/arpit.jpg";
import img2 from "../assets/img/sachin.jpg";
import img3 from "../assets/img/hod.jpg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Faculty Coordinators</h2>
              <p>Meet the supportive faculty of DoIT Coding Club<br></br></p>
              <div className="faculty-row">
              <div className="item">
                  <img src={img3} alt="Image" />
                  <h5>Dr. ASMITA A MOGHE</h5>
                  <p>Head of Department</p>
                </div>
                <div className="item">
                  <img src={img2} alt="Image" />
                  <h5>Dr. SACHIN GOYAL</h5>
                  <p>Head of Coding Club</p>
                </div>
                <div className="item">
                  <img src={img} alt="Image" />
                  <h5>Prof. ARPIT NAMDEV</h5>
                  <p>Head of Coding Club</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
