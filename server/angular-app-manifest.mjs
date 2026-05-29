
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://2uanta17.github.io/yt-vcheck/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-GETI3HJK.js"
    ],
    "route": "/yt-vcheck"
  },
  {
    "renderMode": 2,
    "redirectTo": "/yt-vcheck",
    "route": "/yt-vcheck/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 85215, hash: '412b014fea1444d83c0d2372568a0fdd5c5e5464f93b777b7c71cae1c0dc9317', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 27870, hash: '7026b6f37ed34a3d0c1d9ab00615402668db2f3c517257807ffbaac64514d743', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 211908, hash: '5d82c233d386573e8b35301ab5f86bf51c5908d91962c7a5b6fa1e5c5760d0d3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YCB6DE5O.css': {size: 91718, hash: '6Z2tujQlk4I', text: () => import('./assets-chunks/styles-YCB6DE5O_css.mjs').then(m => m.default)}
  },
};
