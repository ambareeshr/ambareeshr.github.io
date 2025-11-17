import React, { useState, useEffect } from "react";
import "./SectionNav.css";

const SectionNav = ({ theme }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["skills", "patents", "publications", "education", "experience", "certifications", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "skills", label: "Skills" },
    { id: "patents", label: "Patents" },
    { id: "publications", label: "Publications" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="section-nav" style={{ borderColor: theme.text }}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`section-nav-link ${activeSection === section.id ? "active" : ""}`}
          style={{
            color: activeSection === section.id ? theme.highlight : theme.secondaryText,
            borderColor: activeSection === section.id ? theme.highlight : "transparent",
          }}
          title={section.label}
        >
          <span className="section-nav-dot"></span>
        </a>
      ))}
    </nav>
  );
};

export default SectionNav;
