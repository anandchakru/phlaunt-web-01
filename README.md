# Phlaunt

- router setup works

- /src/features/gallery works.

- need to find a way to execute fetch data only once even if page loads after going to a different page and coming back, useeffect executes each time the page loads/navigate back to the same page.




## Initialize
```sh
APPNAME=phlaunt-web-01
npx create-react-app $APPNAME --template redux-typescript
cd $APPNAME
unset APPNAME
mkdir -p .github/workflows
touch .github/workflows/build-deploy.yml
mv ./src/App.css ./src/App.scss
mv ./src/index.css ./src/index.scss
sed -i.bu 's/css/scss/g' ./src/index.tsx
sed -i.bu 's/css/scss/g' ./src/App.tsx
sed -i.bu 's/"react-jsx"/"react-jsx",\n    "noImplicitAny": false/' tsconfig.json
# Scss
npm i node-sass
# Material
npm i @mui/material @mui/icons-material @emotion/react @emotion/styled @fontsource/roboto @mui/lab
# CI/CD
npm i -D gh-pages
# Router
npm i react-router-dom
# Authentication
npm i firebase reactfire react-error-boundary react-google-button
# Utils
npm i date-fns uuid
```