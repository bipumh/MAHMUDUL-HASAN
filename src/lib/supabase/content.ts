import { getSupabase } from "@/lib/supabase/client";
import { defaultContent, type PortfolioContent } from "@/lib/content/defaults";

const PUBLISHED = "published";
const DRAFT = "draft";

function client() {
  const sb = getSupabase();
  if (!sb) {
    throw new Error("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_* env vars.");
  }
  return sb;
}

function coerce(data: unknown): PortfolioContent {
  // Merge fetched document over defaults so missing keys never break the UI.
  return { ...structuredClone(defaultContent), ...(data as object) } as PortfolioContent;
}

// ---- Public content -------------------------------------------------------

export async function getPublishedContent(): Promise<PortfolioContent | null> {
  const sb = getSupabase();
  if (!sb) return null;
  const { data, error } = await sb
    .from("portfolio_content")
    .select("data")
    .eq("key", PUBLISHED)
    .maybeSingle();
  if (error || !data) return null;
  return coerce(data.data);
}

// ---- Admin content --------------------------------------------------------

export async function getDraftContent(): Promise<PortfolioContent> {
  const sb = client();
  const { data, error } = await sb
    .from("portfolio_content")
    .select("data")
    .eq("key", DRAFT)
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) return structuredClone(defaultContent);
  return coerce(data.data);
}

export async function saveDraft(content: PortfolioContent): Promise<void> {
  const sb = client();
  const { error } = await sb.from("portfolio_content").upsert(
    { key: DRAFT, data: content, updated_at: new Date().toISOString() },
    { onConflict: "key" },
  );
  if (error) throw new Error(error.message);
}

export async function publishContent(content: PortfolioContent): Promise<void> {
  const sb = client();
  const { error } = await sb.from("portfolio_content").upsert(
    { key: PUBLISHED, data: content, updated_at: new Date().toISOString() },
    { onConflict: "key" },
  );
  if (error) throw new Error(error.message);
}

// ---- CV storage -----------------------------------------------------------

export async function uploadCv(file: File): Promise<string> {
  const sb = client();
  const ext = file.name.split(".").pop()?.toLowerCase();
  const path = `cv-${Date.now()}.${ext === "pdf" ? "pdf" : ext}`;
  const { error } = await sb.storage.from("cv").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
    contentType: "application/pdf",
  });
  if (error) throw new Error(error.message);
  const { data } = sb.storage.from("cv").getPublicUrl(path);
  return data.publicUrl;
}

// ---- Auth -----------------------------------------------------------------

export async function signIn(email: string, password: string) {
  const sb = client();
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message, user: null };
  return { error: null, user: data.user };
}

export async function signOut() {
  const sb = getSupabase();
  if (sb) await sb.auth.signOut();
}

export async function getSession() {
  const sb = getSupabase();
  if (!sb) return null;
  const { data } = await sb.auth.getSession();
  return data.session;
}

/** True when the signed-in user is registered in the `admins` table. */
export async function isAdmin(): Promise<boolean> {
  const sb = getSupabase();
  if (!sb) {
    console.log("[isAdmin] Supabase not configured");
    return false;
  }
  const session = await getSession();
  if (!session?.user) {
    console.log("[isAdmin] No session/user");
    return false;
  }
  console.log("[isAdmin] session.user.id =", session.user.id);
  const { data, error } = await sb
    .from("admins")
    .select("user_id")
    .eq("user_id", session.user.id)
    .maybeSingle();
  console.log("[isAdmin] query result =", { data, error });
  return !error && !!data;
}
