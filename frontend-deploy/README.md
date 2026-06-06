# yt-vcheck Frontend (Angular)

This is the Angular 21 frontend for `yt-vcheck`, customized with Material Design 3 and some signals because I felt like it.

## Commands for running locally

If you're trying to build or run this thing on your machine, here are the commands you actually care about:

### 1. Dev Server
```bash
npm run start
```
Starts the local development server at `http://localhost:4200/`. It has hot-reloading so changes will automatically show up.

### 2. Build for production
```bash
npm run build
```
Compiles and optimizes everything, dumping the production files in the `dist/` directory.

### 3. Running Unit Tests
```bash
npm run test
```
Runs unit tests with Vitest, in case you actually care about writing tests (which I didn't lol).

## Troubleshooting

- **Styles compilation budget warning:** If you add custom styles and Angular warns about budgets, look at the `budgets` config inside `angular.json` and bump it up. I already set it to `30kB` warning and `50kB` error so the CSS doesn't fail the build.
- **Quota errors (403):** You probably hit the daily 10,000 units limit. The app has a quota bar to warn you, but once Google cuts you off, you just have to wait until Pacific midnight for it to reset.
