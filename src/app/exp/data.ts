export type ExperienceItem = {
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

export const frameworks = [
      "C++",
      "C#",
      "HTML",
      "JavaScript",
      "CSS",
      "Dart",
      "SQL",
      "Java",
      "Python",
      "Ruby",
      "Flutter",
      "Firebase",
      "MATLab",
      "AWS",
      "MEAN",
];

export const tools = [
      "Visual Studio",
      "Visual Studio Code",
      "MySQL Workbench",
      "QT Creator",
      "CLion",
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "Zendesk",
      "CMake",
];