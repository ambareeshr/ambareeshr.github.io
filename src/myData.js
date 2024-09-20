// myData.js
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from 'react-icons/fa';


export const greeting = {
  title: "Ambareesh Ramakrishnan",
  logo_name: "Ambareesh",
  subTitle:
  "Senior Software Engineer passionate about building AI-powered applications and scalable systems. Experienced in full-stack development, machine learning, and data engineering. Always eager to tackle complex challenges and drive innovation in tech.",
};

export const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ambareeshr",
    icon: FaGithub,
    backgroundColor: "#181717",
    tooltipContent: "Explore my code repositories",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ambareesh-r",
    icon: FaLinkedinIn,
    backgroundColor: "#0077B5",
    tooltipContent: "Connect with me professionally",
  },
  {
    name: "Gmail",
    link: "mailto:xxxx@gmail.com",
    icon: FaEnvelope,
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
    tooltipContent: "Drop me an email",
  },
  {
    name: "Defensive Publications",
    link: "https://www.tdcommons.org/do/search/?q=Ambareesh&start=0&context=6488067&facet=",
    icon: FaFileAlt,
    backgroundColor: "#8B4513",
    tooltipContent: "Check out my publications",
  },
];

export const skills = {
  data: [
    {
      title: "AI & Data Science",
      skills: [
        "⚡ Developing highly scalable production-ready models for various machine learning and statistical use cases",
        "⚡ Worked on many Computer Vision and Natural Language Processing projects",
        "⚡ Experienced in Deep Learning frameworks such as TensorFlow and PyTorch",
      ],
      softwareSkills: [
        { skillName: "TensorFlow", logoName: "logos-tensorflow" },
        { skillName: "Keras", logoName: "simple-icons:keras" },
        { skillName: "PyTorch", logoName: "logos-pytorch" },
        { skillName: "Python", logoName: "ion-logo-python" },
      ],
    },
    {
      title: "Full Stack Development",
      skills: [
        "⚡ Building responsive website UIs using Angular and React",
        "⚡ Creating application backends in Flask, .NET & Java",
        "⚡ Working with relational databases such as SQL, MySQL and non-relational databases such as MongoDB, Redis",
      ],
      softwareSkills: [
        { skillName: "HTML5", logoName: "simple-icons:html5" },
        { skillName: "CSS3", logoName: "fa-css3" },
        { skillName: "JavaScript", logoName: "simple-icons:javascript" },
        { skillName: "Angular", logoName: "logos:angular-icon" },
        { skillName: "ReactJS", logoName: "simple-icons:react" },
        { skillName: "NodeJS", logoName: "simple-icons:node-dot-js" },
        { skillName: "Flask", logoName: "logos:flask" },
        { skillName: ".NET", logoName: "simple-icons:dot-net" },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Created Continuous Integration/Continuous Deployment (CI/CD) pipelines for many projects",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        { skillName: "AWS", logoName: "simple-icons:amazonaws" },
        { skillName: "Azure", logoName: "simple-icons:microsoftazure" },
        { skillName: "Docker", logoName: "simple-icons:docker" },
        { skillName: "Kubernetes", logoName: "simple-icons:kubernetes" },
      ],
    },
  ],
};

export const degrees = {
  degrees: [
    {
      title: "Oregon State University",
      subtitle: "Master of Science in Computer Science",
      logo_path: "osu_logo.jpg",
      alt_name: "OSU",
      duration: "Sep 2023 - Present",
      location: "Corvallis, Oregon, USA",
      cgpa: "4/4",
      descriptions: [
        "⚡ Developing <b>AI Cortex</b>, an OpenAI-funded project leveraging GPT-3.5 Turbo to optimize CI/CD workflows in GitHub Actions through interactive visualization and inefficiency resolution.",
        "⚡ Designed <b><a href='https://www.figma.com/proto/P3T4RYPQaq9H3GsSKLkdfi/Lullabyte?node-id=2095-3591&t=LJYRBQcsxcadq9Ju-1'>Lullabyte</a></b>, a sleep-tracking figma prototype with HCI principles and inclusive design. Conducted UX research including user journey mapping and heuristic evaluations.",
        `⚡ <b><a href= ${process.env.PUBLIC_URL + '/pdfs/Deep_Unlearning.pdf'} target='_blank'>Deep Unlearning</a></b> - Conducted research on deep unlearning techniques across diverse neural network architectures, focusing on model forgetfulness while maintaining accuracy for privacy-compliant AI systems. This introduces a novel comparison method for unlearning algorithms.`,
        `⚡ <b><a href=${process.env.PUBLIC_URL + '/pdfs/Final_Report.pdf'} target='_blank'>Automatic Code Documentation with Transformers</a></b> - Developed an innovative hybrid architecture combining language-trained encoder and decoder for code summarization, showing potential for enhanced documentation with larger datasets and further fine-tuning.`
      ],
      website_link: "https://oregonstate.edu/",
    },
    {
      title: "Anna University, College of Engineering Guindy",
      subtitle: "Bachelor of Technology in Information Technology",
      logo_path: "annaUnivLogo.png",
      alt_name: "Anna University, CEG",
      duration: "Aug 2015 - Apr 2019",
      location: "Chennai, India",
      cgpa: "8.4/10",
      descriptions: [
        "⚡ Courses Taken: Data Analytics, Algorithms, DBMS, OS, AI, Parallel and Distributed Systems, etc.",
        "⚡ Developed accessible tech products for children with disabilities, including a redesigned website for the Spastic Society of India featuring large button keyboards and voice commands. Created text-to-audio conversion software for visually impaired children, marking first hands-on experience with AI.",
        "⚡ Runner-up in Microsoft's Hackathon 2017, developing an emotion detection application using Azure, selected as one of top three projects at university's innovation exhibition.",
        "⚡ Completed Bachelor's Thesis on 'Rumor stance classification and determining the veracity of the rumors using Deep Learning and Knowledge Graphs', achieving 87% accuracy and ranking first in SemEval's RumorEval contest 2019 and selected as the best project for 2019 by the university.",
      ],
      website_link: "https://www.annauniv.edu/",
    },
  ],
};


export const experience = [
  {
    company: "Visa Inc.",
    role: "Senior Software Engineer",
    duration: "June 2019 - Aug 2023",
    location: "Bangalore, India",
    logo_path: "visa_transparent.png",
    oneLineDescription:"Managed 10+ applications, streamlining processes and optimizing DevOps workflows by 20%. Conducted security assessments, resolving 35+ critical vulnerabilities.",
    projects: [
      /*
      {
        title: "CodeGenie",
        description: "Led the development of a coding assistant powered by OpenAI Codex. Designed to recommend or auto-complete code based on existing repository structures, with a RAG mechanism to ensure compliance with organizational coding standards.",
        technologies: ["Python", "OpenAI API", "NLP", "RAG"],
        categories: ["AI", "Developer Tools"],
        impact: "Enhanced developer productivity by 35% and reduced code review time by 25%"
      },
      */
      {
        title: "Data Governance Platform",
        description: "Architected, designed, and led a team of 5 in developing the Data Governance Platform, enabling real-time data analytics, automated data validation, and end-to-end data lineage.",
        technologies: ["Java", "Angular", "MongoDB", "Data Analytics"],
        categories: ["Data Engineering", "Full Stack"],
        impact: "Increased data accuracy by 30% across Visa products"
      },
      {
        title: "Smart Recommender System",
        description: "Developed a Smart Recommender using NLP and Azure OpenAI, improving candidate selection efficiency.",
        technologies: ["NLP", "Azure OpenAI", "Machine Learning"],
        categories: ["AI", "Data Engineering"],
        impact: "Improved candidate selection efficiency by 60%, generating AI-crafted explanations for suitability"
      },
      {
        title: "Enterprise Data Archival and Retrieval System (EDARS)",
        description: "Implemented an Enterprise Data Archival and Retrieval platform using Angular, Kotlin, and MongoDB.",
        technologies: ["Angular", "Kotlin", "MongoDB"],
        categories: ["Full Stack", "Data Engineering"],
        impact: "Saved Visa $250,000 annually in license costs"
      },
      {
        title: "Visa Web Application Framework",
        description: "Key contributor to the Visa Web Application Framework, which expedited the development time of new apps. Developed modules for authentication, caching, encryption, scaffolding, DevOps, and various UI components.",
        technologies: ["Angular", "DevOps", "Authentication", "Caching"],
        categories: ["Full Stack", "Developer Tools"],
        impact: "Cut development time by 70% with many scaffolded components"
      },
      {
        title: "Employee Referral Tool",
        description: "Key contributor to the Employee Referral Tool leveraging NLP, automating the referral process.",
        technologies: ["NLP", "Machine Learning", "Angular"],
        categories: ["AI", "Full Stack"],
        impact: "Automated 90% of the referral process, reducing processing time by 50%"
      },
      {
        title: "Integration Hub",
        description: "Developed a scalable BizTalk application to automate client processes. Built a centralized logging platform and an automated token authorization workflow for onboarding.",
        technologies: ["BizTalk", "C#", ".NET", "Automation"],
        categories: ["Integration", "Full Stack"],
        impact: "Optimized throughput by 40%"
      },
      {
        title: "Cube Performance Optimization",
        description: "Achieved a significant increase in the performance of the dashboard in PowerBI by optimizing OLAP cubes.",
        technologies: ["PowerBI", "OLAP", "Data Optimization"],
        categories: ["Data Engineering", "Performance Optimization"],
        impact: "Reduced loading time from 2 minutes to 20 seconds, a 150% performance increase"
      },
      {
        title: "Test Automation Tool",
        description: "Created a .NET-based test suite for writing, running, and scheduling test cases with interactive analytics dashboards.",
        technologies: [".NET", "C#", "Test Automation", "Analytics"],
        categories: ["QA & Testing", "Developer Tools"],
        impact: "Ensured tool adoption with internal teams like Visa Activity Monitoring"
      }
      /*,
      {
        title: "Application Management and Optimization",
        description: "Managed 10+ applications, streamlining processes and optimizing DevOps workflows. Conducted security assessments, resolving critical vulnerabilities.",
        technologies: ["DevOps", "Security", "Application Management"],
        categories: ["DevOps", "Security"],
        impact: "Optimized DevOps workflows by 20%, resolved 35+ critical vulnerabilities"
      }
        */
    ]
  }
  /*,
  {
    company: "Sigaram Technologies",
    role: "Software Development Intern",
    duration: "April 2018 - June 2018",
    location: "Chennai, India",
    logo_path: "sigaram_logo_new.png",
    projects: [
      {
        title: "Reporting and Data Analytics Module",
        description: "Delivered a comprehensive Reporting and Data Analytics Module, focusing on insightful dashboards and KPIs.",
        technologies: ["Data Analytics", "Dashboard Development", "KPI Tracking"],
        categories: ["Data Engineering", "Business Intelligence"],
        impact: "Drove a 25% increase in business decision efficiency and generated a new revenue stream, contributing to a 15% increase in annual revenue"
      }
    ]
  }*/
];


