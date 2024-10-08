import React from 'react';
import Llogo from '../img/gdsc bracket left.svg';
import Rlogo from '../img/gdsc bracket right.svg';
import A from '../img/leads/1.png';
import Adi from '../img/leads/2.png';
import Ad from '../img/leads/3.png';
import Sh from '../img/leads/4.png';
import Sid from '../img/leads/5.png';
import P from '../img/leads/6.png';
import TeamCard from './TeamCard';

const Leads = () => {
    const profiles = [
        {
            img: "https://res.cloudinary.com/dqw4vtcul/image/upload/v1728379507/products/zzgas1wstrpw4sz1myd7.jpg",
            name: "Akash Ranjan",
            position: "GDSC Lead",
            description: "",
            linkedin: "https://linkedin.com/in/akash-ranjan",
            github: "https://github.com/akash-ranjan",
            instagram: "https://instagram.com/akash.ranjan",
            facebook: "",
            website: "",
            gmail: "2021ugee063@nitjsr.ac.in"
        },
        {
            img: Sh,
            name: "Shubham Kumar",
            position: "Creative & Socials Lead",
            description: "",
            linkedin: "https://linkedin.com/in/shubham-kumar",
            github: "https://github.com/shubham-kumar",
            instagram: "https://instagram.com/shubham.kumar",
            facebook: "",
            website: "",
            gmail: "shubham.kumar@example.com"
        },
        {
            img: Sid,
            name: "Sidharth Sharma",
            position: "Team Manager and Cloud Lead",
            description: "",
            linkedin: "https://linkedin.com/in/sidharth-sharma",
            github: "https://github.com/sidharth-sharma",
            instagram: "https://instagram.com/sidharth.sharma",
            facebook: "",
            website: "",
            gmail: "2021ugmm063@nitjsr.ac.in"
        },
        {
            img: Adi,
            name: "Aditya Gautam",
            position: "Android Lead",
            description: "",
            linkedin: "https://linkedin.com/in/aditya-gautam",
            github: "https://github.com/aditya-gautam",
            instagram: "https://instagram.com/aditya.gautam",
            facebook: "",
            website: "",
            gmail: "aditya.gautam@example.com"
        },
        {
            img: Ad,
            name: "Adarsh Tiwari",
            position: "Technical Lead",
            description: "",
            linkedin: "https://linkedin.com/in/adarsh-tiwari",
            github: "https://github.com/adarsh-tiwari",
            instagram: "https://instagram.com/adarsh.tiwari",
            facebook: "",
            website: "",
            gmail: "adarsh.tiwari@example.com"
        },
        {
            img: P,
            name: "Priyanshu Raj",
            position: "Event Lead",
            description: "",
            linkedin: "https://linkedin.com/in/priyanshu-raj",
            github: "https://github.com/priyanshu-raj",
            instagram: "https://instagram.com/priyanshu.raj",
            facebook: "",
            website: "",
            gmail: "priyanshu.raj@example.com"
        },
    ];

    return (
        <div className="container mx-auto px-4 mt-10">
            <div className="flex items-center justify-center">
                <img className="mr-4" src={Llogo} alt="left bracket" />
                <p className="font-Patrick sm:text-[48px] text-[24px] text-decoration-line: underline ">
                    Meet the Leads
                </p>
                <img className="ml-4" src={Rlogo} alt="right bracket" />
            </div>
            <br/><br/>
            <div className="grid grid-cols-1 md:grid-cols-3  grid-rows-2 gap-4">
                {profiles.map((person, index) => (
                    <TeamCard
                        key={index}
                        imageSrc={person.img}
                        Name={person.name}
                        Domain={person.description}
                        Description={person.position}
                        Linkedin={person.linkedin}
                        Github={person.github}
                        Instagram={person.instagram}
                        Facebook={person.facebook}
                        Website={person.website}
                        gmail={person.gmail}
                        islead="lead"
                    />
                ))}
            </div>
        </div>
    );
};

export default Leads;
