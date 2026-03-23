export const routes = Object.freeze({
  root: '/',
  ui: {
    whoAmI: '/who-am-i',
    faqs: '/faqs',
    projects: '/projects',
    project: (id: string) => `/projects/${id}`,
    contact: '/contact-me',
    expertise: '/expertise',
    experience: '/experience',
  },
  api: {
    health: '/api/health',
    ip: '/api/ip',
  },
});
