import React from 'react';
import { Link } from 'react-scroll';
import bracket from '../assets/bracket.png';

function Footer() {
  return (
    <div className='bg-gray-200 md:h-[40vh] h-[fit] text-gray-600 font-lato t font-normal '>
      <div className='flex justify-around md:flex-row flex-col'>
        <div className=''>
          <div className='flex justify-center mt-10'>
            <div>
              <img src={bracket} className='mt-1' alt='Bracket' />
            </div>

            <div>
              <p className='lato text-lg font-normal leading-8 '>
                Google Developer Student Club
              </p>
              <p className='text-xs'>National Institute of Technology Jamshedpur</p>
              <div className='mt-5'>
                <span>
                  <h2 className='font-lato text-sm font-normal'>
                    Google Developer Student Club is a Program
                  </h2>
                  <h2 className='font-lato text-sm font-normal'>Supported By Google Developers.</h2>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='flex  justify-center '>
            <div className='m-[20px] flex flex-col justify-between'>
              <Link className="mt-[20px]" to='about' spy={true} smooth={true} duration={500}>
                <h2>About Us</h2>
              </Link>
              <Link className="mt-[20px]" to='events' spy={true} smooth={true} duration={500}>
                <h2>Events</h2>
              </Link>
              <Link className="mt-[20px]" to='our-team' spy={true} smooth={true} duration={500}>
                <h2>Our Team</h2>
              </Link>
            </div>
            <div className='m-[20px] flex flex-col justify-between'>
              <Link className="mt-[20px]" to='socials' spy={true} smooth={true} duration={500}>
                <h2>Socials</h2>
              </Link>
              <Link className="mt-[20px]" to='gdsc-nitjsr' spy={true} smooth={true} duration={500}>
                <h2>GDSC NITJSR</h2>
              </Link>
              <Link className="mt-[20px]" to='about-gdsc' spy={true} smooth={true} duration={500}>
                <h2>About GDSC</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center mt-4 mb-5 bg-gray-200 '>
        <p>Made with ❤️ by GDSC NIT JSR </p>
        <p>Copyright ©2024, All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