export const projects = [
  {
    name: "CodeGenie",
    description: "Repository-based Code Assistant powered by OpenAI Codex. Designed to recommend or auto-complete code based on existing repository structures.",
    tags: ["AI", "NLP", "OpenAI"],
  },
  {
    name: "Data Governance Platform",
    description: "Architected and led development of a platform enabling real-time data analytics, automated data validation, and end-to-end data lineage.",
    tags: ["Data Engineering", "Analytics", "Architecture"],
  },
  {
    name: "Employee Referral Tool",
    description: "Key contributor to an NLP-powered tool automating 90% of the referral process and reducing processing time by 50%.",
    tags: ["NLP", "Process Automation"],
  },
  {
    name: "Smart Recommender System",
    description: "Developed using NLP and Azure OpenAI, improving candidate selection efficiency by 60% and generating AI-crafted explanations for suitability.",
    tags: ["AI", "NLP", "Azure OpenAI"],
  },
  {
    name: "Enterprise Data Archival and Retrieval System (EDARS)",
    description: "Implemented using Angular, Kotlin, and MongoDB, saving Visa $250,000 annually in license costs.",
    tags: ["Angular", "Kotlin", "MongoDB"],
  },
];

export const publications = [
  {
    title: "Secure BNPL for B2B",
    description: "Defensive Publication on a system and method for providing Secure BNPL for B2B using federated blockchain and Deep Learning.",
    link: "https://www.tdcommons.org/dpubs_series/5677/",
    coAuthors: ["Shruti Dahiya"]
  },
  {
    title: "Distribution Channels for Merchants",
    description: "Defensive Publication on Recommendation of Distribution Channels for Merchants using Machine Learning and VisaNet data.",
    link: "https://www.tdcommons.org/dpubs_series/6071/",
    coAuthors: ["Shruti Dahiya", "Swathykrishnan K Chandran"]
  }
];
export const achievements = [
  {
    title: "Visa Above and Beyond Awards",
    description: "Received multiple times for exceptional performance and leadership.",
    image_path: "visa_award.png",
  },
  {
    title: "Technical Innovation Awards",
    description: "For implementing AI-powered Employee Referral, Automatic Anomaly Detection, and ideating Fleet price prediction.",
    image_path: "innovation_award.png",
  },
  {
    title: "Publications",
    description: "Co-authored Defensive Publications on 'System and method for providing Secure BNPL for B2B' and 'Recommendation of Distribution Channels for Merchants'.",
    image_path: "publication.png",
  },
  // Add more achievements as needed
];


