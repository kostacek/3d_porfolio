
import {
  mobile,
  backend,
  invest,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  osint,
  nodejs,
  mongodb,
  git,
  nist,
  team,
  docker,
  meta,
  citizenclinic,
  pacificdental,
  midatlantic,
  uncc,
  carrent,
  jobit,
  reverseE,
  tripguide, 
  SE,
  mitre,
  service,
  vishing,
  desas,
  freelancer,
  cons,
  mal,
  train,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Vulnerability Assessment",
    icon: mitre,
  },
  {
    title: "Penetration Testing",
    icon: mobile,
  },
  {
    title: "Social Engineering",
    icon: backend,
  },
  {
    title: "Digital Forensics Investigation",
    icon: invest,
  },
  {
    title: "Reverse Engineering",
    icon: reverseE,
  },
  {
    title: "Software Engineering",
    icon: SE,
  },
  {
    title: "Team Training",
    icon: team,
  },
  {
    title: "Cyber Intelligence",
    icon: service,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "osint",
    icon: osint,
  },
  {
    name: "Mitre ATT&CK Framework",
    icon: mitre,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "NIST",
    icon: nist,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: invest,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Security Consultant",
    company_name: "Citizen Clinic",
    icon: citizenclinic,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "The Citizen Clinic, supports politically targeted organizations in defending themselves against online threats.",
      "Developed and implemented a comprehensive security awareness and training program, resulting in a 50% reduction in security incidents caused by human error.",
      "Conducted security risk assessments for multiple clients, identifying critical vulnerabilities and recommending corrective actions that led to a 30% improvement in overall security posture.",
      "Collaborated with cross-functional teams to implement security best practices and ensure compliance with industry regulations, resulting in a 25% reduction in audit findings.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "University of North Carolina at Charlotte",
    icon: uncc,
    iconBg: "#383E56",
    date: "Jan 2019 - Aug 2023",
    points: [
      "Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems." , 
      "Software Engineering Principles, Web Development, Project Management, Operating Systems, Computer Networks, Cybersecurity, and Digital Forensics.",
      "Utilized engineering principles in software development to tailor systems to meet the specific needs of individual clients.",
      "Developed and maintained web applications using React.js, Node.js, and MongoDB.",
      "Implemented responsive design and ensured cross-browser compatibility."
      
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Freelanace",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Optimizing web applications for maximum speed and scalability.",
    ],
  },
  {
    title: "Regional | Senior | Managing | Practitioner",
    company_name: "Healthcare Industry",
    icon: midatlantic,
    iconBg: "#E6DEDD",
    date: "Sept 2002 - Present",
    points: [
      "Leading and training multidisciplinary teams, designing and implementing innovative solutions and driving quality improvement initiatives.",  
      "Played a pivotal role in shaping the skills and competencies of regional staff.",
      "Responsible for designing delivering, and evaluating effective training programs that align with company’s standards and objectives.",
      "Facilitate engaging training sessions using a variety of instructional techniques and formats."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Good Leader!",
    name: "Breck S.",
    designation: "Director of Field Operations",
    company: "Affordable Dentures & Implants",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Great Student.",
    name: "Kevin P.",
    designation: "CCI Director",
    company: "University of North Carolina at Charlotte",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Thank you all for the great work and insight provided.",
    name: "Revella N.",
    designation: "Executive Director",
    company: "Confidential Client",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    testimonial:
      "Very smart...I will leave the door open.",
    name: "Fabio N.",
    designation: "AIG",
    company: "Global Director of Frontend Development",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
    "An excellent problem solver.",
    name: "Richard S.",
    designation: "Director",
    company: "Mid Atlantic",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
    "Brilliant! I am very impressed with his work and would highly recommend him to anyone looking for a specialist in the field of cybersecurity.",
    name: "Bryana K.",
    designation: "Legal Professional",
    company: "LPL Financial",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const projects = [
  {
    name: "Security Awareness Training Program",
    description:
      "SEC is a resource for people teaching digital security individuals to heighten awareness. This resource will help your community learn about digital security.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: train,
    source_code_link: "https://www.securityeducationcompanion.org/",
  },
  {
    name: "Incident Response Plan",
    description:
      "The goal of an IRP is to minimize damage, reduce recovery time and costs, and mitigate the risks associated with the incident.",
    tags: [
      {
        name: "Office 365",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: desas,
    source_code_link: "https://github.com/kostacek/IRP/blob/main/Incident_Response_Checklist.docx",
  },
  {
    name: "Malware Analysis",
    description:
      "The project was to analyze the malware and understand its functionality.",
    tags: [
      {
        name: "shell",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "MinGW",
        color: "pink-text-gradient",
      },
    ],
    image: mal,
    source_code_link: "https://github.com/kostacek/Malware",
  },
  {
    name: "Hacking the Human",
    description:
      "This initiative examines the different methods attackers use to target human weaknesses and circumvent security measures.",
    tags: [
      {
        name: "mitre att&ck",
        color: "blue-text-gradient",
      },
      {
        name: "osint",
        color: "green-text-gradient",
      },
      {
        name: "nist",
        color: "white-text-gradient",
      },
    ],
    image: vishing,
    source_code_link: "https://www.youtube.com/watch?v=lc7scxvKQOo",
  },
];

export { services, technologies, experiences, testimonials, projects };