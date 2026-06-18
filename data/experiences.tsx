import {CodeXmlIcon} from 'lucide-react';

import type {Experience} from '@/types/experiences';

export const EXPERIENCES: Experience[] = [
  {
    id: 'freelance',
    companyName: 'Freelance',
    companyIcon: <CodeXmlIcon />,
    isCurrentEmployer: true,
    positions: [
      {
        id: 'freelance-fullstack',
        title: 'Full-Stack Software Engineer',
        employmentType: 'Freelance',
        employmentPeriod: {start: '06.2026'},
      },
    ],
  },
  {
    id: 'mhp',
    companyName: 'MHP Management und IT Beratung GmbH',
    companyLogo: '/company/mhp.png',
    companyWebsite: 'https://mhp.com',
    isCurrentEmployer: true,
    positions: [
      {
        id: 'mhp-consultant',
        title: 'Consultant',
        employmentType: 'Full-time',
        employmentPeriod: {start: '08.2022'},
        description:
          'Development in an agile environment with a focus on delivering high-quality software that distributes OTA updates for vehicles of a well-known German automotive company.',
        skills: ['Azure', 'Go', 'Angular', 'MongoDB', 'Kafka', 'GitLab'],
        isExpanded: true,
      },
      {
        id: 'mhp-junior-consultant',
        title: 'Junior Consultant',
        employmentType: 'Full-time',
        employmentPeriod: {start: '03.2022', end: '08.2022'},
        skills: ['Go', 'Angular', 'MongoDB', 'GitLab'],
      },
      {
        id: 'mhp-working-student',
        title: 'Working Student',
        employmentType: 'Part-time',
        employmentPeriod: {start: '09.2020', end: '03.2022'},
        description:
          'Collaborated with an agile development team that provided a comprehensive CI/CD pipeline for numerous development teams of a large German automotive group.',
        skills: ['Jenkins', 'CI/CD'],
      },
      {
        id: 'mhp-intern',
        title: 'Intern',
        employmentType: 'Internship',
        employmentPeriod: {start: '03.2020', end: '09.2020'},
        description:
          'Built a web application that lets developers of a German automotive group manage testbeds in a simulation software that was previously only available in the terminal.',
        skills: ['Angular', 'Python', 'GitHub'],
      },
    ],
  },
  {
    id: 'benchkram',
    companyName: 'Benchkram Software GmbH',
    companyLogo: '/company/benchkram.png',
    companyWebsite: 'https://benchkram.de',
    positions: [
      {
        id: 'benchkram-working-student',
        title: 'Working Student',
        employmentType: 'Part-time',
        employmentPeriod: {start: '11.2019', end: '02.2020'},
        description:
          'Developed an MVP mobile app for a streaming service where handball coaches can analyze team performance by reviewing game footage and rewatching key moments.',
        skills: ['Flutter'],
      },
    ],
  },
  {
    id: 'hdm',
    companyName: 'Hochschule der Medien Stuttgart',
    companyLogo: '/company/hdm.png',
    companyWebsite: 'https://www.hdm-stuttgart.de',
    positions: [
      {
        id: 'hdm-research-assistant',
        title: 'Research Assistant',
        employmentType: 'Part-time',
        employmentPeriod: {start: '11.2018', end: '02.2020'},
        description: 'Managed and maintained parts of the official website of the Hochschule der Medien Stuttgart.',
        skills: ['Python', 'MySQL'],
      },
    ],
  },
  {
    id: 'svv',
    companyName: 'SV Vaihingen 1889 e.V. (Handball)',
    companyLogo: '/project/svv.png',
    companyWebsite: 'https://svv-handball.de',
    isCurrentEmployer: true,
    positions: [
      {
        id: 'svv-it-administrator',
        title: 'IT Administrator',
        employmentType: 'Volunteer',
        employmentPeriod: {start: '2016'},
        description:
          'Development and maintenance of the website and platform of the handball club SV Vaihingen, including a custom content management system.',
        skills: ['Next.js', 'Nest.js', 'MongoDB', 'Prisma', 'Tailwind CSS'],
      },
    ],
  },
];
