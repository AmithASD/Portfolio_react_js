import React from 'react'
import '../assesst/css/aboutcontent.css';
import { Link } from 'react-router-dom';
import Top from "../assesst/img/Me.jpg"

const AboutContent = () => {
  return (
    <>
      <div className='about-content-outer'>
          <div className='about'>
            <div className='about-left'>
              <h2 >Who Am I?</h2>
              <p >Im a  react front-end developer and laravel back-end developer.I create responsive secure websites for my clients & I create  secure software for my clients.</p>
              <Link to="/contact-us">
                <button className='btn btn-dark contact-btn'>Contact Me</button>
              </Link>
            </div>
            <div className='about-midle'>
              {/* <section class="about" id="about">
                    <div class="max-width">
                      <h2 class="title">About me</h2>
                      <h3 class="title1">-Who am I ?-</h3>
                      <div class="about-content">
                        <div class="column right">
                          <div class="tab-titles">
                            <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
                            <p class="tab-links" onclick="opentab('experience')">Experience</p>
                            <p class="tab-links" onclick="opentab('education')">Education</p>
                          </div>
                          <div class="tab-contents active-tab" id="skills">
                            <ul>
                              <li><span>Web Design</span><br></br>Designing Web Pages by using HTML, CSS, JS.</li>
                              <li><span>UI/UX Design</span><br></br>Designing UI/UX for Web Pages.</li>
                              <li><span>Photo Editing</span><br></br>Editing Photo by using Adobe Photoshop.</li>
                            </ul>
                          </div>
                          <div class="tab-contents" id="experience">
                            <ul>
                              <li><span>My Experience</span><br></br>I am a Designer of Web Sites, Blog Sites and also Desktop Software
                                Applications.</li>
                              <li><span>Job</span><br></br>#</li>
                              <li><span>Work</span><br></br>I'm Working in Fiverr online Platform.</li>
                            </ul>
                          </div>
                          <div class="tab-contents" id="education">
                            <ul>
                              <li><span>School</span><br> B3 C4 S1 for O/L
                                <br>Physics-S, Combined Mathematics-C, Chemistry-S for A/L.
                              </li>
                              <li><span>Higher Study</span><br></br>Bachelor of Science in Computer Science Degree.</li>
                              <li><span>Now</span><br></br>Degree completed but result pending..</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
              </section> */}
            </div>
            <div className='about-right'>
                <img src={Top} alt='image'></img>
            </div>
          </div>
      </div>
    </>
  )
}

export default AboutContent
