/* Change this file to get your personal Porfolio */

//Home Page
const greeting = {
  title: "Ambareesh R",
  logo_name: "Ambareesh",
  subTitle:
    "An Aspiring Deep Learning practitioner who enjoys building scalable and robust AI enabled applications . With strong technical skills and academic background in engineering, statistics, machine learning and full stack development.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ambareeshr",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ambareesh-r",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:rambareeshceg@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "AI & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various machine learning and statistical use cases",
        "⚡ Worked in many Computer Vision and Natural Language Processing projects",
        "⚡ Experienced in Deep Learning frameworks such as Tensorflow and Pytorch.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          logoName: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          logoName: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          logoName: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          logoName: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website UI using Angular",
        "⚡ Creating application backend in Flask, .Net & Java",
        "⚡ Worked in relational databases such as SQL, MySQL and non-relational databases such as MongoDB, Redis"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          logoName: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          logoName: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          logoName: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          logoName: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          logoName: "logos:angular-icon",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "ReactJS",
          logoName: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          logoName: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          logoName: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flask",
          logoName: "logos:flask",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          logoName: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Created Continous Integration/Continous Deployment (CI/CD) pipelines for many projects.",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          logoName: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          logoName: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          logoName: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          logoName: "logos:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          logoName: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          logoName: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          logoName: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};


export {
  greeting,
  socialMediaLinks,
  skills
};
