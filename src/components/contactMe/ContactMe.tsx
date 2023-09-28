import React from "react";
import { Section } from "../shared/Section.styled";

//material icons
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactMe = () => {
  return (
    <Section>
      <h1 id="contactMe">Contact Me</h1>
      <div>
        <PhoneIcon /> <h3>+1 714 249 0286</h3>
        <AlternateEmailIcon />
        <h3>fozanrizvi@gmail.com</h3>
        <a href="https://www.instagram.com/fozan.developer/">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/fozanrizvi/">
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/fozanrizvi">
          <TwitterIcon />
        </a>
      </div>
    </Section>
  );
};

export default ContactMe;
