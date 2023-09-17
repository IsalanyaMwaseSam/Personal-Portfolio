import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p style={{textAlign: "justify"}}>In the ever-evolving world of technology, adaptability and expertise are paramount. My skill set is not just a list of tools; it's a reflection of my commitment to mastering the art of software development. With a blend of technical prowess, creativity, and a passion for problem-solving, I'm equipped to tackle a wide range of challenges.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>Programming Languages</h5>
                                <img src={meter3} alt="Work" />
                                <p>JavaScript, Python</p>
                            </div>
                            <div className="item">
                                <h5> Web Development</h5>
                                <img src={meter3} alt="Work" />
                                <p>HTML5, CSS3, Responsive Web Design, Front-End Frameworks(React), Back-End Frameworks(Node.js, Django)</p>
                            </div>
                            <div className="item">
                                <h5>Database Management</h5>
                                <img src={meter2} alt="Work" />
                                <p>SQL, PostgreSQL</p>
                                
                            </div>
                            <div className="item">
                                <h5>Versioin Control</h5>
                                <img src={meter1} alt="Work" />
                                <p>Git/Github</p>  
                            </div>
                            <div className="item">
                                <h5>Soft Skills</h5>
                                <img src={meter1} alt="Work" />
                                <p>Communication, Collaboration, Time management, Problem solving</p>  
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Work" />
    </section>
  )
}
