import {
    react,
    backend,
    python,
    web,
    javascript,
    typescript,
    html,
    css,
   
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    node,
    ai,
    django,
    blog,
    textutils,
    newsapp,
    threejs,
    cplus,
    profile
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
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
      title: "React  Developer",
      icon: react,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: python,
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
      icon: react,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "C++",
      icon: cplus,
    },
    
  ];


  const experiences = [
    {
      title: "React.js Developer",
      company_name: "React ",
      icon: react,
      iconBg: "#383E56",
      date: `March 2023 - Present `,
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Learning Concepts- JSX,Virtual DOM ,Lifecycle Methods,Reusable Components , States, Class Based Components",
        "Advanced Concepts- React Hooks- Context Api, Redux Store"
      ],
    },
    {
      title: "Node.js Developer",
      company_name: "Node Js",
      icon: node,
      iconBg: "#E6DEDD",
      date: `October 2022 - Present`,
      points: [
        "Developing and maintaining web applications using Node.js and other related technologies.",
        "Technologies Learning - Express , Mongoose ,Jwt Token, Rendering Templates, API Handling, Cookie Authentication,Mongo DB ",
        
        "Implementing Secure design and ensuring cross-device compatibility.",
        "Participating in code Reusability and learning constructive feedback to Save time.",
        "Implementing New Ways to Solve Existing Problems  like Security concerns , Fast Rendering.",
      ],
    },
    {
      title: "Django Developer",
      company_name: "Django",
      icon: django,
      iconBg: "#383E56",
      date: `Dec 2022 - Present`,
      points: [
        "Developing and maintaining web applications using Django and other related technologies.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        " Learned Concept of MVT,Jinza Template,Csrf Token,Rest API,Models,Custom User Model",
        
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Python Developer",
      company_name: "Python",
      icon: python,
      iconBg: "#383E56",
      date: `Dec 2022 - Present`,
      points: [
        "Developing and maintaining  applications using Python and other related libraries.",
        "Creating existing  Applications and learning the way to solve problems ",
        " Thinking to create Reusable and connectable applications ",
        
        "Participating in coding hacakthons and learning the way to solve.",
      ],
    },
    {
      title: "Machine Learning Developer",
      company_name: "AI & ML",
      icon: ai,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using Machine Learning Technologies and other related technologies.",
        "Producing New Predictions Applications as well as reducing human efforts",
        "Creating New User Applications which  enhance Multiple task automation",
        "Learning Concepts - Supervised and Unsupervised Machine Learning, Data Handling ,Numpy ,Pandas Library", 
        "Mathematics- Statisical Techniques, Curve Fitting, Correlations",
        "Libraries -Scikit Learn, Pandas,Numpy ,Matplotlib",
        "Higher Concepts-  Regression, Linear Regression,Stochastic Gradient, Logistic Regression",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought He is very confident about what he is doing. ",
      name: "Ashutosh Sirohi ",
      designation: "Team Member",
      company: "Acme Co",
      image: profile,
    },
    {
      testimonial:
        "I thought he have  skill of doing hard things in simpler way.",
      name: "Astitva Singh",
      designation: "Team Member",
      company: "DEF Corp",
      image:profile,
    },
    {
      testimonial:
        "I thought he is very passionate about his work . ",
      name: "Divyansh Arya",
      designation: "Team Member",
      company: "456 Enterprises",
      image: profile,
    },
  ];
  
  const projects = [
    {
      name: "Text Utils",
      description:
        "TextUtils is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but TextUtils offers much more than simple text drafting and formatting.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "modes",
          color: "pink-text-gradient",
        },
      ],
      image: textutils,
      source_code_link: "https://github.com/PriyanshuChauahan/Text-Utils",
    },
    {
      name: "News Hub",
      description:
        "It is a ReactJs Website built primarily to do read news about every news domain . Users  can  also get updated news reguraly. It is API based and have additional features like loading and loading progress. Here users can also feed news about their domains and interests. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "bootsrap",
          color: "pink-text-gradient",
        },
      ],
      image: newsapp,
      source_code_link: "https://github.com/PriyanshuChauahan/News-Hub",
    },
    {
      name: "Blog ",
      description:
        "It is Django based Web Application Which enables users to showcase their blogging skills where they can reach millions of people and share their learning and experience. So Why reading here just go to our site and start exploring ",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "SQl",
          color: "green-text-gradient",
        },
        {
          name: "bootsrap",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/PriyanshuChauahan/Blog",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };