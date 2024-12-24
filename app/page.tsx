"use client";
import React, { useRef, useState, useEffect } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Project from "../components/Project";
import ContactUs from "@/components/ContactUs";

const Home = () => {
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false); // New state for Contact Us
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null); // New ref for Contact Us

  // Scroll when the Project section becomes visible
  useEffect(() => {
    if (showProject) {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showProject]);

  // Scroll when the Contact Us section becomes visible
  useEffect(() => {
    if (showContact) {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showContact]);

  // Function to scroll to Project section
  const scrollToProject = () => {
    setShowProject(true);
    setShowContact(false);
  };

  // Function to scroll to Contact Us section
  const scrollToContact = () => {
    setShowContact(true);
    setShowProject(true);
  };

  // Function to hide both Project and Contact Us sections when Home is clicked
  const hideSections = () => {
    setShowProject(false);
    setShowContact(false);
  };

  return (
    <>
      {/* Navbar with scrollToProject, scrollToContact, and hideSections */}
      <Navbar scrollToProject={scrollToProject} scrollToContact={scrollToContact} hideSections={hideSections} />

      <Content />

      {/* Project section */}
      {showProject && (
        <div ref={projectRef} id="my-project">
          <Project />
        </div>
      )}
      
      {/* Contact Us section */}
      {showContact && (
        <div ref={contactRef} id="contact-section">
          <ContactUs />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Home;
