import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          tiltOptions={{ max: 45, scale: 1.0, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex *:justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", ",  0.1, 1")}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        Capable of analyzing cyber security in Windows and Linux environments, protecting computer systems and networks from cybercriminals, identifying threats and monitoring network traffic for security incidents.
Focused on conducting assessments and penetration testing across diverse systems/networks for robust cybersecurity measures.
Innate ability to lead and collaborate closely with cross-functional technical teams to achieve collective goals and shared visions.
Expertise in analytical thinking, attention to detail, problem-solving, communication, and risk assessment acquired in medicine translates seamlessly to cybersecurity for robust protection and strategic decision-making.
{' '}
        <a href="https://www.linkedin.com/in/kostace-kyser-0172b7207" target="_blank" rel="noopener noreferrer">
          athenahealth
        </a>{' '}
        I'm passionate about building products that are scalable, maintainable, and user-friendly.
        I'm also passionate about learning new technologies and frameworks.
        I'm currently researching the many facets of social engineering.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

/* higher order component*/
export default SectionWrapper(About, "about");
