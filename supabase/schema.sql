-- ============================================================================
-- MD. Mahmudul Hasan — Portfolio Admin schema (Supabase)
--
-- Run this entire file in the Supabase SQL editor (Dashboard → SQL → New query)
-- AFTER creating your owner user in Authentication. See SETUP.md for full steps.
-- ============================================================================

-- 1. Owner/admin registry ------------------------------------------------
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admins enable row level security;

-- An admin can see their own row (used by the exists() checks below).
create policy "admins_read_self"
  on public.admins for select
  using (auth.uid() = user_id);


-- 2. Portfolio content ----------------------------------------------------
-- A single JSONB document per key: 'draft' (working copy) and 'published'
-- (what the public site reads). The document shape mirrors the static
-- src/data/* modules exactly.
create table if not exists public.portfolio_content (
  key text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.portfolio_content enable row level security;

-- Public read: only the published document is visible to everyone.
create policy "content_read_published"
  on public.portfolio_content for select
  using (key = 'published');

-- Admin read: admins can also read the draft.
create policy "content_read_draft"
  on public.portfolio_content for select
  using (exists (select 1 from public.admins where user_id = auth.uid()));

-- Admin write: only admins can insert/update/delete.
create policy "content_admin_write"
  on public.portfolio_content for all
  using (exists (select 1 from public.admins where user_id = auth.uid()))
  with check (exists (select 1 from public.admins where user_id = auth.uid()));


-- 3. CV storage -----------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('cv', 'cv', true)
on conflict (id) do nothing;

-- Public download of any CV.
create policy "cv_public_read"
  on storage.objects for select
  using (bucket_id = 'cv');

-- Only admins can upload/replace/delete CV files.
create policy "cv_admin_insert"
  on storage.objects for insert
  with check (
    bucket_id = 'cv'
    and exists (select 1 from public.admins where user_id = auth.uid())
  );

create policy "cv_admin_update"
  on storage.objects for update
  using (
    bucket_id = 'cv'
    and exists (select 1 from public.admins where user_id = auth.uid())
  );

create policy "cv_admin_delete"
  on storage.objects for delete
  using (
    bucket_id = 'cv'
    and exists (select 1 from public.admins where user_id = auth.uid())
  );
