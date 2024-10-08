
import styles from "./TeamCard.module.scss";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaEnvelope,
    
  } from "react-icons/fa";

const TeamCard = (props) => {
  const displayID = props.Description === "" ? "none" : "block";
  const leaddisplay=props.islead==="lead"? "":"rounded-full"
  const className=`m-auto md:h-[300px] md:w-[300px] h-[225px] w-[225px] object-cover rounded-full cursor-pointer`
  return (
    <div
      className={styles.core_mem}
      style={{ height: displayID === "none" ? "24rem" : "26rem" }}
    >
      <div className={styles.body}>
        <div className={styles.core_images}>
        <img
        className={className}
        src={props.imageSrc}
        alt={props.Name}
      />
        </div>
        <div className={styles.details}>
        <h2 className="text-center text-[32px] font-Patrick leading-[48px] cursor-pointer">{props.Name}</h2>
          <p className={styles.core_description} style={{ display: displayID }}>
            {props.Description}
          </p>
        </div>
        <p className={styles.core_mem_text}>{props.Domain}</p>
        <div className={styles.social_media_core}>

          {props.Website && (
            <a
              href={props.Website}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className={styles.socialicon} />
            </a>
          )}
          {props.Linkedin && (
            <a
              href={props.Linkedin}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className={styles.socialicon} />
            </a>
          )}
          {props.Facebook && (
            <a
              href={props.Facebook}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className={styles.socialicon} />
            </a>
          )}
          {props.Github && (
            <a
              href={props.Github}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className={styles.socialicon} />
            </a>
          )}
          {props.Instagram && (
            <a
              href={props.Instagram}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className={styles.socialicon} />
            </a>
          )}
            {props.gmail && (
            <a
            href={`mailto:${props.gmail}`}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope className={styles.socialicon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
