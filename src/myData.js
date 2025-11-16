// myData.js
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt, FaBookOpen } from 'react-icons/fa';


export const greeting = {
  title: "Ambareesh Ramakrishnan",
  logo_name: "Ambareesh",
  subTitle:
  "Senior Software Engineer at Visa working on Generative AI Platform. MS in Computer Science from Oregon State University. Passionate about building AI-powered solutions, scalable platforms, and innovative tools.",
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
    link: "mailto:ambareeshus@gmail.com",
    icon: FaEnvelope,
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
    tooltipContent: "Drop me an email",
  },
  {
    name: "Publications",
    link: "https://www.tdcommons.org/do/search/?q=Ambareesh&start=0&context=6488067&facet=",
    icon: FaBookOpen,
    backgroundColor: "#8B4513",
    tooltipContent: "Check out my publications",
  },
  {
    name: "Resume",
    link: "https://myjobartifacts.s3.amazonaws.com/SW+Resume.pdf",
    icon: FaFileAlt,
    backgroundColor: "#E4405F",
    tooltipContent: "View my resume",
  },
];

export const old_skills = {
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

export const skills = [
  {
    category: "Generative AI",
    items: ["Azure OpenAI", "LangChain", "Agentic Workflows", "Neural Retrieval", "RAG", "Prompt Engineering"]
  },
  {
    category: "Languages & Frameworks",
    items: [".NET", "Angular", "C#", "C++", "Flask", "Kotlin", "JavaScript", "Python", "PyTorch"]
  },
  {
    category: "Databases & Big Data",
    items: ["Azure Storage", "MongoDB", "Redis", "SQL Server", "SSAS", "PySpark"]
  },
  {
    category: "Cloud/DevOps/Tools",
    items: ["AWS", "Azure", "Azure AI Search", "Git", "Power Automate", "PowerBI", "Selenium", "Visual Studio"]
  }
];

export const proudAchievements = [
  {
    title: "Accessible Tech Products",
    description: "Developed tech products for children with disabilities, including a redesigned website for the Spastic Society of India featuring large button keyboards and voice commands. Created text-to-audio conversion software for visually impaired children."
  },
  

  {
    title: "Data Governance Platform",
    description: "Led a team of 5 to build a platform that increased data accuracy by 30% across Visa products, using cutting-edge technologies."
  },
  {
    title: "NextGen Talent Portal",
    description: "Created an AI-driven suite that automated 90% of referrals and improved candidate selection by 60% using Azure OpenAI."
  },
  {
    title: "Cortex.ai for CI/CD Optimization",
    description: "Developing an OpenAI-funded project to optimize CI/CD workflows using LLM agents and chain-of-thought reasoning."
  }
];

export const degrees = {
  degrees: [
    {
      title: "Oregon State University",
      subtitle: "Master of Science in Computer Science with AI Concentration",
      logo_path: "osu_logo.jpg",
      alt_name: "OSU",
      duration: "Sep 2023 - March 2025",
      location: "Corvallis, Oregon, USA",
      cgpa: "4/4",
      descriptions: [
        "⚡ <b>AI Cortex - CI/CD Pipeline Optimizer</b>: Built a hybrid RAG system for GitHub Actions using semantic search and dense retrieval. Implemented agentic workflows with custom function tools for real-time analysis, achieving 92% accuracy in identifying pipeline inefficiencies across 1000+ workflows.",
        "⚡ <b>AID (Automated Inclusivity Detector)</b>: Developed an AI-powered system to detect inclusivity issues in MOSIP's platform applications, integrating GenderMag data and multi-modal prompting for UI analysis. Achieved 78% accuracy in identifying cognitive-bias issues through RAG-based analysis.",
        "⚡ <b>Advanced Prompting Strategies</b>: Implemented specialized techniques including graph-based prompting for YAML serialization, self-consistency prompting for diverse bug detection, and chain-of-thought reasoning with few-shot learning. Improved overall suggestion accuracy from 45% to 86%.",
        "⚡ <b>Feedback-Driven Optimization</b>: Designed an automatic prompt refinement system based on user interactions and feedback metrics, reducing false positives by 32%. Contributing to research on creating LLM with goal maintenance loops.",
        `⚡ <b><a href='/pdfs/Deep_Unlearning.pdf' target='_blank'>Deep Unlearning</a></b> - Conducted research comparing Amnesiac, Knowledge Transfer, and Impair Repair-based unlearning across CNN, ResNet-18, and ViT. Developed novel comparison metrics for privacy-compliant AI systems.`,
        `⚡ <b><a href='/pdfs/Final_Report.pdf' target='_blank'>Automatic Code Documentation</a></b> - Created hybrid Transformer architecture combining code-trained encoder and language decoder for code summarization. Improved performance through end-to-end training on code docstring datasets.`
      ],
      points: [
        {
          "title": "AI Cortex - CI/CD Pipeline Optimizer",
          "content": "Built a hybrid RAG system for GitHub Actions using semantic search and dense retrieval. Implemented agentic workflows with custom function tools for real-time analysis, achieving 92% accuracy in identifying pipeline inefficiencies across 1000+ workflows (React, Node.js, OpenAI API, LangChain, GitHub API)"
        },
        {
          "title": "AID (Automated Inclusivity Detector)",
          "content": "Developed an AI-powered system to detect inclusivity issues in MOSIP's platform applications, integrating GenderMag data and multi-modal prompting for UI analysis. Achieved 78% accuracy in identifying cognitive-bias issues through RAG-based analysis. (Python, OpenAI, AWS Bedrock, ChromaDB, Redis)"
        },
        {
          "title": "Advanced Prompting Strategies",
          "content": "Implemented specialized techniques including graph-based prompting for YAML serialization, self-consistency prompting for diverse bug detection, and chain-of-thought reasoning with few-shot learning. Improved overall suggestion accuracy from 45% to 86%."
        },
        {
          "title": "Feedback-Driven Optimization",
          "content": "Designed an automatic prompt refinement system based on user interactions and feedback metrics, reducing false positives by 32%. Contributing to research on creating LLM with goal maintenance loops."
        },
        {
          "title": "Deep Unlearning",
          "content": "<b><a href='/pdfs/Deep_Unlearning.pdf' target='_blank'>Deep Unlearning</a></b> - Conducted research comparing Amnesiac, Knowledge Transfer, and Impair Repair-based unlearning across CNN, ResNet-18, and ViT. Developed novel comparison metrics for privacy-compliant AI systems."
        },
        {
          "title": "Automatic Code Documentation",
          "content": "<b><a href='/pdfs/Final_Report.pdf' target='_blank'>Automatic Code Documentation</a></b> - Created hybrid Transformer architecture combining code-trained encoder and language decoder for code summarization."
        }
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
      points: [
        {
          "title": "Coursework",
          "content": "Courses Taken: Data Analytics, Algorithms, DBMS, OS, AI, Parallel and Distributed Systems, etc."
        },
        {
          "title": "Accessible Tech Products",
          "content": "Developed tech products for children with disabilities, including a redesigned website for the Spastic Society of India featuring large button keyboards and voice commands. Created text-to-audio conversion software for visually impaired children, marking first hands-on experience with AI."
        },
        {
          "title": "Microsoft Hackathon 2017",
          "content": "Runner-up in Microsoft's Hackathon 2017, developing an emotion detection application using Azure, selected as one of top three projects at university's innovation exhibition."
        },
        {
          "title": "Bachelor's Thesis",
          "content": "Completed Bachelor's Thesis on 'Rumor stance classification and determining the veracity of the rumors using Deep Learning and Knowledge Graphs', achieving 87% accuracy and ranking first in SemEval's RumorEval contest 2019 and selected as the best project for 2019 by the university."
        }
      ],

      website_link: "https://www.annauniv.edu/",
    },
  ],
};


export const experience = [
  {
    company: "Visa Inc.",
    role: "Senior Software Engineer - Generative AI Platform",
    duration: "April 2025 - Present",
    location: "Austin, Texas, USA",
    logo_path: "visa_transparent.png",
    oneLineDescription:"Building next-generation AI-powered platforms and tools to transform enterprise software development and operations.",
    projects: [
      {
        title: "Generative AI Platform Development",
        description: "Architecting and developing scalable GenAI platform infrastructure to enable AI-powered solutions across Visa's enterprise applications.",
        technologies: ["Python", "Azure OpenAI", "LangChain", "Kubernetes", "Azure"],
        categories: ["AI", "Platform Engineering"],
        impact: "Enabling enterprise-wide AI adoption and innovation"
      }
    ]
  },
  {
    company: "Oregon State University",
    role: "Research Assistant",
    duration: "Sep 2023 - March 2025",
    location: "Corvallis, Oregon, USA",
    logo_path: "osu_logo.jpg",
    oneLineDescription:"Developed AI-powered tools for CI/CD optimization and inclusivity detection using advanced RAG systems and prompt engineering techniques.",
    projects: [
      {
        title: "AI Cortex - CI/CD Pipeline Optimizer",
        description: "Built a hybrid RAG system for GitHub Actions using semantic search and dense retrieval. Implemented agentic workflows with custom function tools for real-time analysis.",
        technologies: ["React", "Node.js", "OpenAI API", "LangChain", "GitHub API"],
        categories: ["AI", "DevOps", "RAG"],
        impact: "Achieved 92% accuracy in identifying pipeline inefficiencies across 1000+ workflows"
      },
      {
        title: "AID (Automated Inclusivity Detector)",
        description: "Developed an AI-powered system to detect inclusivity issues in MOSIP's platform applications, integrating GenderMag data and multi-modal prompting for UI analysis.",
        technologies: ["Python", "OpenAI", "AWS Bedrock", "ChromaDB", "Redis"],
        categories: ["AI", "Inclusivity", "RAG"],
        impact: "Achieved 78% accuracy in identifying cognitive-bias issues through RAG-based analysis"
      },
      {
        title: "Advanced Prompting Strategies",
        description: "Implemented specialized techniques including graph-based prompting for YAML serialization, self-consistency prompting for diverse bug detection, and chain-of-thought reasoning with few-shot learning.",
        technologies: ["Python", "OpenAI", "Prompt Engineering"],
        categories: ["AI", "Research"],
        impact: "Improved overall suggestion accuracy from 45% to 86%"
      },
      {
        title: "Feedback-Driven Optimization",
        description: "Designed an automatic prompt refinement system based on user interactions and feedback metrics, contributing to research on creating LLM with goal maintenance loops.",
        technologies: ["Python", "Machine Learning", "LLM"],
        categories: ["AI", "Research"],
        impact: "Reduced false positives by 32%"
      }
    ]
  },
  {
    company: "Visa Inc.",
    role: "Senior Software Engineer",
    duration: "July 2019 - Aug 2023",
    location: "Bangalore, India",
    logo_path: "visa_transparent.png",
    oneLineDescription:"Led development teams, architected scalable platforms, and optimized systems, saving $250K annually and resolving 35+ critical vulnerabilities.",
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
        description: "Architected and led a team of 5, enabling automated data validation with real-time notification and secure role-based access controls, and data archival/retrieval.",
        technologies: ["Angular", ".NET 6", "Kotlin", "SQL", "MongoDB", "PowerBI"],
        categories: ["Data Engineering", "Full Stack"],
        impact: "Reduced data correction time by 70% across Visa HR products and saved $250,000 annually in license costs"
      },
      {
        title: "Integration Hub",
        description: "Served as tech lead for the India team, managing 10+ client integrations, optimizing performance, and implementing centralized logging and automated token authorization.",
        technologies: ["Microsoft BizTalk", ".NET", "Scripting", "MSSQL"],
        categories: ["Integration", "Performance Optimization"],
        impact: "Optimized throughput and improved system reliability"
      },
      {
        title: "AI Chatbot",
        description: "Contributed to the development of an HR chatbot proof-of-concept using Azure AI services (QnA Maker and Azure OpenAI) to automate responses to common HR queries.",
        technologies: [".NET", "Azure Storage", "Angular", "SQL"],
        categories: ["AI", "Full Stack"],
        impact: "Automated responses to common HR queries improving employee experience"
      },
      {
        title: "Visa Web Application Framework",
        description: "Key contributor to VWAF, which significantly reduced development time of new applications. Developed modules for authentication, caching, encryption, CRUD scaffolding, DevOps, and UI components.",
        technologies: ["Angular", ".NET", "DevOps", "Authentication"],
        categories: ["Full Stack", "Developer Tools"],
        impact: "Significantly reduced development time for new applications"
      },
      {
        title: "Cube Performance Optimization",
        description: "Achieved a 150% increase in PowerBI dashboard performance by optimizing OLAP cubes, implementing efficient ETL pipelines, and designing snowflake schemas.",
        technologies: ["SSAS", "DAX", "M", "SQL"],
        categories: ["Data Engineering", "Performance Optimization"],
        impact: "Achieved a 150% increase in PowerBI dashboard performance"
      },
      {
        title: "Application Management and Optimization",
        description: "Managed 5+ applications, streamlining processes and optimizing DevOps workflows by 20%. Conducted security assessments, resolving 35+ critical vulnerabilities.",
        technologies: ["Azure DevOps", "VVMS", "Security"],
        categories: ["DevOps", "Security"],
        impact: "Optimized DevOps workflows by 20%, resolved 35+ critical vulnerabilities"
      }
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
    title: "Cortex.ai: CI/CD Workflow Optimizer",
    description: "Developed an LLM-powered tool to analyze GitHub Actions, visualize pipelines, and autonomously resolve inefficiencies in CI/CD processes. Utilized chain-of-thought reasoning to suggest workflow improvements.",
    techStack: ["React", "Node.js", "OpenAI API", "Python"],
    categories: ["AI/ML", "DevOps", "Web Development"]
  },
  {
    title: "Deep Unlearning for Privacy-Compliant AI",
    description: "Conducted comprehensive research on deep unlearning techniques to enable data removal from models while maintaining accuracy. Performed comparative analysis of Amnesiac Unlearning, Knowledge Transfer-based Unlearning, and Impair-Repair-based Unlearning across CNN, ResNet-18, and Vision Transformer architectures. Developed a novel comparison method for unlearning algorithms, contributing to privacy-compliant AI systems.",
    techStack: ["Python", "PyTorch", "CNNs", "Transformers"],
    categories: ["AI/ML", "Research"]
  },
  {
    title: "Automatic Code Documentation Generation",
    description: "Developed and evaluated a hybrid Transformer-based architecture for automatic code summarization, combining a code-trained encoder with a natural language-trained decoder. Implemented multi-layer perceptrons (MLPs) to bridge code and English embeddings. Demonstrated the importance of end-to-end training on code summarization datasets for improved performance.",
    techStack: ["Python", "Transformers", "NLP", "PyTorch"],
    categories: ["AI/ML", "NLP"]
  },
  {
    title: "Rumour Stance and Veracity Detector for Twitter(X)",
    description: "Developed for the SemEval RumourEval task to analyze and determine the veracity of social media content. Implemented a multi-stage system using Graph Conditional Random Fields (CRF) for stance classification (74% accuracy), stacked LSTM for veracity prediction (85% accuracy), and Deep Siamese Bi-LSTM for claim substantiation (87% accuracy on Stanford Natural Language Inference dataset).",
    techStack: ["Python", "TensorFlow", "NLTK", "NetworkX"],
    categories: ["AI/ML", "NLP", "Social Media Analysis"]
  },
  {
    title: "Tweet Sentiment Analyzer",
    description: "Created a sentiment analysis system for tweet data to understand public opinion trends. Utilized logistic regression and naïve Bayes classifiers as baselines, then enhanced performance with GLoVe word embeddings and deep neural networks.",
    techStack: ["Python", "TensorFlow", "NLTK", "Scikit-learn"],
    categories: ["AI/ML", "NLP", "Social Media Analysis"]
  },
  {
    title: "Quora Question Pair Similarity Detector",
    description: "Engineered a 'Siamese' LSTM network to identify semantically similar questions in the Quora dataset. Improved information retrieval and query understanding for enhanced search engine performance.",
    techStack: ["Python", "PyTorch", "NLTK", "Scikit-learn"],
    categories: ["AI/ML", "NLP", "Information Retrieval"]
  },
  {
    title: "Shakespeare-style Text Generator",
    description: "Created a language model using Gated Recurrent Units (GRUs) to generate Shakespeare-like text, demonstrating creative applications of NLP. Implemented custom data preprocessing for archaic English and developed a sampling strategy for text generation.",
    techStack: ["Python", "TensorFlow", "NLTK"],
    categories: ["AI/ML", "NLP", "Creative AI"]
  },
  {
    title: "Named Entity Recognizer for Unstructured Text",
    description: "Built an end-to-end Named Entity Recognition system to extract important information from unstructured text data. Implemented LSTM networks and linear layers with efficient data processing pipelines.",
    techStack: ["Python", "TensorFlow", "spaCy", "Keras"],
    categories: ["AI/ML", "NLP", "Information Extraction"]
  },
  {
    title: "Sparkify: Music Streaming Analytics",
    description: "Developed a comprehensive data analytics solution for a music streaming service. Implemented data processing pipelines, created a data lake, and enabled complex analytics queries.",
    techStack: ["PySpark", "AWS Glue", "S3", "Athena", "Lambda", "Step Functions"],
    categories: ["Big Data", "Cloud Computing", "Data Engineering"]
  },
  {
    title: "Twitter-based Autocomplete System",
    description: "Built an N-gram language model using a Twitter corpus for text autocompletion. Implemented efficient data structures and applied smoothing techniques to improve prediction accuracy.",
    techStack: ["Python", "NLTK"],
    categories: ["NLP", "Text Processing"]
  },
  {
    title: "Data Warehouse for Music Streaming App",
    description: "Architected an ELT pipeline to process JSON logs and metadata for a music streaming application. Implemented incremental data loading and historical data handling to enable efficient analysis of user activity and song plays.",
    techStack: ["Python", "SQL", "AWS S3", "Redshift", "boto3"],
    categories: ["Data Engineering", "Cloud Computing"]
  },
  {
    title: "Automated ETL Pipeline for Music Streaming Company",
    description: "Developed a production-grade data pipeline using Apache Airflow to automate the ETL process. Implemented custom operators for data quality checks and designed a DAG with complex task dependencies.",
    techStack: ["Python", "Apache Airflow", "AWS Redshift", "S3"],
    categories: ["Data Engineering", "Workflow Automation"]
  },
  {
    title: "NoSQL Database for Music App Query Optimization",
    description: "Designed a NoSQL database using Apache Cassandra to optimize queries for a music application. Implemented denormalized tables based on query patterns and developed an ETL pipeline for efficient data retrieval.",
    techStack: ["Python", "Apache Cassandra", "CQL"],
    categories: ["Database Design", "NoSQL"]
  },
  {
    title: "Real-time Analytics Dashboard for Streaming Data",
    description: "Built a real-time analytics solution using streaming data. Implemented a data pipeline with Kafka for data ingestion, Spark Streaming for real-time processing, and Cassandra for storage, with real-time dashboard visualization.",
    techStack: ["Kafka", "Spark Streaming", "Cassandra", "Python"],
    categories: ["Big Data", "Real-time Analytics", "Data Engineering"]
  },
  {
    title: "Hybrid Data Model for Music Streaming Service",
    description: "Developed both relational (PostgreSQL) and NoSQL (Apache Cassandra) data models for a music streaming application. Created optimized tables for song play analysis and implemented efficient ETL pipelines.",
    techStack: ["Python", "PostgreSQL", "Apache Cassandra", "SQL", "CQL"],
    categories: ["Database Design", "Data Modeling", "ETL"]
  }
];

export const publications = [
  {
    title: "Insights from the Frontline: GenAI Utilization Among Software Engineering Students",
    description: "Conference Publication accepted at ICSE - CSEE&T 2025 (Acceptance Rate: 12%). Research on how software engineering students utilize Generative AI tools in their learning and development processes.",
    link: "#",
    type: "Conference",
    venue: "ICSE - CSEE&T 2025",
    coAuthors: []
  },
  {
    title: "Rumor Stance and Veracity Determination using Siamese Bi-LSTM and Knowledge Graph",
    description: "Bachelor's Thesis published paper achieving 87% accuracy on the Stanford NLI dataset (Ranked top 1% in SemEval).",
    link: "#",
    type: "Thesis",
    venue: "SemEval RumorEval",
    coAuthors: []
  },
  {
    title: "Secure Buy Now Pay Later (BNPL) for B2B",
    description: "Defensive Publication 5677 on secure BNPL for B2B using federated blockchain and Deep Learning methods.",
    link: "https://www.tdcommons.org/dpubs_series/5677/",
    type: "Defensive Publication",
    venue: "TD Commons",
    coAuthors: ["Shruti Dahiya"]
  },
  {
    title: "Recommendation of Distribution Channels for Merchants",
    description: "Defensive Publication 6071 using Machine Learning techniques and VisaNet data.",
    link: "https://www.tdcommons.org/dpubs_series/6071/",
    type: "Defensive Publication",
    venue: "TD Commons",
    coAuthors: ["Shruti Dahiya", "Swathykrishnan K Chandran"]
  }
];
export const achievements = [
  {
    title: "Conference Publication (ICSE - CSEE&T 2025)",
    description: "\"Insights from the Frontline: GenAI Utilization Among Software Engineering Students\" - (Acceptance Rate - 12%)",
    year: "2025",
    category: "Research"
  },
  {
    title: "Technical Innovation Awards",
    description: "Received 5+ Technical Innovation Awards for contributing to AI Referral, Automatic Anomaly Detection, and Fleet price prediction, recognized as intellectual properties by Visa.",
    year: "2019-2023",
    category: "Innovation"
  },
  {
    title: "Visa Above & Beyond Awards",
    description: "Led dev teams across multiple projects, mentoring junior engineers and new hires through regular code reviews and knowledge sharing sessions.",
    year: "2019-2023",
    category: "Leadership"
  },
  {
    title: "Bachelor's Thesis - Top 1% in SemEval",
    description: "Published paper on \"Rumor Stance and Veracity Determination using Siamese Bi-LSTM and Knowledge Graph\", achieving 87% accuracy on the Stanford NLI dataset (Ranked top 1% in SemEval).",
    year: "2019",
    category: "Research"
  },
  {
    title: "Microsoft Hackathon 2017 - Runner-up",
    description: "Developed an emotion detection application using Azure, selected as one of top three projects at university's innovation exhibition.",
    year: "2017",
    category: "Competition"
  },
  {
    title: "Certifications",
    description: "Deep Learning and Data Engineering from Udacity, and NLP Specialization from Coursera.",
    year: "2019-2021",
    category: "Professional Development"
  }
];


export const patents = [
  {
    title: "Secure Authentication Using Software Application",
    number: "PCT/US2023/075209",
    status: "Pending",
    date: "Filed Dec 19, 2023",
    description: "A novel approach to secure authentication in software applications, enhancing user security while maintaining a seamless user experience.",
    coAuthors: ["Shruti Dahiya", "Swathykrishnan K Chandran"]
  },
  {
    title: "Detection Of Cross-Side Scripting Attacks Using Deep Learning Models",
    number: "PCT/US2024/042106",
    status: "Pending",
    date: "Filed Sep 17, 2024",
    description: "An innovative method for detecting Cross-Site Scripting (XSS) attacks using advanced deep learning models, significantly improving web application security.",
    coAuthors: ["Shruti Dahiya", "Swathykrishnan K Chandran"]
  },
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
      title: "Recommender Systems and Cluster Analysis in Python",
      subtitle: "Udemy",
      link: "https://ude.my/UC-854cf59e-757d-4612-badf-cbf00117cb32",
    }
    /*
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
      */
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