const hl = "font-semibold text-zinc-900";

export const projects = [
    {
    id: 1,
    title: "CourseHub",
    description: (
      <>
        A <span className={hl}>full-stack academic platform</span> used by{" "}
        <span className={hl}>4000+ students</span> at IIT Guwahati for accessing
        PYQs, lecture slides, tutorials, and study resources. Features{" "}
        <span className={hl}>role-based content management</span> and a scalable
        deployment pipeline using AWS and CI/CD.
      </>
    ),
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS EC2",
      "Nginx",
    ],
    image: "coursehub2.png",
    github: "https://github.com/Coding-Club-IITG/CourseHub",
    demo: "https://coursehub.codingclub.in/",
  },
  {
  id: 2,
  title: "HABit",
  description: (
    <>
      Developed the <span className={hl}>web/admin panel</span> for IIT
      Guwahati's hostel management system, used across{" "}
      <span className={hl}>13 hostels</span> and supporting{" "}
      <span className={hl}>6000+ daily users</span>. Enables mess tracking,
      complaint management, and hostel analytics for admins and wardens.
    </>
  ),
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AWS EC2",
    "Nginx",
  ],
  image: "hab.png",
  github: "https://github.com/HABIITG/iitgHABapp",
  demo: "https://hab.codingclub.in/",
},
  {
  id: 3,
  title: "RIC Website",
  description: (
    <>
      Served as a <span className={hl}>core member of web operations</span> for
      the official Research & Industrial Conclave website, handling{" "}
      <span className={hl}>1.2M+ requests</span> with peaks of{" "}
      <span className={hl}>430K+ hits/month</span>. Built dynamic event and
      registration modules for participants and organizers.
    </>
  ),
  tech: [
    "Django",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "PythonAnywhere",
  ],
  image: "ric.jpg",
  github: "https://github.com/oonkarrr/RIC-25",
  demo: "https://www.ric.iitg.ac.in/",
},
 {
  id: 4,
  title: "Campus Security Monitoring System",
  description: (
    <>
      Built a <span className={hl}>real-time security monitoring dashboard</span>{" "}
      for tracking campus activity across CCTV logs, WiFi data, and card swipes.
      Developed interactive timelines, anomaly alerts, and visualization tools
      for <span className={hl}>security analytics and incident monitoring</span>.
    </>
  ),
  tech: [
    "React.js",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "JWT",
    "Tailwind CSS",
  ],
  image: "sms.jpg",
  github: "https://github.com/piyush-kumar-kedia/Security-Monitoring-System",
}
];
