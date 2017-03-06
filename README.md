# Lightning Design System Starter Kit [![Circle CI](https://circleci.com/gh/salesforce-ux/design-system-starter-kit.svg?style=shield&circle-token=6c0b617673fd9c9e4eb4fb9defe953a92fc1797c)](https://circleci.com/gh/salesforce-ux/design-system-starter-kit) [![Greenkeeper badge](https://badges.greenkeeper.io/salesforce-ux/design-system-starter-kit.svg)](https://greenkeeper.io/)

![Starter Kit by Salesforce UX](https://rawgit.com/salesforce-ux/design-system-starter-kit/master/starter-kit.svg)

Rapid prototyping environment using the [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/), HTML, and [Sass](http://www.sass-lang.com/).

## Who is this for?

From the prototyper to the large application developer… the Design System Starter Kit
is a helpful tool to get started and run prototypes of all sizes in the browser.

### Designers

The starter kit is built using web standards, more specifically HTML and CSS.
Copy and pasting markup from <https://www.lightningdesignsystem.com/> is quick and easy.
No need to be a front-end guru to start designing in the browser!

### Salesforce Developers

Setting a whole demo org for a quick prototype can take time and effort,
whereas cloning the starter kit and putting a few components together only takes a few minutes.
Deploying your prototype to Heroku for free – in only 2 clicks – is also lightning fast!

## Quick Start

Pre-requisites: [Node.js](https://nodejs.org/en/) 4.2 or up.

1. Fork the repository
1. Clone it or [download it](https://github.com/salesforce-ux/design-system-starter-kit/archive/master.zip) onto your computer
1. In a terminal, `cd` into the `design-system-starter-kit` directory
1. Run `npm install`
1. Run `npm run dev` (or `gulp`)
1. Open <http://localhost:3000>

That’s it! You can start by editing the `src/views/index.html` file and build awesome prototypes.

Tip: copy markup from the [Lightning Design System Components](https://www.lightningdesignsystem.com/components-overview/) and paste it into the HTML files of the starter kit.

## Deploy to Heroku

Deploy your own prototype for free to [Heroku](https://www.heroku.com) in only 2 clicks.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

**Your work is confidential?** Fill in a username and password in the Heroku settings.

## What’s inside?

- SLDS Components and CSS, imported using [Sass](http://www.sass-lang.com/)
- Powerful templating using [Nunjucks](http://mozilla.github.io/nunjucks/)
- Some JavaScript, making a few components interactive
- [SVG4Everybody](https://github.com/jonathantneal/svg4everybody), a polyfill that helps browsers display SVG icons
- [Live reload using BrowserSync](https://www.browsersync.io/): automatic browser reloading on file changes, and simultaneous cross-device testing
- Sourcemaps support ([for live in-browser Sass development](https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0))
- [Autoprefixer](https://github.com/postcss/autoprefixer) (adds vendor prefixes to CSS rules)

## FAQ

### Which browsers does the Starter Kit support?

When it comes to the CSS, the Starter Kit has the same support level as the Lightning Design System itself.
See [the list of supported browsers](https://www.lightningdesignsystem.com/faq/#what-browsers-are-supported).

For JavaScript, at the moment only a few very recent browsers are supported (Chrome & Firefox recommended).

### Is there a showcase of prototypes using the Starter Kit?

Not yet, but we’d love to know about your creations! Feel free to get in touch in the [issues of the project](https://github.com/salesforce-ux/design-system-starter-kit/issues).
In the mean time, you can [check out the example prototype](https://starter-kit-demo.herokuapp.com/example.html).


## See Also

The [Design System UI Kit](https://github.com/salesforce-ux/design-system-ui-kit/) is a great way for designers to put beautiful static prototypes together.

Using React? Check out the [react branch](https://github.com/salesforce-ux/design-system-starter-kit/tree/react) (beta)!
