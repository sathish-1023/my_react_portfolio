import {
    mobile,
    backend,
    problemSolving,
    web,
    javascript,
    
    html,
    css,
    reactjs,
    mysql,
    oraclesql,
    tailwind,
    git,
    java,
    C,
    Python,
    Cpp,
    
    
    cmr,
    inter,
    ssc,
    net_scan,
    hosp_manage,
    numb_pred,
    social_image,
    snake_game,
    crud_image,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Studies",
      title: "Studies",
    },
    {
      id: "Skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
   
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solving",
      icon: problemSolving,
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
      name: "java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "oraclesql",
      icon: oraclesql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Cpp",
      icon: Cpp,
    },
    {
      name: "C",
      icon: C,
    },
  ];
  
  const experiences = [
    {
      title: "Graduation",
      company_name: "CMR Enginnering College",
      icon: cmr,
      iconBg: "#383E56",
      date: "sep 2020 - Present",
      points: [
        "affiliated to JNTU.",
        "Branch: Computer Science and Engineering(CSE).",
        "medium :English.",
        "CGPA : 8.3 -Present.",
        "Kandlakoya,Medchal,Hyderabad,Telangana,India",
      ],
    },
    {
      title: "Intermediate (XII)",
      company_name: "Sandeepani Junoir College",
      icon: inter,
      iconBg: "#E6DEDD",
      date: "july 2017 - April 2019",
      points: [
        "Board of Intermediate Education ,Telangana",
        "Course:Maths Physics Chemistry(MPC)",
        "medium :English",
        "Kamareddy,Telangana,India",
      ],
    },
    {
      title: "Secondary School (X)",
      company_name: "Zilla Parishad High School",
      icon: ssc,
      iconBg: "#383E56",
      date: "Jan 2006 - July 2017",
      points: [
        "Board of Secondary School Education ,Telangana",
        "Subjects:Maths Physics Chemistry,Telugu,Hindi,English",
        "medium :English",
        "Kondapoor,Kamareddy,Telangana,India",
      ],
    },
    
     
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Smartz",
      designation: "Student",
      company: "CMR  Engineering College",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Gunti_thene",
      designation: "Student",
      company: "CMR Engineering College",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Akasham",
      designation: "Student",
      company: "CMR Enginnering college",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NetWork Scanner",
      description: "The provided Python code utilizes the subprocess module to run an Nmap scan on the IP range 192.168.1.0/24 and scans ports 1 to 1000 in just one line of code.This one-liner runs an Nmap scan on the IP range 192.168.1.0/24 and scans ports 1 to 1000. You can customize the IP range and port range as needed for your specific use case"
      
      ,
        tags:[{
          name: "python Django",
          color: "blue-text-gradient",
        },
        {
          name: "nmap module",
          color: "green-text-gradient",
        },
        {
          name: "nmap ",
          color: "pink-text-gradient",
        },
      ],
      image: net_scan,
      source_code_link: "https://github.com/sathish-1023/NetworkScanner",
    },
    {
      name: "Hospital  System",
      description:
        "The Hospital Management System developed with Django is a web-based application that streamlines hospital operations, including patient records, appointments, billing, and staff management, providing an efficient and organized healthcare management solution. ",
      tags: [
        {
          name: "python -Django",
          color: "blue-text-gradient",
        },
        {
          name: "sqlite",
          color: "green-text-gradient",
        },
        {
          name: "paytm_payment",
          color: "pink-text-gradient",
        },
      ],
      image: hosp_manage,
      source_code_link: "https://github.com/sathish-1023/hospitalmanagement",
    },

    {
      name: "Number Predict",
      description:
        " To predict numbers with logistic regression, I might need to change your approach and use a different algorithm like linear regression or a machine learning model suitable for regression tasks, as logistic regression is primarily used for classification.",
        tags:[{
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "machine learning",
          color: "green-text-gradient",
        },
        {
          name: "logistic regression",
          color: "pink-text-gradient",
        },
      ],
      image: numb_pred,
      source_code_link: "https://github.com/sathish-1023/number_predict",
    },

    {
      name: "Social App",
      description:
        " A social media platform similar to Facebook is a web-based service that allows users to create profiles, connect with friends, share updates, photos, and videos, and engage in various online activities such as messaging, groups, and events, fostering a digital social network. ",
        tags:[{
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Android",
          color: "green-text-gradient",
        },
        {
          name: "web",
          color: "pink-text-gradient",
        },
      ],
      image: social_image,
      source_code_link: "https://github.com/sathish-1023/ChatApp",
    },


    {
      name: "Snake Game",
      description:"To create a Snake game, I'll need to implement the game logic and database interaction separately. First, develop the Snake game functionality, and then use JDBC (Java Database Connectivity) to establish a connection to the MySQL database for tasks like high score storage and retrieval.",
        tags:[{
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "Netbeans",
          color: "pink-text-gradient",
        },
      ],
      image: snake_game,
      source_code_link: "https://github.com/sathish-1023/https://github.com/sathish-1023/SnakeGameUsingJavaSourceCode/",
    },
    
    {
      name: "CRUD Operations",
      description:
        " In a Spring Java and ReactJS application, implementing CRUD operations involves creating RESTful APIs in the Spring backend to handle Create, Read, Update, and Delete operations, and then using ReactJS on the front end to make HTTP requests to these APIs. ",
        tags:[{
          name: "Spring Boot java",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "React js",
          color: "pink-text-gradient",
        },
      ],
      image: crud_image,
      source_code_link: "https://github.com/sathish-1023/CrudSpring/",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };

  