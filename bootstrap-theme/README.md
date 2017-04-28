# Bootstrap 4 custom build

This example creates custom build of BS 4 with limited set of CSS modules
and with custom theme based on upcoming Bootswatch 4 content

![image](https://cloud.githubusercontent.com/assets/14539/25548071/f6930ac8-2c6a-11e7-9b44-02d3e9092a76.png)


## Development

Install client dependencies and tools with `Yarn` or `NPM`:

```bash
yarn
yarn install v0.23.3
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
$ dotnet restore
  Restoring packages for /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-theme/bootstrap-theme.csproj...
  Lock file has not changed. Skipping lock file write. Path: /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-theme/obj/project.assets.json
  Restore completed in 1.15 sec for /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-theme/bootstrap-theme.csproj.
  
  NuGet Config files used:
      /Users/piotrblazejewicz/.nuget/NuGet/NuGet.Config
  
  Feeds used:
      https://api.nuget.org/v3/index.json
✨  Done in 14.50s.
```

## Run example

```bash
arn dev
yarn dev v0.23.3
$ npm run build && dotnet run 

> bootstrap-theme@1.0.0 build /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-theme
> npm run clean && npm run scss


> bootstrap-theme@1.0.0 clean /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-theme
> rimraf wwwroot/css


> bootstrap-theme@1.0.0 scss /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-theme
> node-sass --output wwwroot/css --source-map true --output-style expanded --source-map-contents scss/

Rendering Complete, saving .css file...
Wrote Source Map to /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-theme/wwwroot/css/main.css.map
Wrote CSS to /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-theme/wwwroot/css/main.css
Wrote 1 CSS files to /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-theme/wwwroot/css
Hosting environment: Production
Content root path: /Users/piotrblazejewicz/git/dotnet-core-optimization-patterns/bootstrap-theme
Now listening on: http://localhost:5000
Application started. Press Ctrl+C to shut down.
```

## Author

@peterblazejewicz