import React from 'react';
import Mission from "../assets/img/Mission.svg";
import Missionbox from "../assets/img/Mission text box.svg";
import vision from "../assets/img/Vision.svg";
import visionBox from "../assets/img/Mission text box.svg";
import overviewtxt from "../assets/img/competition overview.svg";
import overviewbox from "../assets/img/compertition overview box.svg";
// import round from "../assets/img/Round.svg";
import round1 from "../assets/img/1.svg";
import round2 from "../assets/img/2.svg";
import round3 from "../assets/img/3.svg";
import "./info.css";

const Info = () => {
  return (
    
    <div className="info">


      <div className="info-container">
        <div className="mission">
          <img className='mission-txt' src={Mission} alt='Mission' />
          <div className="info-text">We’re here to build the ultimate coding realm where today’s and tomorrow’s coders can dig deep, level up, and discover new opportunities. We want students to break barriers, push their limits, and unlock their full potential.</div>
        </div>
        <div className="Vision">
          <img className='vision-txt' src={vision} alt='Vision' />
          <div className="info-text">We’re committed to helping coders mine their knowledge and sharpen their problem-solving skills. Our goal is to provide students with a range of experiences that unlock their hidden technical talents</div>
        </div>
      </div>

      <center>
        <div className='middle'>
          <img className='middle-txt' src={overviewtxt} alt='overview' />
          {/* <img className='middle-box' src={overviewbox} alt='overview' /> */}
          <div className="info-text">Hosted by the Department of Information Technology (DoIT), CodeAdept is  the premier state-level inter-college coding competition where the best coders come together for a battle of logic and programming mastery. Here is the roadmap leading you through every step of competition.
          </div>
        </div>
      </center>

      {/* <section className='event'>
          <div className='event-details'> */}
      <div className='rounds'>

        <div className='round-1'>
          {/* <img className='round-txt' src={round} alt='round' /> */}
          <img className='round-txt-1' src={round1} alt='round1' />
          {/* <img className='round-box-1' src={roundbox} alt='round1' /> */}
          <div className="info-text">The journey begins with an online aptitude test, designed to challenge your logical reasoning, problem-solving ability, and analytical skills. This round will assess your fundamental understanding of mathematics, logic, and algorithmic thinking, setting the stage for the more technical challenges to follow.</div>
        </div>
        <div className='round-2'>
          {/* <img className='round-txt' src={round} alt='round' /> */}
          {/* <img className='round-box-2' src={roundbox} alt='round2' /> */}
          <div className="info-text">In the problem-solving round, you will face real-world coding problems that push your programming abilities to the limit. This stage is designed to test your algorithmic thinking and mastery over a range of programming concepts. You’ll be expected to write clean, efficient code that can solve complex problems within a time constraint.</div>
          <img className='round-txt-2' src={round2} alt='round2' />
          
        </div>
        <div className='round-3'>
          {/* <img className='round-txt' src={round} alt='round' /> */}
          <img className='round-txt-3' src={round3} alt='round3' />
          {/* <img className='round-box-3' src={roundbox} alt='round3' /> */}
          <div className="info-text">Get ready for the ultimate offline showdown! Round 3 is an exciting in-person contest that will focus heavily on data structures and algorithms. You’ll be competing against the top coders face-to-face, solving algorithmic challenges in real time. Expect competitive coding problems that cover advanced topics such as graph theory, segment trees. </div>
        </div>

        {/* </div>
        </section> */}
      </div>

    </div>
  );
};

export default Info;