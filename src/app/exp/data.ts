type ExperienceItem = {
  url: string;
  company: string;
  position: string;
  cardImg: string;
  location: string;
  date: string;
  bulletPoints: string[];
  modalImgs: string[];
};

export const experienceList: ExperienceItem[] = [
        {
          url: '#',
          company: 'CIMON Automation',
          position: 'Software Engineer - Gateway',
          cardImg: '/exp/cimon-logo.png',
          location: 'Henderson, NV',
          date: 'Jan 2025 - Present',
          bulletPoints: [
            'Developing communication protocols for CIMON HMI devices.',
            'Created a Project Creator tool to automate test project generation.',
            'Implemented Single Write Functionality for Modbus.',
            'Utilized C++, Python, CMake, and CLion for development.',
          ],
          modalImgs: [],
        },
        {
          url: '#',
          company: 'CIMON Automation',
          position: 'Software Engineer (Temporary)',
          cardImg: '/exp/cimon-logo.png',
          location: 'Henderson, NV',
          date: 'Jan 2024 – May 2024',
          bulletPoints: [
            'Developed a tool to automate project file handling.',
            'Improved workflow efficiency and reduced manual steps.',
            'Utilized C++ and QT Creator for development.',
          ],
          modalImgs: [],
        },
        {
          url: '#',
          company: 'CIMON Automation',
          position: 'Support Engineer II',
          cardImg: '/exp/cimon-logo.png',
          location: 'Henderson, NV',
          date: 'July 2023 – Jan 2025',
          bulletPoints: [
            'Achieved 100% customer satisfaction on Zendesk.',
            'Diagnosed and resolved technical issues.',
            'Authored technical documentation for CIMON systems.',
            'Provided on-site troubleshooting.',
            'Utilized JavaScript for scripting.',
          ],
          modalImgs: [],
        },
];

export const embeddedSkills = [
  "Embedded C++",
  "Embedded Linux",
  "Device Drivers",
  "RTOS",
  "Low-Level Programming",
  "Protocol Development",
  "Serial Communication",
  "Multithreading",
  "Memory Management",
  "Network Protocols",
];

export const devLanguages = [
  "C++", "C#", "Python", "Java", "Dart", "JavaScript", "SQL", "Ruby", "HTML", "CSS", "Flutter", "Firebase", "MATLab", "AWS", "MEAN",
];

export const devTools = [
  "Visual Studio", "Visual Studio Code", "QT Creator", "CLion", "CMake",
  "Git", "GitHub", "GitLab", "Jira", "MySQL Workbench"
];
