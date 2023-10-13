import { useEffect, useState } from "react";
import { Section } from "../shared/Section.styled";

//social icons
import instagram from "../../assets/images/icons/instagram.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import twitter from "../../assets/images/icons/twitter.svg";

import { SubmitButton } from "../shared/Button.styled";
import { SocialIcon, SocialMedia } from "./ContactMe.styled";
import { Input } from "../shared/Input.styled";
import { TextBox } from "../shared/Input.styled";
import { InputWrapper } from "../shared/Input.styled";
import { Label } from "../shared/Input.styled";

import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
});

const ses = new AWS.SES({
  region: "us-east-2",
});

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const params = {
      Source: "fozanrizvi@gmail.com",
      Destination: {
        ToAddresses: ["fozanrizvi@gmail.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
              <table>
                <tr>
                  <td>Name:</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td>Subject:</td>
                  <td>${subject}</td>
                </tr>
                <tr>
                  <td>Message:</td>
                  <td>${message}</td>
                </tr>
              </table>
            `,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject,
        },
      },
    };
    ses.sendEmail(params, (err) => {
      console.log(err);
    });
  };

  const data = {
    name,
    email,
    subject,
    message,
  };

  useEffect(() => {}, []);
  return (
    <Section id="contactMe">
      <h1>Get in touch!</h1>
      <div>
        <form style={{ textAlign: "left" }}>
          <InputWrapper>
            <Label>Name</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Email</Label>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Subject</Label>
            <Input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Message</Label>
            <TextBox
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <SubmitButton>Submit</SubmitButton>
          </InputWrapper>
        </form>
      </div>

      <SocialMedia>
        <a
          href="https://www.instagram.com/fozan.developer/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/fozanrizvi/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://twitter.com/fozanrizvi"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon src={twitter} alt="twitter" />
        </a>
      </SocialMedia>
    </Section>
  );
};

export default ContactMe;
