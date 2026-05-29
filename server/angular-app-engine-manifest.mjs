
export default {
  basePath: 'https://2uanta17.github.io/yt-vcheck',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
