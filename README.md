# Planets
Explore the planets in our solar system. Visit the app at
<https://explore-planets.netlify.app/>

### Initialize the project
```console
npx create-react-app planets
```

Remove all unnecessary files to begin with empty project.

### Add bootstrap
```console
npm install --save bootstrap reactstrap react-popper @popperjs/core
```

Add bootstrap css to `index.js`.

### Implement Navbar

Learn about reactstrap components here <https://reactstrap.github.io/>

### React component
Add planet images inside `public/assets/images` folder. Build `Planets`
component.

### React router

```console
npm i react-router-dom
```

<https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md>

### Deploy via GitHub Pages

```console
npm install --save-dev gh-pages
```

Add `"homepage": "."` and `"predeploy": "npm run build"` and
`"deploy": "gh-pages -d build"` script in `package.json`. Include a 404 redirect
to homepage because react router won't work for the static site. Currently
GitHub deploy is broken due to use of react-router (alternative would be to use
hash-router), however Netlify deploy working.


### Resources
- <https://www.coursera.org/learn/front-end-react>
