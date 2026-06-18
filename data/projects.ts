import type {Project} from '@/types/projects';

export const PROJECTS: Project[] = [
  {
    id: 'movie-night',
    title: 'Movie Night',
    period: {start: '2023', end: '2023'},
    link: 'https://movie-night.up.railway.app/',
    description:
      'A web app where friends vote together on a curated list of movies to watch on a chosen date. Built on a RESTful API with WebSockets for real-time communication between server and clients.',
    skills: ['Next.js', 'Go', 'MongoDB', 'Tailwind CSS', 'WebSockets'],
    isExpanded: true,
  },
  {
    id: 'svv-handball',
    title: 'SVV Handball',
    period: {start: '2016'},
    link: 'https://svv-handball.de/',
    logo: '/project/svv.png',
    description:
      'The website and API for the handball club SV Vaihingen, together with a custom-tailored content management system.',
    skills: ['Next.js', 'Nest.js', 'MongoDB', 'Prisma', 'Tailwind CSS'],
  },
  {
    id: 'bucket-map',
    title: 'Bucket Map',
    period: {start: '03.2021', end: '01.2022'},
    link: 'https://github.com/dtomschitz/bucket-map',
    description:
      'An iOS and Android app that lets users unlock new countries and save favorite places they might want to visit again.',
    skills: ['Flutter', 'Firebase'],
  },
  {
    id: 'bar-brawler',
    title: 'Bar Brawler',
    period: {start: '02.2021', end: '07.2021'},
    link: 'https://github.com/dtomschitz/bar-brawler',
    description:
      'A brawler game where the player survives waves of enemies in a saloon by buying new weapons and having drinks at the bar.',
    skills: ['Unity', 'C#', 'Blender'],
  },
  {
    id: 'bingo',
    title: 'Bingo',
    period: {start: '06.2021', end: '07.2021'},
    link: 'https://github.com/dtomschitz/bingo-app',
    description: 'A student project building a bingo web app using React and Deno.',
    skills: ['React', 'Deno', 'MongoDB'],
  },
];
