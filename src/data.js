// Centralized data for portfolio sections

export const about = {
  name: "Meet Jivani",
  title: "Software Developer | Full Stack & Backend Expert",
  location: "Toronto, ON, Canada",
  email: "meetjivani001@gmail.com",
  summary: `High-caliber Full Stack Developer with over a year of experience in backend development and API optimization. Proven track record of reducing system response times and improving deployment efficiency through strategic process improvements. Expert in Node.js, React.js, and MongoDB with demonstrated ability to mentor junior developers and lead cross-functional collaboration.`
};

export const skills = [
  "Node.js", "Express.js", "REST APIs", "MongoDB", "SQL", "GraphQL", "Socket.io",
  "React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3",
  "Python", "Java",
  "TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "Deep Learning",
  "Git", "GitHub Actions", "Postman", "Docker", "Linux", "AWS",
  "Agile Development", "CI/CD", "Code Review", "Test-Driven Development", "SEO Optimization"
];

export const projects = [
  {
    name: "Telecom Churn Prediction",
    description: "Predictive machine learning models for customer churn analysis using advanced data preprocessing and feature engineering techniques. Achieved 30% improvement in customer retention rates.",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
    link: "https://github.com/jivanimeet001/Telecom-Churn-Prediction.git",
    image: null
  },
  {
    name: "Credit Card Fraud Detection System",
    description: "Deep learning-based anomaly detection system for credit card transaction monitoring. Reduced potential fraud instances by 15% through sophisticated pattern recognition and real-time analysis.",
    tech: ["Python", "Deep Learning", "Data Analytics"],
    link: "https://github.com/jivanimeet001/Detecting-Unusual-Patterns-in-Credit-Card-Transactions.git",
    image: null
  },
  {
    name: "Medical Image Analysis",
    description: "Optimized deep learning models for brain tumor segmentation in MRI images using U-Net CNN architecture. Achieved 45% improvement in analysis accuracy.",
    tech: ["Python", "TensorFlow", "Keras", "U-Net CNN"],
    link: "https://github.com/jivanimeet001/Deep-Learning-based-Segmentation-of-Brain-Tumour-MRI-Images.git",
    image: null
  }
];

export const contact = {
  email: "meetjivani001@gmail.com",
  linkedin: "https://www.linkedin.com/in/meet-jivani-1a8496154",
  github: "https://github.com/jivanimeet001"
};

// Shortened work experiences
export const experiences = [
  {
    title: "Full Stack Developer",
    company: "HacknoTech",
    period: "Mar 2024 – Present",
    summary: [
      "Built scalable full-stack apps with React & Node.js for responsive, secure, cross-platform use.",
      "Designed REST APIs with SQL/NoSQL, enabling efficient data and real-time features.",
      "Automated deployments via Docker & CI/CD (GitHub Actions) for fast, stable releases.",
      "Collaborated in Agile sprints to deliver user-focused features.",
      "Reviewed code, mentored juniors, and enforced best practices."
    ]
  },
  {
    title: "Backend Developer",
    company: "iCanstudioz App Solution LLP",
    period: "Sep 2021 – Aug 2022",
    summary: [
      "Optimized REST APIs with Node.js/Express, improving data speed by 40%.",
      "Mentored juniors and led full-stack projects (React, Node, MongoDB, Express).",
      "Transformed platforms with GraphQL & Git, improving 25+ features.",
      "Integrated ESLint/Prettier for code quality and team efficiency.",
      "Boosted SEO and managed AWS/Linux deployments, reducing errors from 35% to 3%."
    ]
  }
];
