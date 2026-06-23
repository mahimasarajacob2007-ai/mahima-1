import {
  FaAward,
  FaBolt,
  FaBrain,
  FaCloud,
  FaCode,
  FaMicrochip,
  FaNetworkWired,
  FaTools,
} from 'react-icons/fa';

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'PM Vikas Tracker', path: '/pm-vikas-tracker' },
  { label: 'Tinkercad Projects', path: '/tinkercad-projects' },
  { label: 'Resume & Contact', path: '/resume-contact' },
];

export const counters = [
  { value: '30+', label: 'IoT Simulations' },
  { value: '32', label: 'Internship Days' },
  { value: '12+', label: 'Core Skills' },
  { value: '4', label: 'Project Phases' },
];

export const skills = [
  { name: 'Embedded C', level: 88, icon: FaCode },
  { name: 'Arduino Programming', level: 90, icon: FaMicrochip },
  { name: 'IoT Connectivity', level: 84, icon: FaNetworkWired },
  { name: 'Cloud Dashboards', level: 76, icon: FaCloud },
  { name: 'Circuit Simulation', level: 86, icon: FaBolt },
  { name: 'Prototype Testing', level: 82, icon: FaTools },
];

export const softSkills = [
  'Technical documentation',
  'Lab discipline',
  'Analytical debugging',
  'Team communication',
  'Presentation clarity',
  'Adaptive learning',
];

export const timeline = [
  {
    title: 'Electronics and Communication Engineering',
    meta: 'College of Engineering Kidangoor',
    body: 'Building a strong foundation in circuits, communication systems, embedded design, and practical engineering workflows.',
  },
  {
    title: 'IoT Assistant Intern',
    meta: 'IIIT Kottayam',
    body: 'Worked through networking, electronics, embedded programming, cloud connectivity, and product-style prototype validation.',
  },
  {
    title: 'PM Vikas Technical Track',
    meta: 'May - June 2026',
    body: 'Documented every working day with hands-on notes across circuit design, cloud basics, Arduino coding, and project integration.',
  },
];

export const certifications = [
  'PM Vikas IoT Internship Track',
  'Arduino and Embedded Systems Practice',
  'Cloud Fundamentals for IoT',
  'Circuit Simulation and Proteus Workflow',
];

export const achievements = [
  { icon: FaAward, title: 'Portfolio-Ready IoT Archive', body: 'Organized project records with reusable gallery data and engineering details.' },
  { icon: FaBrain, title: 'Applied Learning Momentum', body: 'Translated classroom electronics into simulations, firmware exercises, and product validation.' },
  { icon: FaMicrochip, title: 'Prototype Mindset', body: 'Focused on testable circuits, readable code, and measured improvement across iterations.' },
];
