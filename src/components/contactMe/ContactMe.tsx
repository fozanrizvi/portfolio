import { useEffect, useState } from "react";
import { Section } from "../shared/Section.styled";

//material icons
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import { SubmitButton } from "../shared/Button.styled";
import { SocialMedia } from "./ContactMe.styled";
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
      <h1>Contact Me</h1>
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
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/fozanrizvi/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/fozanrizvi"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
      </SocialMedia>
    </Section>
  );
};

export default ContactMe;
