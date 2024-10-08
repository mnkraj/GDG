

import Llogo from '../img/gdsc bracket left.svg'
import Rlogo from '../img/gdsc bracket right.svg'
import Image from '../img/image.png'

function About() {
    return (
      <div className="About flex flex-col items-center md:pl-[15%] md:pr-[15%] pl-[10%] pr-[10%]" id='about'>
        <div className="flex justify-center items-center">
        
<img src={Llogo}/>
<h1 className=" font-Patrick sm:text-[64px] text-[30px] " >About Us</h1>          
<img src={Rlogo}/>


            

        </div>
        <p className="sm:text-[24px] md:leading-[36px] text-[16px] font-Lato  text-[#5F6368] self-center mt-[44px]
">Welcome to Google Developer Student Club NIT Jamshedpur, a welcoming community for students interested in technology and personal growth. We provide workshops, hackathons, and events led by Google to help you learn from your peers, work on real-world problems, and enhance your skills. Whether you're a beginner or an experienced professional, everyone is invited to join us. We look forward to having you in our community!</p>
   <img src={Image} className="h-[328px] w-[388px] mt-[75px]  "/>
      </div>

    );
  }
  
  export default About;
