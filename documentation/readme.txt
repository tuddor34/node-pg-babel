Learned

Middleware
- just a js function with (req, res, next)
- next() function should be called to signalize that the middleware has finished its job

Nvm
- https://github.com/nvm-sh/nvm
- tool to manage nodejs version
- you can easily switch between versions

Using node modules
- put "type": "module" in package.json
- nvm use --lts
- usually each folder from src/ has a index.js, which defines what to export

Routes
- in the main index.js we shouldn't define the routes, but they should be extracted in their own routes module

devDependencies and dependencies in package.json
- dependencies: npm install express --save
- devDependencies: npm install nodemon --save-dev

scripts section in package.json
- defines which commands you can execute from npm
- for example: npm start implies having a 'start' value in 'scripts'

nodemon
- should be used as a devDependency
- it facilitates not having to start node everytime a code change is made

Babel
- it's used to allow Node to use more more recent JS language features that are not included in the recent Node versions
- npm install @babel/core @babel/node --save-dev
- you can activate different upcoming JavaScript features by adding them as presets to Babel.
- npm install @babel/preset-env --save-dev
- create .babelrc file in the root of the project and specify presets

Weird things
- needed to add --experimental-specifier-resolution=node in start script to be able to use directory import in node,
without having to give full path to index as in:
       * import routes from './routes'; instead of
       * import routes from './routes/index.js'