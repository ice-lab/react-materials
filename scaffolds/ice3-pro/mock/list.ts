import type { Request, Response } from 'express';

const repos = [
  {
    id: 1,
    name: 'facebook/react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces',
    url: 'https://github.com/facebook/react',
  },
  {
    id: 2,
    name: 'vuejs/vue',
    description: 'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. ',
    url: 'https://github.com/vuejs/vue',
  },
  {
    id: 3,
    name: 'angular/angular',
    description: 'One framework. Mobile & desktop. ',
    url: 'https://github.com/angular/angular',
  },
  {
    id: 4,
    name: 'solidjs/solid',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    url: 'https://github.com/solidjs/solid',
  },
  {
    id: 5,
    name: 'sveltejs/svelte',
    description: 'Cybernetically enhanced web apps',
    url: 'https://github.com/sveltejs/svelte',
  },
  {
    id: 6,
    name: 'nuxt/nuxt.js',
    description: 'The Vue.js Framework',
    url: 'https://github.com/nuxt/nuxt.js',
  },
  {
    id: 7,
    name: 'vercel/next.js',
    description: 'The React Framework',
    url: 'https://github.com/vercel/next.js',
  },
  {
    id: 8,
    name: 'alibaba/ice',
    description: 'A universal framework based on React.js.',
    url: 'https://github.com/alibaba/ice',
  },
  {
    id: 9,
    name: 'sveltejs/kit',
    description: 'The fastest way to build Svelte apps',
    url: 'https://github.com/sveltejs/kit',
  },
  {
    id: 10,
    name: 'solidjs/solid-start',
    description: 'SolidStart, the Solid app framework',
    url: 'https://github.com/solidjs/solid-start',
  },
];

export default {
  'GET /api/repos': (req: Request, res: Response) => {
    res.send({
      data: repos,
      page: 1,
      success: true,
      total: 10
    })
  }
}
