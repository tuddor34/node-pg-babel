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