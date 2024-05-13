import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import '../Component/navbar.css'
import { FaGithub } from "react-icons/fa";
import { FaInstagram ,FaLinkedin,FaArrowUp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { TbExternalLink } from "react-icons/tb";
import { useEffect,useState,useRef } from 'react';
import Aos from 'aos'
import { useSpring, animated } from 'react-spring';
import "aos/dist/aos.css"
const Navbar = () => {
  
  // ______________________________

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    contact: '',
    message: ''
  });
  useEffect(()=>{
    Aos.init();
  },[])

// _______________________________________skill
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
      const circles = box.querySelectorAll('.circle');
      circles.forEach(circle => {
        const dots = parseInt(circle.getAttribute("data-dots"));
        const marked = parseInt(circle.getAttribute("data-percent"));
        const percent = Math.floor((dots * marked) / 100);
        let points = '';
        const rotate = 360 / dots;
        for (let i = 0; i < dots; i++) {
          points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        circle.innerHTML = points;
      });
    });
 }, []);
  // const [points, setPoints] = useState([]);
  // useEffect(() => {
  //   const generatePoints = (dots, marked) => {
  //     const percent = Math.floor((dots * marked) / 100);
  //     const rotate = 360 / dots; // Adjust the rotation angle here
  //     const newPoints = [];
  //     for (let i = 0; i < dots; i++) {
  //       newPoints.push(
  //         <div key={i} className="points" style={{ '--i': i, '--rot': `${i * (dots/360 )}deg` }}></div>
  //       );
  //     }
  //     return newPoints;
  //   };

  //   const boxes = [
  //     { dots: 70, marked: 30 },
  //     { dots: 90, marked: 80 },
  //     { dots: 80, marked: 90 },
  //     { dots: 80, marked: 90 },
  //   ];

  //   const newPoints = boxes.map(box => generatePoints(box.dots, box.marked));
  //   setPoints(newPoints);
  // }, []);


// ______________________nav
const [activeMenuItem, setActiveMenuItem] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const activeSectionIndex = Array.from(document.querySelectorAll('section')).findIndex(section => {
        const { offsetTop, offsetHeight } = section;
        return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
      });

      if (activeSectionIndex !== -1) {
        setActiveMenuItem(activeSectionIndex);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, []);
