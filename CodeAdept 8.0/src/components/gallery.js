import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import register from "../assets/img/Register now.svg";
import winners from "../assets/img/past winners.svg";
import card from "../assets/img/photo card.svg";
import gallerybg from "../assets/img/photo gallery background.svg";
import gallery from "../assets/img/photo gallery.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../assets/img/aditi.jpeg";
import img2 from "../assets/img/arpitpathak.jpeg";
import img3 from "../assets/img/abhay.jpeg";


import img7 from "../assets/img/anshuman_prajapati.png";
import img8 from "../assets/img/runjhun_goyal.png";
import img9 from "../assets/img/mayank_ujawane.png";

import img4 from "../assets/img/hritik_kumar.png";
import img5 from "../assets/img/anjali_chauhan.png";
import img6 from "../assets/img/ansh_shrivastav.png";

import img10 from "../assets/img/jayant_patel.jpg";
import img11 from "../assets/img/manav_patel.jpg";
import img12 from "../assets/img/rohit_yadav.jpg"





import photo1 from "../assets/img/photo5.jpg";
import photo2 from "../assets/img/photo6.jpg";
import photo3 from "../assets/img/photo3.jpg";
import photo4 from "../assets/img/photo4.jpg";

// import gallerystrip from "../assets/img/photo gallery black slider strip.svg";
import "./gallery.css";

const Gallery = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of gallery images
  const galleryImages = [
    photo1,photo2,photo3,photo4
  ];

  // Set interval for automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <div className='gallery'>
      <div className='winners'>
        <img className='winners-txt' src={winners} alt='winners' />
      </div>

      <div className='slide'>
      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
        <div className="winner-detail">
          <img src={img3} alt="Image" />
          <h5>Abhay Tripathi</h5>
          <p>IT 3rd (7.0)</p>
        </div>
        <div className="winner-detail">
          <img src={img1} alt="Image" />
          <h5>Aditi Agrawal</h5>
          <p>CSE 1st (7.0)</p>
        </div>
        <div className="winner-detail">
          <img src={img2} alt="Image" />
          <h5>Arpit Pathak</h5>
          <p>CSE 2nd (7.0)</p>
        </div>

        <div className="winner-detail">
          <img src={img10} alt="Image" />
          <h5>Jayant Patel</h5>
          <p>CSE 2nd (6.0)</p>
        </div>
        <div className="winner-detail">
          <img src={img11} alt="Image" />
          <h5>Manav Kumar Patel</h5>
          <p>CSE 1st (6.0)</p>
        </div>
        <div className="winner-detail">
          <img src={img12} alt="Image" />
          <h5>Rohit Singh yadav</h5>
          <p>CSE 3rd (6.0)</p>
        </div>

        <div className="winner-detail">
          <img src={img7} alt="Image" />
          <h5>Anshuman Prajapati</h5>
          <p>IT 3rd (5.0)</p>
        </div>
        <div className="winner-detail">
          <img src={img8} alt="Image" />
          <h5>Runjhun Goyal</h5>
          <p>IT 1st (5.0)</p>
        </div>
        <div className="winner-detail">
          <img src={img9} alt="Image" />
          <h5>Mayank Ujawane</h5>
          <p>ECE 2nd (5.0)</p>
        </div>

        <div className="winner-detail">
          <img src={img5} alt="Image" />
          <h5>Anjali Chauhan</h5>
          <p>CSE 1st (4.0)</p>
        </div>
        <div className="winner-detail">
          <img src={img4} alt="Image" />
          <h5>Hritik Kumar</h5>
          <p>CSE 2nd (4.0)</p>
        </div>
        <div className="winner-detail">
          <img src={img6} alt="Image" />
          <h5>Ansh Shrivastava</h5>
          <p>IT 3rd (4.0)</p>
        </div>
      </Carousel>
      </div>

      <div className='gallery-bg'>
        <img src={gallerybg} alt='gallery-bg' />
        <div className='photo-gallery'>
          <img className='gallery-txt' src={gallery} alt='gallery' />
          <div className='gallery-strip'>
            <img src={galleryImages[currentSlide]} alt={`gallery-slide-${currentSlide}`} className="slider-image" />
            {/* <img src={galleryImages[currentSlide]} alt={`gallery-slide-${currentSlide}`} className="slider-image" /> */}
          </div>
          
        </div>
      </div>

      <div className='line'>
        <p>Prepare to Code, Compete, and Conquer at CodeAdept 8.0!</p>
      </div>

      <div className='btn'>
        <Link to="/register">
          <button><img src={register} alt='register' /></button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
