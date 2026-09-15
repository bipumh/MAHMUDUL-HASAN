"use client";

import { useCallback, useEffect, useState } from "react";
import { Lock, ArrowRight, AlertCircle } from "lucide-react";
import { signIn, signOut, getSession, isAdmin } from "@/lib/supabase/content";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import { AdminDashboard } from "@/components/admin/admin-dashboard";

type AuthState =
  | { phase: "checking" }
  | { phase: "login" }
  | { phase: "authed" }
  | { phase: "unconfigured" };

export default function AdminPage() {
  const [auth, setAuth] = useState<AuthState>(() =>
    isSupabaseConfigured ? { phase: "checking" } : { phase: "unconfigured" },
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    let active = true;
    (async () => {
      const session = await getSession();
      if (!session) {
        if (active) setAuth({ phase: "login" });
        return;
      }
      const admin = await isAdmin();
      if (active) setAuth(admin ? { phase: "authed" } : { phase: "login" });
    })();
    return () => {
      active = false;
    };
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setBusy(true);
      setError(null);
      const { error: signInError } = await signIn(email, password);
      if (signInError) {
        setError("Invalid credentials.");
        setBusy(false);
        return;
      }
      const admin = await isAdmin();
      setBusy(false);
      if (admin) {
        setAuth({ phase: "authed" });
      } else {
        setError("This account is not registered as an admin.");
        await signOut();
      }
    },
    [email, password],
  );

  const handleSignOut = useCallback(async () => {
    await signOut();
    setAuth({ phase: "login" });
    setPassword("");
  }, []);

  if (auth.phase === "checking") {
    return <p className="py-32 text-center text-muted">Checking session…</p>;
  }

  if (auth.phase === "unconfigured") {
    return (
      <div className="mx-auto max-w-xl px-5 py-32 text-center">
        <p className="text-lg text-foreground">Admin is not configured yet.</p>
        <p className="mt-3 text-sm text-muted">
          Set <code className="text-primary-bright">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code className="text-primary-bright">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, then follow{" "}
          <code className="text-primary-bright">supabase/SETUP.md</code>.
        </p>
      </div>
    );
  }

  if (auth.phase === "authed") {
    return <AdminDashboard onSignOut={handleSignOut} />;
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-5 py-20">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary-soft text-primary-bright">
            <Lock aria-hidden className="h-5 w-5" />
          </span>
          <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground">
            Admin Login
          </h1>
          <p className="mt-2 text-sm text-dim">Restricted to the portfolio owner.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
              Email
            </span>
            <input
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
              Password
            </span>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
            />
          </label>

          {error ? (
            <p className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle aria-hidden className="h-4 w-4" />
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={busy}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-white transition-colors hover:bg-primary-bright disabled:opacity-50"
          >
            {busy ? "Signing in…" : "Sign in"}
            {!busy ? <ArrowRight aria-hidden className="h-4 w-4" /> : null}
          </button>
        </form>
      </div>
    </div>
  );
}
