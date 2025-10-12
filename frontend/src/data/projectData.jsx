export const projects = [
  {
    id: 1,
    title: "CourseHub",
    description: (
      <>
        A <span className="font-semibold text-amber-400">scalable student study-material platform</span> providing PYQs, lecture notes, and tutorials. 
        Used by <span className="font-semibold text-amber-400">4000+ students</span> at IIT Guwahati to streamline their learning. 
        Helps students <span className="font-semibold text-amber-400">quickly access relevant resources</span>, improve preparation efficiency, and enhance collaborative learning.
      </>
    ),
    tech: ["React", "Node.js", "AWS EC2", "Nginx", "MongoDB"],
    image: "coursehub.png",
    github: "https://github.com/Coding-Club-IITG/CourseHub",
    demo: "https://coursehub.codingclub.in/"
  },
  {
    id: 2,
    title: "IITG HAB",
    description: (
      <>
        <span className="font-semibold text-amber-400">Centralized mess management platform</span> for hostels, allowing menu updates, attendance tracking, and analytics. 
        Used by <span className="font-semibold text-amber-400">hostel admins and students</span> to optimize dining services. 
        <span className="font-semibold text-amber-400">Reduces manual workload</span>, ensures accurate meal tracking, and provides actionable insights for better management.
      </>
    ),
    tech: ["React", "Express", "Chart.js", "AWS"],
    image: "hab.jpg",
    github: "https://github.com/HABIITG/iitgHABapp"
  },
  {
    id: 3,
    title: "RIC Website",
    description: (
      <>
        Official <span className="font-semibold text-amber-400">Research & Industrial Conclave website</span> with dynamic event pages and real-time registration. 
        Used by <span className="font-semibold text-amber-400">participants and organizers</span> to manage events efficiently. 
        <span className="font-semibold text-amber-400">Simplifies event registration</span>, improves user engagement, and provides a seamless experience for attendees and organizers.
      </>
    ),
    tech: ["React", "Node.js"],
    image: "ric.jpg",
    github: "https://github.com/oonkarrr/RIC-25",
    demo: "https://www.ric.iitg.ac.in/"
  },
  {
    id: 4,
    title: "Campus Security Monitoring System",
    description: (
      <>
        <span className="font-semibold text-amber-400">Unified platform for campus security monitoring</span> and visualizing timelines. 
        Used by <span className="font-semibold text-amber-400">campus administration</span> to ensure safety and analyze events. 
        <span className="font-semibold text-amber-400">Enhances campus security</span>, enables quick incident response, and provides administrators with actionable insights from multi-modal data.
      </>
    ),
    tech: ["React", "Node.js", "PostgreSQL", "Google Charts", "JWT"],
    image: "sms.jpg",
    github: "https://github.com/piyush-kumar-kedia/Security-Monitoring-System"
  }
];
