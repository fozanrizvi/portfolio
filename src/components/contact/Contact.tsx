import { useState, ChangeEvent, FormEvent } from "react";
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
    setFormData((prev) => ({
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
    <section id="contactMe" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-2 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Let's Work Together
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create something amazing together.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 bg-secondary/20 border border-border rounded-lg hover:border-accent-1 hover:bg-secondary/30 smooth-transition group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-1 to-accent-2 rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition shadow-lg shadow-accent-1/30">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-1 mb-1">Email</h4>
                  <a href="mailto:fozanrizvi@gmail.com" className="text-text-secondary hover:text-accent-1 smooth-transition">
                    fozanrizvi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary/20 border border-border rounded-lg hover:border-accent-2 hover:bg-secondary/30 smooth-transition group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-2 to-accent-1 rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition shadow-lg shadow-accent-2/30">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.268.594.742 1.59 1.894 2.742 1.153 1.153 2.148 1.627 2.742 1.894l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-2 mb-1">Phone</h4>
                  <a href="tel:+17142490286" className="text-text-secondary hover:text-accent-2 smooth-transition">
                    714 249 0286
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary/20 border border-border rounded-lg hover:border-accent-1 hover:bg-secondary/30 smooth-transition group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-1 via-accent-2 to-accent-1 rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition shadow-lg shadow-accent-1/30">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-accent-1 mb-1">Location</h4>
                  <p className="text-text-secondary">San Francisco, CA - Open to remote opportunities worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/fozanrizvi"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 border border-border rounded-lg hover:border-accent-1 hover:from-gray-600 hover:to-gray-800 hover:shadow-lg hover:shadow-accent-1/30 smooth-transition group"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 smooth-transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/fozanrizvi"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 border border-border rounded-lg hover:border-accent-2 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/30 smooth-transition group"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 smooth-transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/fozanrizvi"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 border border-border rounded-lg hover:border-accent-1 hover:from-sky-300 hover:to-sky-500 hover:shadow-lg hover:shadow-sky-400/30 smooth-transition group"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 smooth-transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7-2.25 1.25-7 0-7 0s1.5-5 5.5-7.5z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/fozanrizvi"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 border border-border rounded-lg hover:from-pink-400 hover:via-red-400 hover:to-yellow-400 hover:shadow-lg hover:shadow-pink-500/30 smooth-transition group"
              >
                <svg className="w-6 h-6 text-white group-hover:scale-110 smooth-transition" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" fill="currentColor"></path>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-text-primary font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1/50 smooth-transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-text-primary font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1/50 smooth-transition"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-text-primary font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project or inquiry subject"
                required
                className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1/50 smooth-transition"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-text-primary font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-1 focus:ring-1 focus:ring-accent-1/50 smooth-transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : submitted ? "✓ Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
