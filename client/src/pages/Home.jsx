import React, { useState } from 'react'
import { Navbar } from '../components/Navbar';
import { BottomNavbar } from '../components/BottomNavbar';
import '../style/home.css'
import stone1 from '../assets/img/stone1.png'
import stone2 from '../assets/img/stone2.png'
import hero1 from '../assets/img/hero1.webp'
import marq1 from '../assets/img/marq4.webp'
import marq2 from '../assets/img/marq2.webp'
import marq3 from '../assets/img/marq3.webp'

import flower from '../assets/img/flower.webp'
import ContactForm from '../components/ContactForm';

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
                <h1 className='text-4xl font-bold sm:font-normal sm:text-6xl md:text-7xl lg:text-8xl '>Fullstack Developer & Flutter Developer</h1>
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
                  <p className='md:pr-20  mb-8 text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolore error! Voluptatibus cupiditate tempore mollitia commodi quo maxime obcaecati nisi aliquid harum vero eligendi consectetur, vel nemo molestiae at natus.</p>
                  <button className='py-6 px-14 border-2 rounded-full hover:bg-white hover:text-black transition-all ease-in-out duration-300'>Download CV</button>
                </div>
                <div className='flex md:justify-center md:items-center p-5 md:p-0'>
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

        {/* Services section starts */}
      <section id='services' className='text-white px-10 py-16 lg:py-32 '>
          <div className='secContainer'>
            <div className='subHeadSec'>
              <span>Services</span>
            </div>
            <div className='flex-1'>
              <div className='max-w-3xl'>
                <h1 className='heading'>Tech & Some Magic</h1>
              </div>
              <div className='sm:w-3/4 py-14 md:py-20 space-y-28'>
                <div className='serviceCard'>
                  <div className='servFlex1'>
                    <h2 className='serviceHeading'>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore blanditiis nihil ab. Facilis placeat veritatis id, eligendi incidunt deserunt architecto quia porro consectetur?</p>
                  </div>
                  <div className='servFlex2'>
                    <img src={flower} alt="" />
                  </div>
                </div>
                <div className='serviceCard'>
                  <div className='servFlex1'>
                    <h2 className='serviceHeading'>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore blanditiis nihil ab. Facilis placeat veritatis id, eligendi incidunt deserunt architecto quia porro consectetur?</p>
                  </div>
                  <div className='servFlex2'>
                    <img src={flower} alt="" />
                  </div>
                </div>
                <div className='serviceCard'>
                  <div className='servFlex1'>
                    <h2 className='serviceHeading'>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore blanditiis nihil ab. Facilis placeat veritatis id, eligendi incidunt deserunt architecto quia porro consectetur?</p>
                  </div>
                  <div className='servFlex2'>
                    <img src={flower} alt="" />
                  </div>
                </div>
                <div className='serviceCard'>
                  <div className='servFlex1'>
                    <h2 className='serviceHeading'>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore blanditiis nihil ab. Facilis placeat veritatis id, eligendi incidunt deserunt architecto quia porro consectetur?</p>
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

        {/* Follow me section */}
      <section>
          <div>
            <div>
              {/* TODO: An FOLLOW ME marquee */}
            </div>
            <div>
              {/* TODO: social media links */}
            </div>
          </div>
      </section>

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
                <div>
                  <h3 className="text-4xl font-semibold mb-2">Get in Touch</h3>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home;