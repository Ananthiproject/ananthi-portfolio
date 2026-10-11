// ============================================================
//  ALL YOUR PORTFOLIO CONTENT LIVES IN THIS ONE FILE.
//  Edit the text here and the website updates automatically.
// ============================================================

const BASE = import.meta.env.BASE_URL

export const profile = {
  name: 'Ananthi P',
  firstName: 'Ananthi',
  location: 'Chennai, India',
  title: 'Python Full Stack Developer',
  roles: ['Python Full Stack Developer', 'Python Developer', 'Backend Developer','Frontend Developer'],
  tagline:
    'MCA graduate with 6 months of internship experience, building reliable web applications, REST APIs and AI-powered solutions.',
  email: 'ananthip490@gmail.com',
  phone: '+91 9363411438',
  phoneLink: 'tel:+919363411438',
  github: 'https://github.com/Ananthiproject',
  linkedin: 'https://linkedin.com/in/ananthi-p-60774a2a8',
  photo: `${BASE}profile-photo.jpg`,
  resume: `${BASE}Ananthi_P_Resume.pdf`,
  resumeFileName: 'Ananthi_P_Resume.pdf',
}

export const stats = [
  { value: '3', label: 'Internships' },
  { value: '3', label: 'Projects' },
  { value: '6', label: 'Certifications' },
  { value: '9.26', label: 'MCA CGPA' },
]

export const about = {
  paragraphs: [
    'I am a Python Full Stack Developer and a Master of Computer Applications graduate from SRM Institute of Science and Technology. I enjoy turning ideas into dependable web applications, from the database and REST APIs to the React user interface.',
    'During my internships I have worked with Python, Django, MySQL and React.js, built and integrated REST APIs, handled CRUD operations, and used Git and GitHub for version control. I have also worked on AI-powered applications and machine learning models with Pandas, NumPy and Scikit-learn.',
    'I am looking for an opportunity as a Python Developer, Backend Developer or Python Full Stack Developer where I can keep learning and build user-friendly, reliable applications.',
  ],
  highlights: [
    'Full-stack development with Django and React.js',
    'REST API design and JWT authentication',
    'MySQL database design and Django ORM',
    'AI and machine learning fundamentals',
  ],
}

export const skillGroups = [
  {
    title: 'Languages',
    icon: 'code',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Backend & APIs',
    icon: 'server',
    skills: ['Django', 'Django REST Framework', 'Flask', 'REST APIs'],
  },
  {
    title: 'Web Technologies',
    icon: 'web',
    skills: ['React.js', 'HTML', 'CSS', 'Axios', 'React Router'],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'SQL Queries', 'Database Design', 'Joins'],
  },
  {
    title: 'Data & ML Libraries',
    icon: 'chart',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
  },
  {
    title: 'Tools',
    icon: 'tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    title: 'Core Concepts',
    icon: 'brain',
    skills: [
      'OOP',
      'Full-Stack Development',
      'CRUD Operations',
      'Debugging',
      'Problem Solving',
      'AI/ML Fundamentals',
    ],
  },
]

export const experience = [
  {
    role: 'Python Full Stack Developer Intern',
    company: 'BDreamz Global Solution',
    period: 'Apr 2026 - Present',
    points: [
      'Developed web applications using Python, Django, HTML5, CSS3 and JavaScript.',
      'Implemented CRUD operations and integrated MySQL databases with Django applications.',
      'Developed and maintained frontend and backend components, using Django ORM for database operations and data management.',
      'Built and integrated REST APIs with relational databases.',
      'Debugged application issues, resolved coding errors and performed functional testing.',
      'Applied Python OOP concepts, exception handling and problem-solving techniques.',
      'Used Git and GitHub for version control and followed SDLC practices while collaborating with team members.',
    ],
    tags: ['Python', 'Django', 'MySQL', 'REST APIs', 'Git'],
  },
  {
    role: 'Data Science Intern',
    company: 'Gradtwin',
    period: 'Dec 2025 - Mar 2026',
    points: [
      'Performed data preprocessing and analysis using Pandas and NumPy.',
      'Built and trained machine learning models using Scikit-learn.',
      'Created data visualizations using Matplotlib to communicate insights effectively.',
    ],
    tags: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
  },
  {
    role: 'AI Intern',
    company: 'Here and Now AI',
    period: 'May 2025 - Jun 2025',
    points: [
      'Worked on AI-powered applications using modern AI tools and frameworks.',
      'Developed practical solutions for real-world business problems.',
      'Collaborated with technical teams on AI projects and implementation.',
    ],
    tags: ['AI', 'Python'],
  },
]

export const projects = [
  {
    title: 'AI-Powered Career & Placement Platform',
    featured: true,
    description:
      'A full-stack platform for students, recruiters and administrators. It provides secure role-based access, job management and an AI-powered assistant with a rule-based fallback.',
    features: [
      'Student, recruiter and administrator roles',
      'JWT authentication',
      'Job posting and updating by recruiters',
      'Student job applications and resume management',
      'Interview tracking',
      'Administrator review of student and recruiter details',
      'AI functionality with a rule-based fallback',
    ],
    tags: [
      'Python',
      'Django REST Framework',
      'React.js',
      'MySQL',
      'REST APIs',
      'JWT',
      'Generative AI',
    ],
    github: 'https://github.com/Ananthiproject/ai-career-platform',
  },
  {
    title: 'Employee Management System',
    featured: false,
    description:
      'A web-based employee management application built with Django and MySQL. It implements CRUD operations, uses Django ORM for database management and has responsive interfaces designed with HTML, CSS and JavaScript.',
    features: [],
    tags: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: null,
  },
  {
    title: 'AgriPredict - Crop Yield Prediction System',
    featured: false,
    description:
      'A crop yield prediction application built with machine learning algorithms including Random Forest and XGBoost. It integrates a Flask interface, a Gemini AI-powered agricultural chatbot and automated reporting features.',
    features: [],
    tags: ['Python', 'Flask', 'Random Forest', 'XGBoost', 'Gemini AI'],
    github: null,
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'SRM Institute of Science and Technology',
    period: 'Jul 2024 - May 2026',
    score: 'CGPA: 9.26',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Govindammal Aditanar College for Women',
    period: 'Jun 2021 - May 2024',
    score: 'CGPA: 7.52',
  },
]

export const certifications = [
  {
    title: 'Python Full Stack Development',
    issuer: 'Besant Technologies',
    period: 'Apr 2026 - Jul 2026',
  },
  {
    title: 'Python Programming Virtual Internship',
    issuer: 'TNSDC & Pantech',
    period: '',
  },
  {
    title: 'Fundamentals of Artificial Intelligence (Elite)',
    issuer: 'NPTEL',
    period: '',
  },
  {
    title: 'Microsoft Excel Beginners Level',
    issuer: 'Naan Mudhalvan & Microsoft',
    period: '',
  },
  {
    title: 'Full Stack Development',
    issuer: 'NoviTech R&D Pvt Ltd',
    period: '',
  },
  {
    title: 'MySQL Certificate',
    issuer: 'HackerRank',
    period: '',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]
