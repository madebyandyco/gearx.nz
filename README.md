# gearx.nz website

## Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── CNAME
├── src/
├── astro.config.mjs
├── package.json
└── ... other files
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Build commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Git commands

| Command                                                      | Action                                                        |
| :----------------------------------------------------------- | :------------------------------------------------------------ |
| `git init`                                                   | start tracking current directory                              |
| `git add -A`                                                 | add files in current directory to staging                     |
| `git commit -m "commit message"`                             | commit your changes                                           |
| `git remote add origin https://github.com/username/repo.git` | add remote repository URL which contains the required details |
| `git pull origin main`                                       | always pull from remote before pushing                        |
| `git push -u origin main`                                    | publish changes to your remote repository                     |
