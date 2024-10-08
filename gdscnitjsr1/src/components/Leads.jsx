import React from 'react';
import Llogo from '../img/gdsc bracket left.svg';
import Rlogo from '../img/gdsc bracket right.svg';
import A from '../img/leads/1.jpg';
import Adi from '../img/leads/2.jpeg';
import Ad from '../img/leads/3.jpg';
import Sh from '../img/leads/4.jpg';
import Sid from '../img/leads/5.png';
import P from '../img/leads/6.jpeg';
import TeamCard from './TeamCard';

const Leads = () => {
    const profiles = [
        {
            img: A,
            name: "Mahak Gupta",
            position: "GDG Lead",
            description: "",
            linkedin: "https://www.linkedin.com/in/mahak-gupta-366b68201/",
            github: "https://github.com/Mahak-G",
            instagram: "",
            facebook: "",
            website: "",
            gmail: "mg.gupta2001@gmail.com"
        },
        {
            img: Sh,
            name: "Prachi Samuel",
            position: "Social Media Lead",
            description: "",
            linkedin: "https://www.linkedin.com/in/prachi-samuel-a7722624a",
            github: "https://github.com/prachisamuel",
            instagram: "",
            facebook: "",
            website: "",
            gmail: "prachisamuelofficial@gmail.com"
        },
        {
            img: Ad,
            name: "Aanchal Sikarwar",
            position: "Event Management Lead",
            description: "",
            linkedin: "https://www.linkedin.com/in/aanchal-sikarwar-711223258",
            github: "https://github.com/Aanchal2004",
            instagram: "",
            facebook: "",
            website: "",
            gmail: "aanchal3104@gmail.com"
        },
        
        {
            img: P,
            name: "Mayank Raj",
            position: "Technical Lead",
            description: "",
            linkedin: "https://www.linkedin.com/in/mnkraj",
            github: "https://github.com/mnkraj",
            instagram: "",
            facebook: "",
            website: "",
            gmail: "mayankraj7100@gmail.com"
        },
        {
            img: Adi,
            name: "Anamika Malakar",
            position: "PR Lead",
            description: "",
            linkedin: "https://www.linkedin.com/in/anamika-malakar-320111147",
            github: "https://github.com/Anamika2416",
            instagram: "https://www.instagram.com/_anamika0608_?igsh=MTdrbG13bnQ4YzJuaA==",
            facebook: "",
            website: "",
            gmail: "anamikamalakar777@gmail.com"
        },
        {
            img: Sid,
            name: "Sagnik Patwari",
            position: "Content Management Lead",
            description: "",
            linkedin: "https://www.linkedin.com/in/sagnikpatwari",
            github: "",
            instagram: "https://www.instagram.com/sagnikpatwari",
            facebook: "",
            website: "",
            gmail: "sagnikpatwari@gmail.com"
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
