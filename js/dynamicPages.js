const dynamicPages = {
  '#error': () => `<div class="main-content">Oops, something went wrong!</div>`,
  '#projects': () => () => $('main').load('/html-partials/projects.html'),
  '#about': () => () => $('main').load('/html-partials/about.html'),
  '#contact': () => () => $('main').load('/html-partials/contact.html'),
  '#random-timer': () => () => $('main').load('/html-partials/random-timer.html')
}