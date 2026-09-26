# Jack.Besty.Tech

A React and Vite website with a small Express login API. The API stores accounts in a local SQLite database.

## Requirements

- Node.js and npm installed on your computer.
- Two terminal windows, so the website and API can run at the same time.

## Install and run both parts

Open a terminal in the repository's main folder (`jack-besty-tech`). Install and start the front end:

```sh
npm install
npm run dev
```

Leave this terminal running. Vite prints the website address, usually `http://localhost:5173`.

Open a second terminal window. Change into the `server` folder, install its dependencies, and start the API:

```sh
cd server
npm install
npm run dev
```

Leave the second terminal running too. The API listens at `http://localhost:3001`. The Vite development server forwards `/api` requests to it, so open the website using the address printed by Vite and go to `/login`.

If using two new terminals that both start in the repository folder, the second terminal only needs `cd server`. If the second terminal starts elsewhere, change to the repository folder first, then run `cd server`.

To stop either process, focus its terminal and press `Ctrl+C`.

## Create an account and log in

There is currently no registration page. Create a test account by calling the API from PowerShell:

```powershell
$account = @{ email = 'you@example.com'; password = 'choose-a-password' } | ConvertTo-Json
Invoke-RestMethod -Uri 'http://localhost:3001/api/auth/register' -Method Post -ContentType 'application/json' -Body $account
```

Then enter that email and password on the website's `/login` page. The page shows a success message for valid credentials and an error message for incorrect credentials or an unavailable API. It stays on the login page.

## Website pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/services` | Tech and repairs |
| `/store` | Electronics |
| `/academy` | Programming academy |
| `/portfolio` | Portfolio |
| `/contact` | Contact form |
| `/login` | Login form |

## API routes

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | Confirms that the API is running. |
| `POST` | `/api/auth/register` | Creates an account. JSON body: `{"email":"you@example.com","password":"at-least-8-chars"}`. |
| `POST` | `/api/auth/login` | Checks the email and password. Uses the same JSON body as registration. |

The login API verifies the password and returns a user record. It does not create a persistent login session or token yet.

## Data and folders

- `src/` contains the React website.
- `server/src/index.js` contains the Express API and SQLite table setup.
- `server/data/users.sqlite` is created automatically when the API first starts. This local database file is ignored by Git.

## Other commands

Run these from the repository folder:

```sh
npm run build
npm run lint
```

Run the API outside development watch mode from the `server` folder with `npm start`.

## Notes

This is a development starter. Before using the login API publicly, add session or token handling, rate limiting, and production origin restrictions. Never commit real account data or share a production database file.
