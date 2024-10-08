

  import HeroImage from '../img/Hero image.svg'

function Hero() {
    return (
        
      <div className="hero flex  sm:p-[100px] md:flex-nowrap flex-wrap justify-between flex-col items-center md:items-start">
        <div className="flex md:flex-nowrap  flex-wrap">
        <div className='flex flex-col md:w-[50%] '>
            <h1 className='font-Patrick sm:text-[110px] ml-0 text-[52px] sm:text-left sm:leading-[126.5px] leading-[59.8px] z-50'>Google Developer Student Club</h1>
            <h2 className='font-Lato sm:text-[32px] text-[24px] text-[#5F6368] sm:text-left sm:mt-[-15px] mt-[15px]'>NIT JAMSHEDPUR</h2>
            <br></br>
            <br></br>
            
        </div>
            
        <div className="sm:w-[50%] z-[2] flex items-end">
            <img src={HeroImage} alt='img'/>
        </div>
        </div>
        <div className='sm:w-[245.1px] sm:h-[71.21px] w-[50%] h-fit p-[10px] bg-[#4285F4] rounded-[20px] text-white sm:text-[24px] text-[16px] flex items-center justify-center mt-10'>
              <a href="https://gdsc.community.dev/national-institute-of-technology-nit-jamshedpur/" target="_blank" rel="noopener noreferrer">Join the Chapter</a> 
            </div>
        
      </div>
    );
  }
  
  export default Hero;