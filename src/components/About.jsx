import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Dedicated and performance-driven <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/karan-modi-3b6616105/' target='_blank'>IT Professional</a> flexible for any IT work with 8+
                  years of extensive experience in developing new system structures, configuring
                  managing servers, and performing diagnostic tests. Possessing good knowledge
                  Web Development, Marketing with well-developed communication skills, excellent
                  problem-solving skills, and significant ability to perform well under pressure.
              <br />
              🎤🎶Beyond my IT career, I have a deep love for <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.smule.com/ModiKaran' target='_blank'>Singing</a>. Music has always been a source of inspiration and creativity for me, helping me maintain a balanced and positive mindset. Whether performing or simply enjoying melodies, singing allows me to express myself and connect with others on a different level.
              </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1uIdrqVzP8jAIHzvkRsz6pPIcdIBvXDnx/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;