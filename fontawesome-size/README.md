# FontAwesome custom build

How to build custom distribution of FontAwesome CSS to limit your output size

## Development

You can use `NPM` or `Yarn` to install `FontAwesome` dependency and start project.

```bash
yarn
yarn install v0.23.2
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
$ dotnet restore
  Restoring packages for /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size/fontawesome-size.csproj...
  Lock file has not changed. Skipping lock file write. Path: /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size/obj/project.assets.json
  Restore completed in 1.01 sec for /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size/fontawesome-size.csproj.

  NuGet Config files used:
      /Users/piotrblazejewicz/.nuget/NuGet/NuGet.Config

  Feeds used:
      https://api.nuget.org/v3/index.json
✨  Done in 24.04s.
```

Run local website:

```bash
yarn dev
yarn dev v0.23.2
$ npm run build && dotnet run

> fontawesome-size@1.0.0 build /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size
> npm run clean && npm run copy && npm run scss


> fontawesome-size@1.0.0 clean /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size
> rimraf wwwroot/fonts


> fontawesome-size@1.0.0 copy /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size
> copyfiles -u 3 node_modules/font-awesome/fonts/*.* wwwroot/fonts


> fontawesome-size@1.0.0 scss /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size
> node-sass --output wwwroot/css --source-map true --output-style expanded --source-map-contents scss/

Rendering Complete, saving .css file...
Wrote Source Map to /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size/wwwroot/css/main.css.map
Wrote CSS to /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size/wwwroot/css/main.css
Wrote 1 CSS files to /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size/wwwroot/css
Hosting environment: Production
Content root path: /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/fontawesome-size
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

## Author

@peterblazejewicz