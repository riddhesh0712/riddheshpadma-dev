import React from 'react'

// Components import
import { Navbar } from '../components/Navbar';
import { BottomNavbar } from '../components/BottomNavbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import BlogBtn from '../components/BlogBtn';
import '../style/home.css'

// Images Imports
import stone1 from '../assets/img/stone1.png'
import stone2 from '../assets/img/stone2.png'
import hero1 from '../assets/img/hero1.webp'
import flower from '../assets/img/flower.webp'

// Icons Import
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineDiscord } from "react-icons/ai";
import html from '../assets/img/skills/html.png'
import css from '../assets/img/skills/css.png'
import git from '../assets/img/skills/git.png'
import express from '../assets/img/skills/express.png'
import java from '../assets/img/skills/java.png'
import js from '../assets/img/skills/js.png'
import mongodb from '../assets/img/skills/mongodb.png'
import mysql from '../assets/img/skills/mysql.png'
import python from '../assets/img/skills/python.png'
import nodejs from '../assets/img/skills/nodejs.png'
import react from '../assets/img/skills/react.png'
import bootstrap from '../assets/img/skills/bootstrap.png'
import github from '../assets/img/skills/github.png'
import tailwind from '../assets/img/skills/tailwind.png'


export const Home = () => {
  return (
    <div className='flex flex-col'>
      {/* Menu Bars */}
      <Navbar />
      <BottomNavbar/>

        {/* Hero Section Starts */}
      <section id='home' className='text-white'>
          <div className='relative min-h-screen overflow-hidden'>
            <div className='absolute z-10 md:left-40 lg:left-[64] md:right-40 lg:right-[64] top-28 p-10'>
              <div className='py-8 my-10'>
                <span>I am Riddhesh Padma</span>
              </div>
              <div className='py-5 px-5 rounded-3xl backdrop-blur-md'>
                <h1 className='text-4xl font-bold sm:font-normal sm:text-6xl md:text-7xl lg:text-8xl '>MERN Developer</h1>
                <p className='text-2xl mt-10'>Crafting Full-Stack Solutions with MERN Excellence</p>
              </div>
            </div>
            <div className='absolute -z-10 right-[-200px] md:right-[-100px] top-[-150px] md:top-[-50px]'>
              <img src={stone1} alt="" className=''/>
            </div>
            <div className='absolute -z-10 left-[-300px] md:left-[-200px] bottom-[-100px] md:bottom-[-50px]'>
              <img src={stone2} alt="" />
            </div>
          </div>
      </section>
        {/* Hero section ends */}

        {/* Portfolio Section Starts */}
      <section id='portfolio' className='text-white px-10 py-16 lg:py-32'>
          <div className='secContainer'>
            <div className='subHeadSec'>
              <span>Portfolio</span>
            </div>
            <div className='flex-1'>
              <div>
                <h1 className='heading'>Tech & Some Magic</h1>
                <span className='text-9xl'>+0</span>
              </div>
              <div className=''>
                {/* TODO: Portfolio projects list or gallery       */}
              </div>
            </div>
          </div>
      </section>
        {/* Portfolio section ends */}

        {/* About Me Section Starts */}
      <section id='aboutme' className='text-white px-10 py-16 lg:py-32'>
          <div className='secContainer'>
            <div className='subHeadSec'>
              <span>About Me</span>
            </div>
            <div className='flex-1'>
              <div className='max-w-3xl'>
                <h1 className='heading'>Aproach and Philosophy</h1>
              </div>
              <div className='md:w-3/4 py-10'>
                <img src={hero1} alt="" className='rounded-2xl'/>
              </div>
              <div className='flex flex-col-reverse md:flex-row md:w-3/4'>
                <div className='p-5 md:p-0'>
                  <p className='md:pr-20 mb-4 text-sm'>I am <span className='font-bold'>Riddhesh Padma</span>, a dedicated <span className='font-bold'>full-stack developer</span> with a passion for creating innovative and efficient web applications. Having completed my diploma from Swami Vivekanand Institute of Technology, I am now pursuing a Bachelor's degree in Technology, which has further solidified my expertise in various programming languages and frameworks. </p>
                  <p className='md:pr-20 text-sm  mb-8 '>My enthusiasm for technology drives me to <span className='font-bold'>constantly learn and tackle complex challenges</span>. I am committed to delivering top-notch solutions and collaborating closely with clients to turn their ideas into reality, ultimately helping them grow their businesses through modern and effective software solutions.</p>
                  <button className='py-6 px-14 border-2 rounded-full hover:bg-white hover:text-black transition-all ease-in-out duration-300 hover:scale-[1.2]'>Download CV</button>
                </div>
                <div className='flex md:justify-start md:items-start p-5 md:p-0'>
                  <ul className='space-y-6'>
                    <li>Riddhesh Padma</li>
                    <li>+91 9226406267</li>
                    <li>riddheshpadma@gmail.com</li>
                    <li>Maharashtra, Solapur</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </section>
        {/* About me section ends */}

      {/* Skills Section starts */}
      <section id='skills' className='text-white px-10 py-16 lg:py-32'>
          <div className='secContainer'>
            <div className='subHeadSec'>
              <p>Skills</p>
            </div>
            <div className='flex 1'>   
              <div>
                <div>
                  <h1 className='heading'>Core Skills</h1>
                  <div className='py-16' >
                    <ul className='grid grid-cols-5 gap-4 gap-y-14'>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={html} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >HTML5</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={bootstrap} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >BOOTSTRAP</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={tailwind} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >TAILWIND</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={css} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >CSS</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={js} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >JAVASCRIPT</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={react} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >React.JS</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={nodejs} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >Node.JS</span>
                      </div>
                      
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={express} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >Express.JS</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={java} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >JAVA</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={python} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >PYTHON</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={mongodb} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >MONGODB</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={mysql} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >MySQL</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={git} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >GIT</span>
                      </div>
                      <div className="group relative inline-block">
                        <li className='skillIcon'><img src={github} alt="" /></li>
                        <span 
                          className='skillSpan'
                        >GITHUB</span>
                      </div>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1 className='text-3xl mb-4'>What I Do Best?</h1>
                  <p className='max-w-2xl'>As a dedicated and skilled full-stack developer, I excel in creating dynamic and responsive web applications. My expertise spans across various technologies and methodologies, enabling me to deliver high-quality solutions tailored to meet the unique needs of each project.</p>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* Skills section ends */}

        {/* Services section starts */}
      <section id='services' className='text-white px-10 py-16 lg:py-32 '>
          <div className='secContainer'>
            <div className='subHeadSec'>
              <span>Blogs</span>
            </div>
            <div className='flex-1'>
              <div className='max-w-3xl'>
                <h1 className='heading'>Tech & Some Magic</h1>
              </div>
              <div className='sm:w-3/4 py-14 md:py-20 space-y-28'>
                <div className='serviceCard'>
                  <div className='servFlex1'>
                    <h2 className='serviceHeading'>Lorem, ipsum dolor.</h2>
                    <div>
                      <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore blanditiis nihil ab. Facilis placeat veritatis id, eligendi incidunt deserunt architecto quia porro consectetur?</p>
                      <BlogBtn/>
                    </div>
                  </div>
                  <div className='servFlex2'>
                    <img src={flower} alt="" />
                  </div>
                </div>
                <div className='serviceCard'>
                  <div className='servFlex1'>
                    <h2 className='serviceHeading'>Lorem, ipsum dolor.</h2>
                    <div>
                      <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore blanditiis nihil ab. Facilis placeat veritatis id, eligendi incidunt deserunt architecto quia porro consectetur?</p>
                      <BlogBtn/>
                    </div>
                  </div>
                  <div className='servFlex2'>
                    <img src={flower} alt="" />
                  </div>
                </div>
                <div className='serviceCard'>
                  <div className='servFlex1'>
                    <h2 className='serviceHeading'>Lorem, ipsum dolor.</h2>
                    <div>
                      <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore blanditiis nihil ab. Facilis placeat veritatis id, eligendi incidunt deserunt architecto quia porro consectetur?</p>
                      <BlogBtn/>
                    </div>
                  </div>
                  <div className='servFlex2'>
                    <img src={flower} alt="" />
                  </div>
                </div>
                <div className='serviceCard'>
                  <div className='servFlex1'>
                    <h2 className='serviceHeading'>Lorem, ipsum dolor.</h2>
                    <div>
                      <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore blanditiis nihil ab. Facilis placeat veritatis id, eligendi incidunt deserunt architecto quia porro consectetur?</p>
                      <BlogBtn/>
                    </div>
                  </div>
                  <div className='servFlex2'>
                    <img src={flower} alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>
      </section>
        {/* Services section ends */}

       

        {/* Contact Me section starts */}
      <section id='contact' className='text-white px-10 py-16 lg:py-32'>
        <div className='secContainer'>
          <div className='subHeadSec'>
            <span>Connect Me</span>
          </div>
          <div className='flex-1'>
            <div className='max-w-3xl'>
              <h1 className='heading'>Just Say Hello!</h1>
            </div>
            <div className='md:w-3/4 py-10'>
              <img src={hero1} alt="" className='rounded-2xl'/>
            </div>
            <div className="max-w-3xl">
              <div>
                <div>
                  <h3 className="text-4xl font-semibold mb-2">Get in Touch</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
                <div>
                  
                  <p className="text-lg mb-4">Want to know more about me, have a project in mind or just want to say hi? Drop me a line and I'll get back as soon as possible.</p>
                </div>
                <div>
                <ul className="space-y-2">
                    <li>
                      <span className="font-semibold mr-2">Email:</span>
                      <a href="mailto:hello@example.com" className="text-primary hover:underline">
                        riddheshpadma@gmail.com
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold mr-2">Phone:</span>
                      <a href="tel:+123456789" className="text-primary hover:underline">
                        +91 922640 6267
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold mr-2">Location:</span>
                      <span>Godutai Gharkul, Solapur, Bharat</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <ContactForm />
                <div className='flex justify-center items-center p-10 mt-5'>
                  <ul className='flex justify-around w-full'>
                    <li>
                      <div className="group relative inline-block">
                        <button class="focus:outline-none">
                          <LuLinkedin size={36} className="btnSocial"/>
                        </button>  
                        <span 
                          className='btnSpan'
                        >LinkedIn</span>
                      </div>
                    </li>
                    <li>
                      <div class="group relative inline-block">
                        <button class="focus:outline-none">
                          <RiTwitterXFill size={36} className="btnSocial"/>
                        </button>  
                        <span 
                          className='btnSpan'
                        >X</span>
                      </div>
                    </li>
                    <li>
                      <div class="group relative inline-block">
                        <button class="focus:outline-none">
                          <LuGithub size={36} className="btnSocial"/>
                        </button>  
                        <span 
                          className='btnSpan'
                        >Github</span>
                      </div>
                    </li>
                    <li>
                      <div class="group relative inline-block">
                        <button class="focus:outline-none">
                          <BsInstagram size={36} className="btnSocial"/>
                        </button>  
                        <span 
                          className="btnSpan"
                        >Instagram</span>
                      </div>
                    </li>
                    <li>
                      <div class="group relative inline-block">
                        <button class="focus:outline-none">
                        <AiOutlineDiscord size={36} className="btnSocial"/>
                        </button>  
                        <span 
                          className="btnSpan"
                        >Discord</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </div>
  )
}
export default Home;