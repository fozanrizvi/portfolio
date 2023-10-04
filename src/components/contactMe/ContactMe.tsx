import { useEffect, useState } from "react";
import { Section } from "../shared/Section.styled";
//material icons
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "../shared/Button/Button";
import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: "AKIA3KCLQI6EH2NJ34OU",
  secretAccessKey: "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",
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>

      <div>
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
