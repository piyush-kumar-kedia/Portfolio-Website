const hl = "font-semibold text-zinc-900";

export const projects = [
  {
    id: 1,
    title: "CourseHub",
    description: (
      <>
        A <span className={hl}>scalable student study-material platform</span>{" "}
        for PYQs, notes, and tutorials. Used by{" "}
        <span className={hl}>4000+ students</span> at IIT Guwahati. Helps
        learners <span className={hl}>find resources faster</span> and prepare
        more efficiently.
      </>
    ),
    tech: ["React", "Node.js", "AWS EC2", "Nginx", "MongoDB"],
    image: "coursehub.png",
    github: "https://github.com/Coding-Club-IITG/CourseHub",
    demo: "https://coursehub.codingclub.in/",
  },
  {
    id: 2,
    title: "IITG HAB",
    description: (
      <>
        <span className={hl}>Centralized mess management</span> for hostels:
        menus, attendance, and analytics for{" "}
        <span className={hl}>admins and students</span>.{" "}
        <span className={hl}>Cuts manual work</span> and improves meal tracking
        and reporting.
      </>
    ),
    tech: ["React", "Express", "Chart.js", "AWS"],
    image: "hab.jpg",
    github: "https://github.com/HABIITG/iitgHABapp",
    demo: "https://hab.codingclub.in/",
  },
  {
    id: 3,
    title: "RIC Website",
    description: (
      <>
        Official <span className={hl}>Research & Industrial Conclave</span> site
        with dynamic events and registration for{" "}
        <span className={hl}>participants and organizers</span>.{" "}
        <span className={hl}>Streamlines signup</span> and keeps engagement high
        during the conclave.
      </>
    ),
    tech: ["Django", "HTML", "CSS", "Python Anywhere"],
    image: "ric.jpg",
    github: "https://github.com/oonkarrr/RIC-25",
    demo: "https://www.ric.iitg.ac.in/",
  },
  {
    id: 4,
    title: "Campus Security Monitoring System",
    description: (
      <>
        <span className={hl}>Unified security monitoring</span> with timelines
        for <span className={hl}>campus administration</span>.{" "}
        <span className={hl}>Improves visibility</span>, response time, and
        insight from multi-modal data.
      </>
    ),
    tech: ["React", "Node.js", "PostgreSQL", "Google Charts", "JWT"],
    image: "sms.jpg",
    github: "https://github.com/piyush-kumar-kedia/Security-Monitoring-System",
  },
];
