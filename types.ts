// FIX: Import React to make the JSX namespace available.
import React from 'react';

export interface Skill {
  name: string;
  icon: JSX.Element;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface Message {
    sender: 'user' | 'ai';
    text: string;
}

// FIX: Add Post interface to resolve import error in components/FeaturedPosts.tsx
export interface Post {
  title: string;
  content: string;
  likes: number;
  comments: number;
  reposts?: number;
}

// FIX: Add EducationItem interface for the Education component.
export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}
