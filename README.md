# Content optimization in Dotnet Core (ASP.NET Core)

Various ways to optimize common code size

## Content

### FontAwesome custom build

Build your own FontAwesome CSS to minimize payload size:

![image](https://cloud.githubusercontent.com/assets/14539/25546647/4490be52-2c64-11e7-85f6-3f1fb6b9aae5.png)

### Bootstrap 4 custom build

Build your own Bootstrap 4 CSS with limited set of CSS modules to limit output size
and with custom theme based on Bootswatch 4 (upcoming release):

![image](https://cloud.githubusercontent.com/assets/14539/25548071/f6930ac8-2c6a-11e7-9b44-02d3e9092a76.png)

### Bootstrap 4 JavaScript minimal bundle

Build your own BS4 JavaScript bundle (`bootstrap.min.js` and `bootstrap.js`) using only modules required by application. This uses Babel

![image](https://cloud.githubusercontent.com/assets/14539/25559101/091f0ac8-2d35-11e7-876a-4e49a841e082.png)

## Author

@peterblazejewicz