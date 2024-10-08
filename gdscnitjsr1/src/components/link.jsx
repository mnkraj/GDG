import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Example = ({
  name,
  githublink,
  instagramlink,
  linkedinlink,
  facebooklink,
  xlink,
  gmail,
}) => {
  return (
    <div className="flex h-[40px] justify-center text-black relative z-50">
      <FlyoutLink
        href="#"
        FlyoutContent={() => (
          <ContactContent
            githublink={githublink}
            instagramlink={instagramlink}
            linkedinlink={linkedinlink}
            facebooklink={facebooklink}
            xlink={xlink}
            gmail={gmail}
          />
        )}
      >
        <h2 className="text-center text-[32px] font-Patrick leading-[48px] cursor-pointer">
          {name}
        </h2>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit z-50"
    >
      <a href={href} className="relative text-black">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-6 bg-white text-black shadow-lg z-50"
          >
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white z-50" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactContent = ({
  githublink,
  instagramlink,
  linkedinlink,
  facebooklink,
  xlink,
  gmail,
}) => {
  return (
    <div className="w-48 bg-white p-4 shadow-lg flex space-x-2 justify-center">
      {githublink && (
        <a
          href={githublink}
          className="text-black hover:text-neutral-950 transition-colors"
        >
          <FaGithub size={24} />
        </a>
      )}
      {instagramlink && (
        <a
          href={instagramlink}
          className="text-black hover:text-neutral-950 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
      )}
      {linkedinlink && (
        <a
          href={linkedinlink}
          className="text-black hover:text-neutral-950 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      )}
      {facebooklink && (
        <a
          href={facebooklink}
          className="text-black hover:text-neutral-950 transition-colors"
        >
          <FaFacebook size={24} />
        </a>
      )}
      {xlink && (
        <a
          href={xlink}
          className="text-black hover:text-neutral-950 transition-colors"
        >
          <FaTwitter size={24} />
        </a>
      )}
      {gmail && (
        <a
          href={`mailto:${gmail}`}
          className="text-black hover:text-neutral-950 transition-colors"
        >
          <FaEnvelope size={24} />
        </a>
      )}
    </div>
  );
};

export default Example;
