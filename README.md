# Watch me
Simple app to watch movies


### Demo
the demo is deployed to a droplet (running Ubuntu) on DigitalOcean: http://188.166.255.218:8888/


### To run

* You'll need to have [git](https://git-scm.com/), [node](https://nodejs.org/en/) and [docker](https://www.docker.com/) installed in your system. I recommend using docker > 1.12 if you are running it on Mac/Windows

* Fork and clone the project:
```
> $ git clone https://github.com/davidbaiguini/watch-me.git
```

* Then install the dependencies:
```
> $ npm install
```

* Install webpack and the development server:
```
> $ npm i webpack-dev-server webpack -g
```

* You can simply run webpack build using this command:
```
> $ npm run build
```

* If you want to run with webpack-dev-server simply run this command
```
> $ npm run dev
```

* Run the container using docker-compose
```
docker-compose up -d
```

Open the web browser to `http://localhost:8888/`


### Additional Links

[XXX](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
[XXX](https://chrome.google.com/webstore/category/apps)


### Tech Used

| **Tech** | **Description** | **Version** |
| ---------|-----------------|-------------|
| [React](https://facebook.github.io/react/) | View layer | XXX |
| [React Router](https://github.com/reactjs/react-router) | Universal routing | XXX |
| [Redux](http://redux.js.org/) | State management | XXX |
| [RethinkDB](http://www.rethinkdb.com) | Open source Database | XXX |
| [Express](http://expressjs.com/) | Node.js server framework | XXX |
| [Webpack](https://webpack.github.io/) | Module bundling + build for client | XXX |
| [SASS](http://sass-lang.com/) |  stylesheet language, makes CSS fun again | XXX |
| [Docker](https://www.docker.com/) |  Containers | XXX |



### Tech Used
- [ ] Mercury
- [ ] prevent scroll on key up and key down on movies list page
- [ ] Add description page
- [ ] Add overlay to article-tile
- [ ] Add placeholder to article-tile image before it gets loaded
- [ ] Add different configuratin files for dev and prod
- [ ] Open video in fullscreen
- [ ] Add hover on mouseHover
- [ ] Add animation between "Pages"
- [ ] Add socketIO to retrieve stuff :p
- [ ] Add materialize
- [ ] Import SCSS vendors from node_module
- [ ] Replace icons with fontello
- [ ] Add continuous Integration
- [ ] Add lazy-load images
- [ ] Add unitTests
- [ ] Remove devTools for build
- [ ] Add active state to current page in header nav
