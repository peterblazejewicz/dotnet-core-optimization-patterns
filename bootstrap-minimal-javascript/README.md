# Bootstrap 4 minimal JavaScript

This example shows how to create a minimal bundle for Bootstrap 4 JavaScript by using only those modules that are used in application implementation:
- dropdown module (used by top navigation menu)
- collapse module (used by top navigation menu on mobile)
- alert module (used on the landing page)

![image](https://cloud.githubusercontent.com/assets/14539/25559101/091f0ac8-2d35-11e7-876a-4e49a841e082.png)

## Development

```bash
yarn
yarn install v0.23.3
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
$ dotnet restore
  Restoring packages for /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript/bootstrap-minimal-javascript.csproj...
  Lock file has not changed. Skipping lock file write. Path: /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript/obj/project.assets.json
  Restore completed in 982.81 ms for /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript/bootstrap-minimal-javascript.csproj.
  
  NuGet Config files used:
      /Users/piotrblazejewicz/.nuget/NuGet/NuGet.Config
  
  Feeds used:
      https://api.nuget.org/v3/index.json
✨  Done in 15.69s.
```

## Run example

```bash
yarn dev
yarn dev v0.23.3
$ npm run build && dotnet run 

> bootstrap-minimal-javascript@1.0.0 build /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript
> npm run clean && npm run scss && npm run copy:main && npm run compile:js


> bootstrap-minimal-javascript@1.0.0 clean /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript
> rimraf wwwroot/css wwwroot/js


> bootstrap-minimal-javascript@1.0.0 scss /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript
> node-sass --output wwwroot/css --source-map true --output-style expanded --source-map-contents scss/

Rendering Complete, saving .css file...
Wrote CSS to /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript/wwwroot/css/main.css
Wrote Source Map to /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript/wwwroot/css/main.css.map
Wrote 1 CSS files to /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript/wwwroot/css

> bootstrap-minimal-javascript@1.0.0 copy:main /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript
> copyfiles -u 1 js/main.js wwwroot/js


> bootstrap-minimal-javascript@1.0.0 compile:js /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript
> npm run compile:bootstrap && npm run minify:bootstrap && npm run minify:main


> bootstrap-minimal-javascript@1.0.0 compile:bootstrap /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript
> shx cat node_modules/bootstrap/js/src/alert.js node_modules/bootstrap/js/src/collapse.js | shx sed "s/^(import|export).*//" | babel --filename wwwroot/js/bootstrap.js --source-maps --presets=es2015 --plugins=babel-plugin-transform-es2015-modules-strip | node build/stamp.js > wwwroot/js/bootstrap.js


> bootstrap-minimal-javascript@1.0.0 minify:bootstrap /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript
> uglifyjs --compress warnings=false --mangle --comments '/^!/' --output wwwroot/js/bootstrap.min.js wwwroot/js/bootstrap.js


> bootstrap-minimal-javascript@1.0.0 minify:main /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript
> uglifyjs --compress warnings=false --mangle --comments '/^!/' --output wwwroot/js/main.min.js wwwroot/js/main.js

Hosting environment: Production
Content root path: /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
info: Microsoft.AspNetCore.Hosting.Internal.WebHost[1]
      Request starting HTTP/1.1 GET http://localhost:5000/  
info: Microsoft.AspNetCore.StaticFiles.StaticFileMiddleware[2]
      Sending file. Request path: '/index.html'. Physical path: '/Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-minimal-javascript/wwwroot/index.html'
```

## Author

@peterblazejewicz