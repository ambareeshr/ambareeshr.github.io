/* Change this file to get your personal Porfolio */

//Home Page
const greeting = {
  title: "Ambareesh R",
  logo_name: "Ambareesh",
  subTitle:
    "An Aspiring Deep Learning practitioner who is passionate about building scalable and robust AI enabled applications . With strong technical skills and academic background in engineering, statistics, machine learning and full stack development.",
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


const degrees = {
  degrees: [
    {
      title: "Anna University, College of Engineering Guindy",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "annaUnivLogo.png",
      alt_name: "Anna University, CEG",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Courses Taken : Data Structures, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science and Full Stack Development.",
      ],
      website_link: "https://www.annauniv.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning Nanodegree",
      subtitle: "- Udacity",
      logo_path: "aws_facebookai_logo.png",
      certificate_link:
        "https://confirm.udacity.com/KGNC4KFP",
      alt_name: "Udacity",
      color_code: "#02B3E4",
    },
    {
      title: "Recommender Systems and Deep Learning in Python",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://ude.my/UC-2c264bae-b840-4b28-afb3-db1c58761357/",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "Cluster Analysis and Unsupervised Machine Learning in Python",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://ude.my/UC-854cf59e-757d-4612-badf-cbf00117cb32",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    }
  ],
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "android-chrome-512x512.png",
    description:
      "Want to discuss about any project or just wanna say Hi?",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Sai Dharshan Apts, South Gangaiamman koil 2nd Street, Choolaimedu, Chennai-600094 ",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/N34TVpwA3pzqrArw8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9791141626",
  },
};




export {
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  contactPageData
};
