```
________ ____ ____ ____ ____ ____ ____ ____ ____ ________________
________ ____ ____ ____ ____ ____ ____ ____ ____ ________________
________ ___                _                       _____________
________ ___    ___ ___ ___| |_ ___ ___ _ _ ___     _____________
________ ___   |  _| -_|  _| . | -_|  _| | |_ -|    _____________
________ ___   |___|___|_| |___|___|_| |___|___|    _____________
________ ____ ____ ____ ____ ____ ____ ____ ____ ________________
________ ____ ____ ____ ____ ____ ____ ____ ____ ________________
```

# cerberus.zip
This website was made using [ExpressJS](https://expressjs.com).

Currently hosted in [Vercel](https://vercel.com).

Content on this site is licensed [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## Running Locally

In order to run locally, use Yarn to install the dependencies:

`yarn install`

Before running you need to create a `.env` file, this can be done by just renaming the `.env.example` file. After, you can use the run command to run the website on port 3000:

`yarn run`

## Deployment

Before deploying to Vercel, you should use build to output the current work to the `dist` directory:

`yarn build`

Currently this website uses GitHub with a Vercel integration as the CI/CD engine. This is fairly easy to setup (go read the manual)