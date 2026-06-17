# Get the database running on Vercel

I'll create a short plan of steps to deploy a remote DB and run migrations on Vercel.

Created 5 todos

Short answer: Vercel cannot reliably use your local file DB — use a remote DB (Turso, Supabase, Vercel Postgres, etc.). I recommend Turso since your drizzle.config.ts already uses `dialect: 'turso'`.

Steps to get the app working on Vercel

- Create a Turso DB (or other managed SQL) and get the connection URL and auth token.
  - In your Vercel project, add environment variables:
  - `TURSO_DATABASE_URL` = your Turso URL
  - `TURSO_AUTH_TOKEN` = your Turso auth token (leave empty for development if appropriate)
  - Run migrations against the remote DB locally so the remote has the `tasks` table:

  ```bash
  # from project root, replace with real values
  export TURSO_DATABASE_URL='your-turso-url'
  export TURSO_AUTH_TOKEN='your-turso-token'
  npx drizzle-kit migrate
  ```

  Or one-liner:

  ```bash
  TURSO_DATABASE_URL='your-turso-url'
  TURSO_AUTH_TOKEN='your-turso-token'
  npx drizzle-kit migrate
  ```

  - Confirm remote schema:
  - Use Turso CLI/UI or run queries with a SQLite client compatible with Turso (or use `drizzle-kit`/`node` scripts).
  - Redeploy on Vercel (or push commit). The app will read the remote DB via env vars.

Notes and gotchas

- Do not use `file:local.db` in production — Vercel filesystem is ephemeral and not shared across instances.
- If you prefer another provider (Supabase, Vercel Postgres, PlanetScale), I can show migration commands and small config edits for them.
- If you want automation, we can:
  - Add an npm script (e.g., `migrate:remote`) to package.json.
  - Or add a GitHub Action to run `drizzle-kit migrate` after pushes.

Would you like me to:

- (A) Add a `migrate:remote` npm script to package.json and run migrations now (you’ll provide the TURSO values), or
- (B) Walk you through creating a Turso database and setting Vercel env vars step-by-step?
