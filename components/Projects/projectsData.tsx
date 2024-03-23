export type ProjectDataTypes = {
  liveLink: string;
  sourceLink: string;
  id: string;
  title: string;
  techStack: string;
  img: string;
};

export const projectsData: ProjectDataTypes[] = [
  {
    liveLink: 'https://pizzeria-ui.vercel.app/',
    sourceLink: 'https://github.com/crazycodeop/Pizzeria-ui',
    id: 'pizzeria-ui',
    title: 'Pizzeria',
    img: '/assets/pizzeria.png',
    techStack: 'Next.js, Typescipt and Tailwind CSS',
  },
  {
    liveLink: 'https://ipl-dashboard-p3u2.onrender.com/',
    sourceLink: 'https://github.com/crazycodeop/IPL-Dashboard',
    id: 'ipl-db',
    title: 'IPL Dashboard',
    img: '/assets/ipl.png',
    techStack: 'Spring Boot, React.js and SCSS',
  },
  {
    liveLink: 'https://roshanop01.pythonanywhere.com/',
    sourceLink: 'https://github.com/crazycodeop/TrackX',
    id: 'trackx',
    title: 'TrackX',
    img: '/assets/trackx.png',
    techStack:
      'Django and Bootstrap',
  },
];
