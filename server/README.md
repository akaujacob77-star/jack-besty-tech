# Auth API starter

This folder contains a small Express API backed by SQLite. It creates `data/users.sqlite` on first start and stores password hashes rather than plain text passwords.

## Run it

From this folder, install dependencies and start the development server:

```sh
npm install
npm run dev
```

The API listens on port `3001` by default. Set `PORT` to change it.

## Routes

- `GET /api/health`
- `POST /api/auth/register` with `{ "email": "person@example.com", "password": "at-least-8-chars" }`
- `POST /api/auth/login` with the same fields

Login currently verifies credentials and returns the user record. Add a signed session or token, rate limiting, and production origin restrictions before relying on it to protect private pages or deploying it publicly.
