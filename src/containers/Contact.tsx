import Heading from "../components/Heading";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub size={28} />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={28} />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Email",
      icon: <MdEmail size={28} />,
      url: "mailto:your.email@example.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={28} />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={28} />,
      url: "https://wa.me/1234567890", // replace with your number
    },
  ];
  return (
    <section id="contact">
      <Heading title="Don't be A Stranger" emoji="👋🏽" />

      <p
        style={{ color: "var(--color-text-muted)" }}
        className="mt-6  leading-relaxed"
      >
        Get in Touch
      </p>

      <div className="flex justify-center items-center gap-8 py-4 bg-gray-900 ">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={contact.name}
            className="text-primary-100 hover:text-orange-400 transition-colors duration-200"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