// _____________________link
const handleClicklLink = () => {
  window.location.href = 'https://www.linkedin.com/in/stellagracy1210';
};
const handleClicklGit = () => {
  window.location.href = 'https://github.com/Stellagracy12';
};
const emailAddress = 'stellags12@gmail.com';
// ______________________________________________________________________________
return (
    <>
      <ul className='navlist'>
            <li><a href="./">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="skills">Skills</a></li>
            <li><a href="portfolio">Portfolio</a></li>
            <li><a href="contact">Contact</a></li>
      </ul>

    <header>
      <div className='nav'>
        <div className='logo'>
          <span>Stella Gracy</span>
        </div>
        <ul className={`navlist ${isMenuOpen ? 'open' : ''}`}>
        
        {React.Children.toArray(
          Array.from(document.querySelectorAll('section')).map((section, index) => (
            <li key={index}>
              <a href={`#${section.id}`}className={index === activeMenuItem ? 'active' : ''}
                onClick={() => handleMenuItemClick(index)}>
                {section.id}
              </a>
            </li>
          ))
        )}
      </ul>
      <div id='menu-icon' className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} onClick={handleMenuClick}>
      <IoMenuSharp /> </div>
      </div>
    </header>
    <section id='home' className='home'>
      <div className='home-content scroll-scale' data-aos="zoom-in"  data-aos-duration="3000" data-aos-once="true">
        <h1>Hi! I'm Stella Gracy</h1>
        <div className='change-text'>
          <h3>And I,m</h3>
          <h3>Full Stack Developer</h3>
          <h3>
            <span className='word '>Web Developer</span>
            <span className='word'>Full stack Developer</span>
          </h3>
        </div>
        <p>I'm a Full stack developer with knowledge in web development& design . i'm looking to develop my skills & learn from every opportunity in the dynamic world of web development."</p>
        <div className='info-box'>
          <div className='email-info'>
            <h5>Email:</h5>
            <span>stellags12@gmail.com</span>
          </div>
        </div>
        <div className='btn-box'>
          <a href="/resume.pdf" className='btn'>Download CV</a>
          <a href="#" className='btn'>Hire Me Now</a>
        </div>
        <div className='social-icons'>
          <a href="https://github.com/Stellagracy12"onClick={handleClicklGit}><FaGithub /></a>
          <a href="#"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/stellagracy1210" onClick={handleClicklLink}><FaLinkedin /></a>
          <a href=""><TfiEmail /></a>
        </div>
      </div>
      <div  className='home-image scroll-scale' data-aos="zoom-in"  data-aos-duration="3000" data-aos-once="true">
        <div  className='img-box  '>
          <img src="photo.jpeg" alt="" />
        </div>
    </div>
  </section>
  {/* ABOUT */}
  <section id='about' className='about'>
    <div  className="img-about scroll-scale " data-aos="zoom-in"  data-aos-duration="3000" data-aos-once="true">
      <img src="my2.jpeg" alt="resume" />
    </div>
    <div className='about-content scroll-scale'  data-aos="zoom-in"  data-aos-duration="3000" data-aos-once="true">
      <span>Let me introduce myself</span>
      <h2>About Me</h2>
      <h3>A story of good</h3>
      <p>Hi, I'm Stella Gracy S,a recently graduate in B.E Electronics & Communication Engineering and new full stack developer eager to begin my career in web development.
        I love building websites and apps and am ready to learn and grow in this exciting field.</p>
      <div className="btn-box">
        <a href="#" className='btn'>Read More</a>
      </div>
    </div>
  </section>
  {/* {skill} */}
  <section id="skill" className="skill">
    <div className="main-text">
      <span>Technical </span>
      <h2>My Skills</h2>
    </div>
    <div className="skill-main">
      <div className="skill-left"data-aos="fade-right"  data-aos-duration="3000" data-aos-once="true">
        <h3>Technical skills</h3>
        <div className="skill-bar">
          <div className="info">
            <p>HTML</p>
            <h5>90%</h5>
          </div>
          <div className="bar">
            <span className='html'></span>
          </div>
        </div>
        <div className="skill-bar">
          <div className="info">
            <p>CSS</p>
            <h5>85%</h5>
          </div>
          <div className="bar">
            <span className='css'></span>
          </div>
        </div>
        <div className="skill-bar">
          <div className="info">
            <p>JAVA SCRIPT</p>
            <h5>76%</h5>
          </div>
          <div className="bar">
            <span className='javascript'></span>
          </div>
        </div>
        <div className="skill-bar">
          <div className="info">
            <p>REACT</p>
            <h5>74%</h5>
          </div>
          <div className="bar">
            <span className='react'></span>
          </div>
        </div>
      
        <div className="skill-bar">
          <div className="info">
            <p>MYSQL</p>
            <h5>68%</h5>
          </div>
          <div className="bar">
            <span className='mysql'></span>
          </div>
        </div>
        <div className="skill-bar">
          <div className="info">
            <p>Node js</p>
            <h5>70%</h5>
          </div>
          <div className="bar">
            <span className='express'></span>
          </div>
        </div>
        <div className="skill-bar">
          <div className="info">
            <p>PYTHON</p>
            <h5>45%</h5>
          </div>
          <div className="bar">
            <span className='python'></span>
          </div>
        </div>
      </div>
      {/* <div className="skill-right"data-aos="fade-left"  data-aos-duration="3000" data-aos-once="true">
        <h3> professionalskills</h3>
         <div className="professional">
          <div className="box">
            <div className="circle"data-dots="60" data-percent="90"></div>
            <div className='text'>
              <big>90%</big>
              <small>Team Work</small>
            </div>
          </div>
          <div className="box">
            <div className="circle"data-dots="60" data-percent="80"></div>
            <div className='text'>
              <big>75%</big>
              <small>Creativity</small>
            </div>
          </div>
          <div className="box">
            <div className="circle"data-dots="80" data-percent="90"></div>
            <div className='text'>
              <big>73%</big>
              <small>Adaptability</small>
            </div>
          </div>
          <div className="box">
            <div className="circle"data-dots="80" data-percent="90"></div>
            <div className='text'>
              <big>90%</big>
              <small>Team Work</small>
            </div>
          </div>
        </div>  */}
         {/* <div className="professional">
      {points.map((boxPoints, index) => (
        <div key={index} className="box">
          <div className="circle" data-dots={boxPoints.length} data-percent="90">
            {boxPoints}
          </div>
          <div className='text'>
            <big>70%</big>
            <small>Team Work</small>
          </div>
        </div>
        
      ))}
    </div>
  </div> */}
  </div> 
  </section>
  {/* {project} */}
  <section id='project' className='project'>
    <div className="main-text">
      <span>what i do</span>
      <h2>Latest Projects</h2>
    </div>
    <div  className="portfolio-gallery scroll-top"data-aos="fade-up"  data-aos-duration="2000" data-aos-once="true" >
      <div className="port-box">
        <div className="port-image">
          <img src="ss1.png" alt="" />
        </div>
        <div className="port-content">
          <h3>E-commerce</h3>
         <div className="po-btn"> <button>HTML</button><button>CSS</button></div>
          <p>Mixfashion is an e-commerce website built using HTML and CSS. It serves as a platform for users to explore and purchase a variety of fashion items</p>
          <a href="http://127.0.0.1:5500/index.html"><TbExternalLink /></a>
        </div>
      </div>
      <div className="port-box">
        <div className="port-image">
          <img src="ss-js.png" alt="" />
        </div>
        <div className="port-content">
          <h3>Banking</h3>
          <div className="po-btn"> <button>HTML</button><button>CSS</button><button>javascript</button></div>
          <p>Developed a banking project using JavaScript, featuring login authentication, money transfer, loan request, and account management functionalities.</p>
          <a href="#"><TbExternalLink /></a>
        </div>
      </div>
      <div className="port-box">
        <div className="port-image">
          <img src="ss2.png" alt="" />
        </div>
        <div className="port-content">
          <h3>E-commerce</h3>
          <div className="po-btn"> <button>HTML</button><button>CSS</button><button>javascript</button></div>
          <p>The next e-commerce website will be built using JavaScript.Powers an upcoming e-commerce site, enabling dynamic features like, cart management, and user authentication for enhanced user experience</p>
          <a href="http://127.0.0.1:5500/index.html"><TbExternalLink /></a>
        </div>
      </div>
      <div className="port-box">
        <div className="port-image">
          <img src="ssqr.png" alt="" />
        </div>
        <div className="port-content">
          <h3>QR Code </h3>
          <div className="po-btn"><button>REACTJS</button></div>
          <p> Developed a QR code generator in ReactJS, empowering users to generate personalized QR codes for various purposes seamlessly within their web applications.</p>
          <a href="#"><TbExternalLink /></a>
        </div>
      </div>
      <div className="port-box">
        <div className="port-image">
          <img src="ss-3.png" alt="" />
        </div>
        <div className="port-content">
          <h3>E-commerce</h3>
          <div className="po-btn"> <button>HTML</button><button>CSS</button><button>REACTJS</button></div>
          <p>Created an Evara e-commerce website with React, offering users an immersive shopping experience with seamless navigation, product display, and secure checkout functionalities.</p>
          <a href="#"><TbExternalLink /></a>
        </div>
      </div>
    </div>
    
  </section>
  {/* contact */}
  <section id='contact' className='contact'>
    <div className="main-text">
      <h2>CONTACT ME</h2>
    </div>
    <form action="#" data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true">
      <input type="text" placeholder='Your Name' />
      <input type="email" name="email"placeholder='Your Email'value={formData.email}onChange={handleChange}required/>
      <input type="number" name="password"placeholder='Your Password'value={formData.password}onChange={handleChange}required/>
      <textarea name="message"cols="30"rows="10"placeholder='Your Message'value={formData.message}onChange={handleChange}required></textarea>
      <div className="btn-box fromBtn">
        <button type="submit" className='btn' onClick={handleSubmit}>Send Message</button>
      </div>
    </form>
  </section>
  <footer>
    <p>Copyright || All Right Reservd</p>
    <a href="#home"><FaArrowUp /></a>
  </footer>

    </>
  )
}

export default Navbar