# Supabase Setup — Portfolio Admin

This portfolio's admin system uses **Supabase** (free tier) for authentication,
database, and CV storage. The public site stays on GitHub Pages; Supabase only
backs the admin area and stores published content.

## 1. Create the project

1. Go to https://supabase.com and sign up / sign in.
2. Create a new project (any name, e.g. `mh-portfolio`).
3. Note the region; the free tier is fine.

## 2. Create your owner account

1. In the dashboard, open **Authentication → Providers → Email**.
2. Disable **"Allow new users to sign up"** (so strangers can't self-register).
3. Open **Authentication → Users → Add user**.
4. Create a user with your email and a strong password, and tick
   **"Auto confirm user"**.

## 3. Apply the database schema

1. Open **SQL Editor → New query**.
2. Paste the entire contents of `supabase/schema.sql`.
3. Click **Run**.

## 4. Register yourself as an admin

1. Open **Authentication → Users**, click your user, and copy its **User UUID**.
2. Open **SQL Editor → New query** and run:

   ```sql
   insert into public.admins (user_id)
   values ('PASTE_YOUR_USER_UUID_HERE');
   ```

   (You only do this once. The SQL editor runs as the project owner and
   bypasses Row-Level Security, so it works even though no admin exists yet.)

## 5. Wire the app

1. Open **Project Settings → API**. Copy:
   - **Project URL**
   - **anon public** key
2. In this repo, create `.env.local` (already git-ignored):

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
   ```

3. Restart `npm run dev` and rebuild/redeploy.

> The `anon` key is safe to expose publicly — all write operations are blocked
> by Row-Level Security on the server, so only your admin account (registered in
> step 4) can edit content or upload CVs.

## 6. First publish

1. Visit `/admin` and log in with the email/password from step 2.
2. The dashboard loads the current content (seeded from the site's static data).
3. Make edits, **Save draft**, then **Publish**.
4. The public site reads the published document; if none exists it falls back to
   the built-in content.

## CV

Upload a PDF in the dashboard's **CV Management** section. Files are stored in
the `cv` bucket (public read, admin-only write). The public "Download CV" button
uses the published CV URL, falling back to `public/MD-Mahmudul-Hasan-CV.pdf`.
