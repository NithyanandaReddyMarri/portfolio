import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "United States Patent and Trademark Office",
    title: "Full Stack Developer",
    duration: "May 2024 – Present",
    location: "Alexandria, VA",
    highlights: [
      "Built responsive UIs using React 17, TypeScript, and Redux for patent filing and tracking",
      "Implemented WebSocket for real-time patent status updates and examiner collaboration",
      "Integrated D3.js and Chart.js for examiner productivity dashboards",
      "Enhanced accessibility (Section 508/WCAG) and performance via lazy loading and memoization",
      "Built Spring Boot microservices handling patent metadata and document processing",
      "Secured APIs with OAuth2, JWT, and GraphQL for scalable data access",
      "Enabled Kafka-based pipelines for intake processing and legal status tracking",
      "Deployed using Docker, Kubernetes, and Terraform with Jenkins CI/CD",
    ],
    achievements: [
      "Launched patent dashboard used daily by 1,000+ staff",
      "Reduced average application review time by 25%",
    ],
  },
  {
    company: "Fannie Mae",
    title: "Full Stack Developer",
    duration: "Aug 2023 – Feb 2024",
    location: "Dallas, VA",
    highlights: [
      "Built HomeReady mortgage platform UIs using React 18, TypeScript, and Redux",
      "Enabled real-time eligibility checks via REST and GraphQL integration",
      "Improved accessibility (WCAG 2.1), used LaunchDarkly for feature rollout",
      "Developed Kafka-powered backend microservices with Spring Boot 3.x",
      "Integrated external APIs (FICO, AMI) for underwriting decisions",
      "Secured multi-role access with OAuth2 and JWT",
      "Deployed to AWS EKS with Terraform and CI/CD via CodePipeline",
    ],
    achievements: [
      "Boosted loan eligibility engine capacity by 40%",
      "Cut loan decision time by 30%",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "Full Stack Developer",
    duration: "Apr 2025 – Present\nJun 2022 – Jul 2023",
    location: "Bengaluru, India",
    highlights: [
      "Built Spring Boot microservices and Angular 14 UIs for insurance claims portal",
      "Used GraphQL, Kafka, Redis, and MongoDB for scalable data flow",
      "Ensured cross-browser compatibility and WCAG accessibility",
      "Used Keycloak for RBAC and secured APIs with OAuth2",
      "Deployed with Jenkins, Helm, and AWS EKS",
    ],
    achievements: [
      "Promoted to lead within 3 months",
      "Launched dashboard accessed by 700+ clients",
    ],
  },
  {
    company: "Zomato",
    title: "Software Developer",
    duration: "Mar 2019 – May 2021",
    location: "Hyderabad, India",
    highlights: [
      "Developed Angular UIs and AWS Lambda-based APIs for food ordering workflows",
      "Used Cognito, S3, and DynamoDB for secure, scalable sessions and storage",
      "Deployed with GitHub Actions and AWS CodeBuild",
    ],
    achievements: [],
  },
];

const ExperienceSection = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.header}>💼 Experience</h2>

      {experiences.map((exp, idx) => (
        <div key={idx} style={styles.card}>
          <h3 style={styles.title}>{exp.title}</h3>
          <h4 style={styles.company}>
            {exp.company} <span style={styles.location}>({exp.location})</span>
          </h4>
          <p style={styles.duration}>{exp.duration}</p>

          {exp.highlights && exp.highlights.length > 0 && (
            <div>
              <p style={styles.subHeader}>Highlights:</p>
              <ul style={styles.list}>
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {exp.achievements && exp.achievements.length > 0 && (
            <div>
              <p style={styles.subHeader}>Achievements:</p>
              <ul style={styles.list}>
                {exp.achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

const styles = {
  section: {
    padding: "2rem",
    backgroundColor: "#f4f6fa",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1.5rem",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  title: {
    margin: "0 0 5px",
    color: "#222",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  company: {
    margin: "0 0 10px",
    color: "#444",
    fontSize: "1rem",
  },
  location: {
    fontStyle: "italic",
    color: "#777",
    fontSize: "0.9rem",
  },
  duration: {
    color: "#888",
    fontSize: "0.9rem",
    marginBottom: "10px",
  },
  subHeader: {
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "5px",
    color: "#333",
  },
  list: {
    paddingLeft: "20px",
    margin: 0,
    color: "#333",
  },
};

export default ExperienceSection;
