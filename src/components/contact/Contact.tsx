import { useState, ChangeEvent, FormEvent } from "react";
import {
  ContactSection,
  ContactContainer,
  SectionTitle,
  ContactContent,
  ContactInfo,
  InfoCard,
  SocialLinks,
  SocialLink,
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from "./Contact.styled";

import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
});

const ses = new AWS.SES({
  region: "us-east-2",
});

interface FormDataState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
              <div style="font-family: Arial, sans-serif;">
                <h2>New Message from ${formData.name}</h2>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Subject:</strong> ${formData.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${formData.message.replace(/\n/g, "<br>")}</p>
              </div>
            `,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `New Contact: ${formData.subject}`,
        },
      },
    };

    try {
      await ses.sendEmail(params).promise();
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Error sending email:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactSection id="contactMe">
      <ContactContainer>
        <SectionTitle>Let's Work Together</SectionTitle>

        <ContactContent>
          <ContactInfo>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
              Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create something amazing together.
            </p>

            <InfoCard>
              <div className="icon">📧</div>
              <div className="content">
                <h4>Email</h4>
                <p>
                  <a href="mailto:fozanrizvi@gmail.com">fozanrizvi@gmail.com</a>
                </p>
              </div>
            </InfoCard>

            <InfoCard>
              <div className="icon">📱</div>
              <div className="content">
                <h4>Phone</h4>
                <p>Available for calls & meetings</p>
              </div>
            </InfoCard>

            <InfoCard>
              <div className="icon">📍</div>
              <div className="content">
                <h4>Location</h4>
                <p>Open to remote opportunities worldwide</p>
              </div>
            </InfoCard>

            <SocialLinks>
              <SocialLink href="https://github.com/fozanrizvi" target="_blank" rel="noreferrer" title="GitHub">
                ⭐
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
                💼
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">
                ✈️
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
                📷
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project or inquiry subject"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? "Sending..." : submitted ? "✓ Sent!" : "Send Message"}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
