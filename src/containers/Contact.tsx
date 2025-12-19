import Heading from "../components/Heading";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub size={28} />,
      url: "https://github.com/aaron-dudue99",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={28} />,
      url: "https://linkedin.com/in/duduzile-aaron-sibanda",
    },
    {
      name: "Email",
      icon: <MdEmail size={28} />,
      url: "mailto:duduzilesibanda99@gmail.com",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={28} />,
      url: "https://twitter.com/aarondudue99",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={28} />,
      url: "https://wa.me/263776712092",
    },
  ];
  return (
    <section id="contact" className="w-full">
      <Heading title="Don't be A Stranger" emoji="👋🏽" />

      <p
        style={{ color: "var(--color-text-muted)" }}
        className="mt-6  leading-relaxed"
      >
        Get in Touch
      </p>

      <div className="flex justify-start items-center gap-8 py-4 flex-wrap">
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
