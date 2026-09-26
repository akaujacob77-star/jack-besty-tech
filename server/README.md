# Auth API

This folder contains the Express API used by the website's login form. It stores account email addresses and bcrypt password hashes in SQLite.

## Start the API

From the repository root, open a second terminal and run:

```sh
cd server
npm install
npm run dev
```

Keep this terminal open while using the website. The API listens on `http://localhost:3001` by default. Set the `PORT` environment variable to use another port. The root Vite configuration proxies browser requests beginning with `/api` to port 3001.

For the complete instructions to run both the website and API, see the repository [README](../README.md#install-and-run-both-parts).

## Routes

| Method | Path | Request body | Result |
| --- | --- | --- | --- |
| `GET` | `/api/health` | None | Returns `{ "status": "ok" }` when the API is running. |
| `POST` | `/api/auth/register` | `{"email":"person@example.com","password":"at-least-8-chars"}` | Creates an account and returns its ID and email. |
| `POST` | `/api/auth/login` | Same as registration | Checks the password and returns the account ID and email when valid. |

Registration rejects invalid email addresses and passwords shorter than eight characters. It returns `409` if the email is already registered. Login returns `401` when the email or password is incorrect.

## SQLite file

The database is created automatically on first server start at `server/data/users.sqlite`. Its `users` table contains an ID, unique email, password hash, and creation timestamp. The `data` folder and database file are created as needed and ignored by Git.

## Development and production

Run `npm run dev` to restart the API automatically when source files change. Run `npm start` to start it without watch mode.

The login route currently checks credentials but does not issue a session or token. Add session or token handling, rate limiting, and production origin restrictions before deploying or using this API to protect private pages.