export const patents = [
  {
    title: "Secure Authentication Using Software Application",
    number: "PCT/US2023/075209",
    status: "Filed",
    date: "Dec 19, 2023",
    description: "A novel approach to secure authentication in software applications, enhancing user security while maintaining a seamless user experience.",
    coAuthors: ["Shruti Dahiya", "Swathykrishnan K Chandran"]
  },
  {
    title: "Detection Of XSS Attacks Using Deep Learning Models",
    number: "PCT/US2024/042106",
    status: "Filed",
    date: "Sep 17, 2024",
    description: "An innovative method for detecting Cross-Site Scripting (XSS) attacks using advanced deep learning models, significantly improving web application security.",
    coAuthors: ["Shruti Dahiya", "Swathykrishnan K Chandran"]  },
];

export const recommendations = [
  {
    name: "Raymond Taira",
    position: "Sr. Director, Software Engineering at Visa",
    text: "I enjoyed working closely with Ambareesh for several years, and I wholeheartedly recommend him for his exceptional skills and work ethic. As a Full Stack Developer, Ambareesh consistently impressed me with his ability to bridge the gap between frontend and backend development. He effortlessly created seamless user experiences while ensuring robust server-side functionality. His adaptability and innovative mindset were evident in every project he tackled. \n As a Data Developer and Engineer, Ambareesh excelled in complex data integrations and infrastructure management. He consistently delivered high-quality work, whether writing elegant code, designing efficient solutions, or collaborating with cross-functional teams. His passion for technology and commitment to excellence set him apart. \n In summary, Ambareesh is an outstanding professional who combines technical prowess with a strong work ethic. He's not just an asset to any team—he's a driving force behind success.",
    date: "August 5, 2024",
    company_name: "Visa Inc."
  },
  {
    name: "Shruti Dahiya",
    position: "Systems Architect",
    text: "He is a key member of our HRIT. He joined our team a year back as an NCG and since then we are amazed how easily he picks up new things. He is meticulous in his work and provides quality output. He has come up with several innovative ideas in the project. Along with Project work, he has developed POC for Chatbot, NLP ner, etc. Within 1 year he has learned Dotnet, Angular, Docker, Kubernetes, BizTalk Server, SQL, Machine Learning, Deep Learning, etc.",
    date: "May 20, 2021",
    company_name: "Visa Inc."
  },
  {
    name: "Pankaj Shende",
    position: "System Architecture Engineering Lead",
    text: "I had the privilege of working with Ambareesh on a data governance project where we collaborated on data validation and cataloging tasks. Ambareesh's expertise in AI and machine learning was truly phenomenal, and his contributions significantly enhanced the quality of our work. His in-depth knowledge and problem-solving abilities were instrumental in the success of the project. I highly recommend Ambareesh for his dedication, technical skills, and his ability to deliver impactful results",
    date: "September 4, 2024",
    company_name: "Visa Inc."
  },
  {
    name: "Yogesh T S",
    position: "Sr SWE @Visa",
    text: "I had the pleasure of working closely with Ambareesh during our time at Visa. He possesses a remarkable ability to quickly grasp new technologies and has a deep, comprehensive understanding of full-stack development. What stands out most about Ambareesh is his quick thinking and his talent for developing POCs that address complex problem statements. His ability to consistently provide insightful answers to any question makes him an invaluable asset to any team he is a part of.",
    date: "August 31, 2024",
    company_name: "Visa Inc."
  }
];

export const certifications = [
    {
      title: "Deep Learning Nanodegree",
      subtitle: "Udacity",
      link: "https://confirm.udacity.com/KGNC4KFP"
    },
    {
      title: "Data Engineering Nanodegree",
      subtitle: "Udacity",
      link: "https://www.udacity.com/certificate/H7XPZWMG"
    },
    {
      title: "Natural Language Processing Specialization",
      subtitle: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/H9DGBVUCTLRD"
    },
    {
      title: "Recommender Systems and Deep Learning in Python",
      subtitle: "Udemy",
      link: "https://ude.my/UC-2c264bae-b840-4b28-afb3-db1c58761357/",
    },
    {
      title: "Cluster Analysis and Unsupervised ML in Python",
      subtitle: "Udemy",
      link: "https://ude.my/UC-854cf59e-757d-4612-badf-cbf00117cb32",
    }
  ];

export const contactPageData = {
  contactSection: {
    title: "Connect with me?",
    profile_image_path: "ambareesh_profile.png",
    description: "Want to discuss about any project, work opportunities or just wanna say Hi?",
  },
  addressSection: {
    title: "Address",
    subtitle: "Corvallis, Oregon, USA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 XXX-XXX-XXXX",
  },
};