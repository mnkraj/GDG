import React from 'react';
import swiggly1 from '../assets/swiggly1.jpg';
import leftbracket from '../assets/gdsc bracket left.jpg';
import rightbracket from '../assets/gdsc bracket right.jpg';
import github from '../assets/Github.jpg';
import instagram from '../assets/Instagram.jpg'
import linkedIn from '../assets/Linkedin.jpg'
import mail from '../assets/Mail.jpg'
import swiggly7 from '../assets/swiggly7.jpg'
import group from '../assets/Group.jpg'
import circle from '../assets/circle.jpg'
import rectangle from '../assets/rectangle.jpg'
import Llogo from '../img/gdsc bracket left.svg'
import Rlogo from '../img/gdsc bracket right.svg'

function Socials() {
  return (
    <div className='' id="socials">

<div className='absolute inset-0'>
  <img className="w-[112.19px] h-[110.66px] absolute  mt-[44.77px] transform rotate-31 z-[-1]" src={swiggly1} alt=''/>
</div>



<div className="flex justify-center items-center">
        
<img src={Llogo}/>
<h1 className=" font-Patrick sm:text-[64px] text-[30px] z-50 " >Socials</h1>          
<img src={Rlogo}/>


            

        </div>
 
 <div className='flex justify-center mt-[-30px]'>
    <p className=' sm:text-[24px] text-[16px] font-Lato z-[1] text-[#5F6368] self-center mt-[44px]'>
        Let’s stay in touch so that you don’t miss out on exciting updates.
       
          
        </p>   
      </div>

      <br/>
      <br/>
 
     
      

     <div className=''>
      <div className='flex justify-center mt-[20px] '>


<div className='relative'>
  <a href="https://github.com/GDSC-NIT-JSR" target="_blank" rel="noopener noreferrer">
    <img
      src={github}
      className='w-[49.56px] h-[49.34px]'
      
    />
  </a>
</div>

        <div className='relative' >
        <a href='https://www.instagram.com/gdsc_nitjsr/' target="_blank" rel="noopener noreferrer">
           <img src={instagram} className='w-[49.56px] h-[49.34px] ml-10'/>
             
        </a>
          
        </div>

        <div className='relative'>

        <a href='https://www.linkedin.com/company/gdsc-nit-jamshedpur/' target="_blank" rel="noopener noreferrer">
               <img src={linkedIn}  className='w-[49.56px] h-[49.34px] ml-10'/>     
        </a>
        </div>
        <div className='relative'>
        <a href='mailto:gdsc.nitjsr@gmail.com'>
     
                       <img src={mail}  className='w-[49.56px] h-[49.34px] ml-10' />

        </a>
        </div>

      </div>
     </div>
      
     
      
      

      <div className='flex  '>
        <div>
          <img src={swiggly7} className=' w-[220.62px] h-[180.73px]  '/>
        </div>
        <div className='' >
          <img src={group} className='w-[120px] h-[120] absolute right-0 top-[325px] ' />
        </div>
      </div>

       <div className=' absolute ml-[270px] mt-[-180px]'>
           <img src={circle} className="w-[78px] h-[79px] "  />
       </div>
    

    <div>
    <div className='absolute mt-[-315px] ml-[850px] '>
             <img src={rectangle} className='w-[43px] h-[38px]'/> 
    </div>
    
    </div>


      
    </div>
  );
}

export default Socials;
