import React from "react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import Button from "./Button";
import ContactGroup from "./ContactGroup";
import HeadingBubble from "./HeadingBubble";

const Contact = () => {
  const socials = [
    {
      name: "github",
      icon: <SiGithub color="#e6fdf9" fontSize="1.8rem" />,
      link: "https://github/aaron-dudue99",
    },
    {
      name: "twitter",
      icon: <SiTwitter color="#e6fdf9" fontSize="1.8rem" />,
      link: "https://twitter.com/aaron_dudue99",
    },
    {
      name: "linkedin",
      icon: <SiLinkedin color="#e6fdf9" fontSize="1.8rem" />,
      link: "https://www.linkedin.com/in/duduzile-aaron-sibanda-104a53197",
    },
  ];

  const text_area = {
    rows: 5,
    cols: 10,
  };

  return (
    <div className="bg-black w-full ">
      <div className="grid grid-cols-2 items-center gap-8 py-16 h-full">
        <div>
          <div>
            <HeadingBubble alignment="left" />
            <h2 className="font-serif text-4xl font-bold text-green-100">
              Contact Me
            </h2>
            <p className="text-white-text">
              I'd love to hear from you! Please fill out the form below and I'll
              get back to you as soon as possible
            </p>
          </div>

          <form className="mt-10 w-96">
            <div className="flex flex-col mb-6">
              <label htmlFor="name" className="text-white-text">
                YOUR NAME (required)
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="outline-none p-1 "
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="text-white-text">
                EMAIL ADDRESS (required)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="outline-none p-1 "
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="subject" className="text-white-text">
                SUBJECT
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="outline-none p-1 "
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="name" className="text-white-text">
                YOUR MESSAGE
              </label>
              <textarea
                name=""
                id=""
                cols={text_area.cols}
                rows={text_area.rows}
                className="outline-none p-1 mb-4"
              ></textarea>
            </div>
            <Button title="Send Message" />
          </form>
        </div>
        <div className="flex flex-col gap-10">
          <ContactGroup type="email" detail="duduzilesibanda99@gmail.com" />
          <ContactGroup type="phone" detail="+263776712092 / +263712977556" />
          <div className="flex flex-col justify-end items-end gap-2">
            <h4 className="text-lg font-serif text-green-500 uppercase font-semibold">
              socials
            </h4>
            <div className="flex w-1/5 justify-between items-center mb-2">
              {socials.map((social) => (
                <a href="" key={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="bg-green-700 w-40 h-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
