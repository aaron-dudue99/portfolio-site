import React from "react";
import {
  SiAngular,
  SiReact,
  SiLaravel,
  SiNestjs,
  SiFlutter,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiPostman,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import Button from "./Button";
import HeadingBubble from "./HeadingBubble";

const About = () => {
  const skills = [
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "React", icon: <SiReact /> },
    { name: "Tailwindcss", icon: <SiTailwindcss /> },
    { name: "NestJs", icon: <SiNestjs /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Mongo DB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Git SCM", icon: <SiGit /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "AdobeXD", icon: <SiAdobexd /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Illustrator", icon: <SiAdobeillustrator /> },
  ];

  return (
    <div className="w-full min-h-102">
      <div className="grid grid-cols-12 items-start gap-16 py-16 h-full">
        <div className="col-span-6 ">
          <div>
            <HeadingBubble alignment="left" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-green-100">
            My Skills and Tech
          </h2>
          <div className="grid gap-6 pt-12 grid-cols-4">
            {skills.map((skill) => {
              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-4 mb-6"
                >
                  <span className="text-green-300 text-2xl">{skill.icon}</span>
                  <p className="text-white-text">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-6 flex flex-col justify-between items-end ">
          <div className="flex flex-col justify-end items-end ">
            <HeadingBubble alignment="right" />
            <h2 className="font-serif text-4xl font-bold text-green-100 text-right">
              About Me
            </h2>
          </div>
          <p className="font-sans text-white pt-4 text-white-text text-justify mb-8">
            Hello! My name is Duduzile Aaron Sibanda, and I'm a Frontend and
            Mobile Developer with a passion for creating beautiful, functional
            websites and mobile applications. I have a couple of years of
            experience in the industry, and have worked on projects for a
            variety of clients. My expertise lies in developing user-friendly
            interfaces that are both visually appealing and easy to use. I'm
            also experienced in creating mobile applications for iOS and Android
            devices. <br />
            <br />
            I'm always looking for new challenges, projects and even job
            opportunities, so if you're looking for someone to help bring your
            project to life, please don't hesitate to get in touch!
          </p>

          <Button title="Contact Me" />
        </div>
      </div>
    </div>
  );
};

export default About;
