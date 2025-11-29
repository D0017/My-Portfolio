import React from "react";
import { motion } from "framer-motion";
import { educationAndExperience } from "../../data/experience";

const Experience = () => {
  const { education, experience, certifications } = educationAndExperience;

  return (
    <motion.section
      id="experience"
      className="section experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-header">
          <h2>Experience & Education</h2>
          <p>My academic background and professional journey</p>
        </div>

        <div className="experience-layout">
          <div className="experience-column">
            <h3>Education</h3>
            {education.map((item) => (
              <div key={item.id} className="experience-card">
                <h4>{item.title}</h4>
                <p className="experience-meta">
                  {item.institution} • {item.period}
                </p>
                <ul>
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="experience-column">
            <h3>Experience</h3>
            {experience.map((item) => (
              <div key={item.id} className="experience-card">
                <h4>{item.title}</h4>
                <p className="experience-meta">
                  {item.company} • {item.period}
                </p>
                <ul>
                  {item.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h3>Certifications</h3>
            {certifications.map((c) => (
              <div key={c.id} className="experience-card">
                <h4>{c.title}</h4>
                <p className="experience-meta">
                  {c.issuer} • {c.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
