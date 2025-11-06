import React from 'react';
// FIX: Add Post and EducationItem to imports for the new constants.
import { Skill, ExperienceItem, Certification, Post, EducationItem } from './types';

// Icons
const PythonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M14.23,19.8c-1.2,0.6-2.8,0.9-4.2,0.9c-2.6,0-4.9-0.8-6.5-2.5c-1.3-1.4-2-3.3-2-5.4c0-2.3,0.8-4.4,2.3-5.9 C5.5,5.2,7.7,4.3,10,4.3c1.6,0,3,0.3,4.1,0.9l-1-2.9c-1.3-0.5-2.9-0.7-4.5-0.7C3.3,1.5,0,4.8,0,9.8c0,4.6,3.2,8.1,7.5,8.1 c1.8,0,3.4-0.4,4.7-1.1L14.23,19.8z M12.23,16.8l-1.9-1.9c-0.1,0-0.2,0-0.3,0c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5 c0.1,0,0.2,0,0.3,0l1.9-1.9c-0.8-0.3-1.6-0.5-2.5-0.5c-3,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5C10.63,17.3,11.43,17.1,12.23,16.8z M9.8,14.2c-0.6,1.2-0.9,2.8-0.9,4.2c0,2.6,0.8,4.9,2.5,6.5c1.4,1.3,3.3,2,5.4,2c2.3,0,4.4-0.8,5.9-2.3 c1.6-1.7,2.5-3.8,2.5-6.1c0-1.6-0.3-3-0.9-4.1l2.9,1c0.5,1.3,0.7,2.9,0.7,4.5c0,4.3-3.1,7.5-7.5,7.5c-4.6,0-8.1-3.2-8.1-7.5 c0-1.8,0.4-3.4,1.1-4.7L9.8,14.2z M17.3,12.2l1.9,1.9c0.1,0,0.2,0,0.3,0c1.9,0,3.5,1.6,3.5,3.5c0,1.9-1.6,3.5-3.5,3.5 c-0.1,0-0.2,0-0.3,0l-1.9,1.9c0.8,0.3,1.6,0.5,2.5,0.5c3,0,5.5-2.5,5.5-5.5s-2.5-5.5-5.5-5.5C18.9,8.2,18.1,8.4,17.3,8.7z"/></svg>;
const SQLIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h2v2H4V4zm4 0h2v2H8V4zm4 0h2v2h-2V4zm4 0h2v2h-2V4zM4 8h2v2H4V8zm4 0h2v2H8V8zm4 0h2v2h-2V8zm4 0h2v2h-2V8zM4 12h2v2H4v-2zm4 0h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h-2v4h2v-4zm-4 0H8v4h2v-4zM4 16h2v4H4v-4zm16 0h-2v4h2v-4z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/></svg>;
const PowerBIIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm-6 12h8v-8h-8v8zm2-6h4v4h-4v-4z"/></svg>;
const MLIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93L15 8h-3V4.07zm0 5.93H15l.87-2.07c.87.48 1.84.8 2.87.93H14v2zm0 4h3l-.87 2.07c-.87-.48-1.84-.8-2.87-.93H14v-2zm0 5.93v-4h3l.87 2.07c-.87.48-1.84-.8-2.87-.93z"/></svg>;
const AIIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 8.5c-0.83 0-1.5 0.67-1.5 1.5s0.67 1.5 1.5 1.5S21 10.83 21 10s-0.67-1.5-1.5-1.5zM12 11.5c-0.83 0-1.5 0.67-1.5 1.5s0.67 1.5 1.5 1.5S13.5 13.83 13.5 13s-0.67-1.5-1.5-1.5zM4.5 8.5c-0.83 0-1.5 0.67-1.5 1.5S3.67 11.5 4.5 11.5S6 10.83 6 10s-0.67-1.5-1.5-1.5zM18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 20c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-5H6V4h12v13z"/></svg>;

// Data
export const PROFILE_DATA = {
  name: "Rohan Hiwrale",
  tagline: "Data Analyst | ML Engineer | Python • SQL • Power BI • Tableau",
  location: "Thane, Maharashtra, India",
  about: "Hi! I'm Rohan Hiwrale, a passionate Data Analyst transforming raw data into actionable insights that drive business decisions. I believe in continuous learning with 25+ certifications from Google, IBM, and leading platforms. My philosophy is 'Learn by doing, grow in public, impact lives'.",
  aboutHighlights: [
    "Analyze 100K+ data points using SQL & Python",
    "Create Power BI dashboards reducing reporting time by 40%",
    "Build ML models for predictive analysis",
    "Mentor peers on data analytics best practices"
  ]
};

export const SKILLS: Skill[] = [
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'SQL', icon: <SQLIcon /> },
  { name: 'Power BI', icon: <PowerBIIcon /> },
  { name: 'Machine Learning', icon: <MLIcon /> },
  { name: 'Artificial Intelligence', icon: <AIIcon /> },
  { name: 'Tableau', icon: <PowerBIIcon /> },
  { name: 'Content Creation', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> },
  { name: 'Public Speaking', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg> },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Data Analyst",
    company: "Local Service-Based Company",
    period: "Jan 2023 - Present",
    location: "Mumbai, Maharashtra, India · Hybrid",
    description: [
        "Gained hands-on experience in data analysis and problem-solving.",
        "Collaborated with a team to analyze and visualize data for client projects."
    ],
    skills: ["Data Analysis", "SQL", "Power BI", "Python", "Problem-Solving"]
  },
  {
    role: "AI/ML Self-Learner",
    company: "Personal Learning Journey",
    period: "Jan 2025 - Present",
    location: "Remote",
    description: [
        "Learned core Python for data analysis (pandas, matplotlib, numpy).",
        "Built small dashboards in Power BI from public datasets.",
        "Practiced SQL queries for data extraction and cleaning.",
        "Studied machine learning concepts: regression, classification, NLP.",
        "Documenting my entire journey online (LinkedIn + Threads + Instagram)."
    ],
    skills: ["Python", "Pandas", "Numpy", "Power BI", "SQL", "Machine Learning", "NLP"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Data Fundamentals",
    issuer: "IBM",
    date: "Issued Sep 2025",
  },
  {
    name: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
    issuer: "Scrimba",
    date: "Issued Sep 2024",
    credentialId: "U6GX758N4HF9"
  },
  {
    name: "Google Cybersecurity Foundations",
    issuer: "Google on Coursera",
    date: "Issued 2024"
  },
   {
    name: "Google Foundation: Data, Data, Everywhere",
    issuer: "Google on Coursera",
    date: "Issued 2024"
  }
];

// FIX: Add POSTS constant to resolve import error in FeaturedPosts.tsx
export const POSTS: Post[] = [
  {
    title: "My Journey into Data Science",
    content: "It all started with a simple question: how can we use data to make better decisions? This post documents my learning path, the challenges I faced, and the resources that helped me along the way.",
    likes: 128,
    comments: 15,
    reposts: 7,
  },
  {
    title: "The Power of Visualization with Power BI",
    content: "A deep dive into creating interactive and insightful dashboards. I share some tips and tricks for making your data stories compelling and easy to understand.",
    likes: 95,
    comments: 8,
  },
];

// FIX: Add EDUCATION constant to resolve import error in Education.tsx
export const EDUCATION: EducationItem[] = [
  {
    institution: "Mumbai University",
    degree: "Bachelor of Engineering, Computer Engineering",
    period: "2019 - 2023",
  },
];
