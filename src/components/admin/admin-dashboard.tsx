"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  Save,
  Upload,
  CheckCircle2,
  AlertCircle,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import {
  getDraftContent,
  saveDraft,
  publishContent,
} from "@/lib/supabase/content";
import type { MutableContent } from "@/lib/content/defaults";
import { COMPETENCY_ICON_KEYS } from "@/lib/content/icons";
import { Card, Field, GhostButton } from "@/components/admin/ui";
import { CvManager } from "@/components/admin/cv-manager";
import { cn } from "@/lib/cn";

type Status = { kind: "idle" } | { kind: "busy" } | { kind: "ok"; msg: string } | { kind: "err"; msg: string };

const TABS = [
  { id: "profile", label: "Profile" },
  { id: "contact", label: "Contact" },
  { id: "metrics", label: "Metrics" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "expertise", label: "Expertise" },
  { id: "cv", label: "CV" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function AdminDashboard({ onSignOut }: { onSignOut: () => void }) {
  const [content, setContent] = useState<MutableContent | null>(null);
  const [tab, setTab] = useState<TabId>("profile");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    getDraftContent()
      .then(setContent)
      .catch((e) => setLoadError(e instanceof Error ? e.message : "Failed to load content."));
  }, []);

  function patch(fn: (c: MutableContent) => MutableContent) {
    setContent((prev) => (prev ? fn(prev) : prev));
  }

  async function handleSave() {
    if (!content) return;
    setStatus({ kind: "busy" });
    try {
      await saveDraft(content);
      setStatus({ kind: "ok", msg: "Draft saved." });
    } catch (e) {
      setStatus({ kind: "err", msg: e instanceof Error ? e.message : "Save failed." });
    }
  }

  async function handlePublish() {
    if (!content) return;
    setStatus({ kind: "busy" });
    try {
      await publishContent(content);
      setStatus({ kind: "ok", msg: "Published — the public site now shows these changes." });
    } catch (e) {
      setStatus({ kind: "err", msg: e instanceof Error ? e.message : "Publish failed." });
    }
  }

  if (loadError) {
    return (
      <div className="mx-auto max-w-2xl py-24 text-center">
        <p className="text-red-400">{loadError}</p>
        <p className="mt-3 text-sm text-muted">
          Check that Supabase is configured and that your account is registered as an admin.
        </p>
      </div>
    );
  }

  if (!content) {
    return <p className="py-24 text-center text-muted">Loading content…</p>;
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary-bright">
            Admin / Content
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
            Portfolio Control
          </h1>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <Save aria-hidden className="h-4 w-4" />
            Save Draft
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-bright"
          >
            <Upload aria-hidden className="h-4 w-4" />
            Publish
          </button>
          <button
            type="button"
            onClick={onSignOut}
            className="inline-flex h-11 items-center px-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            Sign out
          </button>
        </div>
      </div>

      {status.kind !== "idle" ? (
        <div
          className={cn(
            "mt-5 flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm",
            status.kind === "err"
              ? "border-red-500/30 text-red-400"
              : status.kind === "busy"
                ? "border-line text-muted"
                : "border-primary/30 text-primary-bright",
          )}
        >
          {status.kind === "busy" ? (
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          ) : status.kind === "err" ? (
            <AlertCircle aria-hidden className="h-4 w-4" />
          ) : (
            <CheckCircle2 aria-hidden className="h-4 w-4" />
          )}
          {status.kind === "busy" ? "Working…" : status.kind === "ok" ? status.msg : status.kind === "err" ? status.msg : ""}
        </div>
      ) : null}

      <nav className="mt-6 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              tab === t.id
                ? "bg-primary-soft text-primary-bright"
                : "text-muted hover:bg-surface-2 hover:text-foreground",
            )}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="mt-10 space-y-12">
        {tab === "profile" ? (
          <ProfileEditor content={content} patch={patch} />
        ) : tab === "contact" ? (
          <ContactEditor content={content} patch={patch} />
        ) : tab === "metrics" ? (
          <MetricsEditor content={content} patch={patch} />
        ) : tab === "experience" ? (
          <ExperienceEditor content={content} patch={patch} />
        ) : tab === "certifications" ? (
          <CertificationsEditor content={content} patch={patch} />
        ) : tab === "education" ? (
          <EducationEditor content={content} patch={patch} />
        ) : tab === "expertise" ? (
          <ExpertiseEditor content={content} patch={patch} />
        ) : tab === "cv" ? (
          <CvManager cvUrl={content.cvUrl ?? null} onUploaded={(url) => patch((c) => ({ ...c, cvUrl: url }))} />
        ) : null}
      </div>
    </div>
  );
}

function ProfileEditor({
  content,
  patch,
}: {
  content: MutableContent;
  patch: (fn: (c: MutableContent) => MutableContent) => void;
}) {
  const p = content.profile;
  const set = (key: string, value: unknown) =>
    patch((c) => ({ ...c, profile: { ...c.profile, [key]: value } as MutableContent["profile"] }));

  return (
    <>
      <Card title="Hero / Profile">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" value={p.name} onChange={(v) => set("name", v)} />
          <Field label="Professional title" value={p.title} onChange={(v) => set("title", v)} />
          <Field label="Location" value={p.location} onChange={(v) => set("location", v)} />
          <Field label="Eyebrow" value={p.eyebrow} onChange={(v) => set("eyebrow", v)} />
        </div>
        <div className="mt-5">
          <Field label="Hero summary" value={p.heroTagline} onChange={(v) => set("heroTagline", v)} rows={3} />
        </div>
      </Card>

      <Card title="About">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Heading (top)" value={p.aboutHeading.top} onChange={(v) => patch((c) => ({ ...c, profile: { ...c.profile, aboutHeading: { ...c.profile.aboutHeading, top: v } } }))} />
          <Field label="Heading (bottom)" value={p.aboutHeading.bottom} onChange={(v) => patch((c) => ({ ...c, profile: { ...c.profile, aboutHeading: { ...c.profile.aboutHeading, bottom: v } } }))} />
        </div>
        <div className="mt-5">
          <Field label="About lead" value={p.aboutLead} onChange={(v) => set("aboutLead", v)} rows={2} />
        </div>
        <div className="mt-5">
          <StringListEditor
            title="About paragraphs"
            items={p.aboutParagraphs}
            onChange={(items) => patch((c) => ({ ...c, profile: { ...c.profile, aboutParagraphs: items } }))}
            rows
          />
        </div>
        <div className="mt-5">
          <StringListEditor
            title="Core focus areas"
            items={p.focusAreas}
            onChange={(items) => patch((c) => ({ ...c, profile: { ...c.profile, focusAreas: items } }))}
          />
        </div>
      </Card>

      <Card title="Executive profile fields">
        <ObjectListEditor
          items={p.executiveProfile}
          fields={[
            { key: "label", label: "Label" },
            { key: "value", label: "Value" },
          ]}
          newItem={() => ({ label: "", value: "" })}
          onChange={(items) => patch((c) => ({ ...c, profile: { ...c.profile, executiveProfile: items as typeof p.executiveProfile } }))}
        />
      </Card>
    </>
  );
}

function ContactEditor({
  content,
  patch,
}: {
  content: MutableContent;
  patch: (fn: (c: MutableContent) => MutableContent) => void;
}) {
  const s = content.site;
  const set = (key: string, value: unknown) =>
    patch((c) => ({ ...c, site: { ...c.site, [key]: value } as MutableContent["site"] }));

  return (
    <Card title="Contact & identity">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" value={s.name} onChange={(v) => set("name", v)} />
        <Field label="Title" value={s.title} onChange={(v) => set("title", v)} />
        <Field label="Email" value={s.email} onChange={(v) => set("email", v)} />
        <Field label="Phone" value={s.phone} onChange={(v) => set("phone", v)} />
        <Field label="Location" value={s.location} onChange={(v) => set("location", v)} />
        <Field label="LinkedIn URL" value={s.linkedinHref} onChange={(v) => set("linkedinHref", v)} />
        <Field label="LinkedIn label" value={s.linkedinLabel} onChange={(v) => set("linkedinLabel", v)} />
        <Field label="YouTube URL" value={s.youtubeHref} onChange={(v) => set("youtubeHref", v)} />
        <Field label="YouTube label" value={s.youtubeLabel} onChange={(v) => set("youtubeLabel", v)} />
      </div>
      <p className="mt-4 text-xs text-faint">
        Email and phone links (mailto/tel) are derived automatically from the values above.
      </p>
    </Card>
  );
}

function MetricsEditor({
  content,
  patch,
}: {
  content: MutableContent;
  patch: (fn: (c: MutableContent) => MutableContent) => void;
}) {
  return (
    <>
      <Card title="Executive metrics (top strip)">
        <ObjectListEditor
          items={content.executiveMetrics}
          fields={[
            { key: "value", label: "Value", type: "number" },
            { key: "text", label: "Text (optional)" },
            { key: "suffix", label: "Suffix" },
            { key: "label", label: "Label" },
            { key: "detail", label: "Detail", type: "textarea" },
          ]}
          newItem={() => ({ value: 0, text: "", suffix: "", label: "", detail: "" })}
          onChange={(items) => patch((c) => ({ ...c, executiveMetrics: items as typeof c.executiveMetrics }))}
        />
      </Card>
      <Card title="Impact metrics">
        <ObjectListEditor
          items={content.impactMetrics}
          fields={[
            { key: "value", label: "Value", type: "number" },
            { key: "text", label: "Text (optional)" },
            { key: "suffix", label: "Suffix" },
            { key: "label", label: "Label" },
            { key: "detail", label: "Detail", type: "textarea" },
          ]}
          newItem={() => ({ value: 0, text: "", suffix: "", label: "", detail: "" })}
          onChange={(items) => patch((c) => ({ ...c, impactMetrics: items as typeof c.impactMetrics }))}
        />
      </Card>
    </>
  );
}

function ExperienceEditor({
  content,
  patch,
}: {
  content: MutableContent;
  patch: (fn: (c: MutableContent) => MutableContent) => void;
}) {
  const exp = content.experience;
  const current = exp.current;
  const timeline = exp.timeline;

  return (
    <>
      <Card title="Current role">
        <RoleEditor
          role={current}
          onChange={(r) => patch((c) => ({ ...c, experience: { ...c.experience, current: r as typeof c.experience.current } }))}
        />
      </Card>
      <Card title="Previous roles (reorderable)">
        <ObjectListEditor
          items={timeline}
          renderItem={(role, update) => (
            <RoleEditor role={role} onChange={(r) => update(r)} compact />
          )}
          newItem={() => ({
            id: String(Date.now()),
            period: "",
            roleTitle: "",
            company: "",
            location: "",
            status: "previous",
            summary: "",
            responsibilityGroups: [],
          })}
          onChange={(items) => patch((c) => ({ ...c, experience: { ...c.experience, timeline: items as typeof c.experience.timeline } }))}
        />
      </Card>
    </>
  );
}

function CertificationsEditor({
  content,
  patch,
}: {
  content: MutableContent;
  patch: (fn: (c: MutableContent) => MutableContent) => void;
}) {
  return (
    <Card title="Certifications">
      <ObjectListEditor
        items={content.certifications}
        fields={[
          { key: "code", label: "Code" },
          { key: "fullName", label: "Full name" },
          { key: "year", label: "Year" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "featured", label: "Featured", type: "checkbox" },
        ]}
        newItem={() => ({ id: String(Date.now()), code: "", fullName: "", year: "", featured: false, description: "" })}
        onChange={(items) => patch((c) => ({ ...c, certifications: items as typeof c.certifications }))}
      />
    </Card>
  );
}

function EducationEditor({
  content,
  patch,
}: {
  content: MutableContent;
  patch: (fn: (c: MutableContent) => MutableContent) => void;
}) {
  return (
    <>
      <Card title="Education">
        <ObjectListEditor
          items={content.education}
          fields={[
            { key: "degree", label: "Degree" },
            { key: "program", label: "Program" },
            { key: "institution", label: "Institution" },
            { key: "institutionType", label: "Type" },
            { key: "year", label: "Year" },
            { key: "result", label: "Result" },
          ]}
          newItem={() => ({ id: String(Date.now()), degree: "", program: "", institution: "", institutionType: "", year: "", result: "" })}
          onChange={(items) => patch((c) => ({ ...c, education: items as typeof c.education }))}
        />
      </Card>
      <Card title="Recognition">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Title" value={content.recognition.title} onChange={(v) => patch((c) => ({ ...c, recognition: { ...c.recognition, title: v } }))} />
          <Field label="Detail" value={content.recognition.detail} onChange={(v) => patch((c) => ({ ...c, recognition: { ...c.recognition, detail: v } }))} />
        </div>
      </Card>
    </>
  );
}

function ExpertiseEditor({
  content,
  patch,
}: {
  content: MutableContent;
  patch: (fn: (c: MutableContent) => MutableContent) => void;
}) {
  return (
    <Card title="Expertise groups">
      <ObjectListEditor
        items={content.competencyGroups}
        fields={[
          { key: "title", label: "Title" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "icon", label: "Icon", type: "select", options: COMPETENCY_ICON_KEYS },
          { key: "items", label: "Items (one per line)", type: "list" },
        ]}
        newItem={() => ({ id: String(Date.now()), icon: "governance", title: "", description: "", items: [] })}
        onChange={(items) => patch((c) => ({ ...c, competencyGroups: items as typeof c.competencyGroups }))}
      />
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/* Reusable editors                                                    */
/* ------------------------------------------------------------------ */

type FieldDef = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "checkbox" | "select" | "list";
  options?: string[];
};

function ObjectListEditor({
  items,
  fields,
  newItem,
  onChange,
  renderItem,
}: {
  items: unknown[];
  fields?: FieldDef[];
  newItem: () => unknown;
  onChange: (items: unknown[]) => void;
  renderItem?: (item: Record<string, unknown>, update: (next: unknown) => void) => ReactNode;
}) {
  const rows = items as Record<string, unknown>[];
  const update = (i: number, key: string, value: unknown) => {
    const next = [...items];
    next[i] = { ...rows[i], [key]: value };
    onChange(next);
  };
  const add = () => onChange([...items, newItem()]);
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="space-y-4">
      {rows.map((item, i) => (
        <div key={i} className="rounded-xl border border-line bg-surface-2/40 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
              Item {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5">
              <GhostButton title="Move up" onClick={() => move(i, -1)}>
                <ArrowUp aria-hidden className="h-4 w-4" />
              </GhostButton>
              <GhostButton title="Move down" onClick={() => move(i, 1)}>
                <ArrowDown aria-hidden className="h-4 w-4" />
              </GhostButton>
              <GhostButton title="Remove" onClick={() => remove(i)}>
                <Trash2 aria-hidden className="h-4 w-4" />
              </GhostButton>
            </div>
          </div>

          {renderItem ? (
            renderItem(item, (next) => onChange(items.map((it, idx) => (idx === i ? next : it))))
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {(fields ?? []).map((f) => (
                <FieldRenderer key={f.key} field={f} value={item[f.key]} onChange={(v) => update(i, f.key, v)} />
              ))}
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={add}
        className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary-bright"
      >
        <Plus aria-hidden className="h-4 w-4" />
        Add item
      </button>
    </div>
  );
}

function FieldRenderer({
  field,
  value,
  onChange,
}: {
  field: FieldDef;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  if (field.type === "checkbox") {
    return (
      <label className="flex items-center gap-2.5 self-end pb-1">
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 rounded border-line-strong bg-surface-2 accent-[#c47a44]"
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{field.label}</span>
      </label>
    );
  }
  if (field.type === "select") {
    return (
      <label className="block">
        <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{field.label}</span>
        <select
          value={String(value ?? "")}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/60"
        >
          {(field.options ?? []).map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
    );
  }
  if (field.type === "list") {
    const items = Array.isArray(value) ? (value as string[]) : [];
    return (
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{field.label}</span>
        <textarea
          value={items.join("\n")}
          rows={Math.max(2, items.length + 1)}
          onChange={(e) => onChange(e.target.value.split("\n").map((s) => s.trim()).filter(Boolean))}
          className="w-full resize-y rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/60"
        />
      </label>
    );
  }
  if (field.type === "number") {
    return (
      <label className="block">
        <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{field.label}</span>
        <input
          type="number"
          value={value == null ? "" : String(value)}
          onChange={(e) => onChange(e.target.value === "" ? null : Number(e.target.value))}
          className="w-full rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/60"
        />
      </label>
    );
  }
  if (field.type === "textarea") {
    return (
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{field.label}</span>
        <textarea
          value={String(value ?? "")}
          rows={2}
          onChange={(e) => onChange(e.target.value)}
          className="w-full resize-y rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/60"
        />
      </label>
    );
  }
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{field.label}</span>
      <input
        value={String(value ?? "")}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/60"
      />
    </label>
  );
}

function StringListEditor({
  title,
  items,
  onChange,
  rows,
}: {
  title: string;
  items: string[];
  onChange: (items: string[]) => void;
  rows?: boolean;
}) {
  const update = (i: number, v: string) => onChange(items.map((it, idx) => (idx === i ? v : it)));
  const add = () => onChange([...items, ""]);
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div>
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{title}</p>
      <div className="space-y-2.5">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            {rows ? (
              <textarea
                value={item}
                rows={2}
                onChange={(e) => update(i, e.target.value)}
                className="w-full resize-y rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/60"
              />
            ) : (
              <input
                value={item}
                onChange={(e) => update(i, e.target.value)}
                className="w-full rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/60"
              />
            )}
            <GhostButton title="Move up" onClick={() => move(i, -1)}>
              <ArrowUp aria-hidden className="h-4 w-4" />
            </GhostButton>
            <GhostButton title="Move down" onClick={() => move(i, 1)}>
              <ArrowDown aria-hidden className="h-4 w-4" />
            </GhostButton>
            <GhostButton title="Remove" onClick={() => remove(i)}>
              <Trash2 aria-hidden className="h-4 w-4" />
            </GhostButton>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={add}
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary-bright"
      >
        <Plus aria-hidden className="h-4 w-4" />
        Add
      </button>
    </div>
  );
}

function RoleEditor({
  role: roleProp,
  onChange,
  compact,
}: {
  role: unknown;
  onChange: (next: unknown) => void;
  compact?: boolean;
}) {
  const role = roleProp as Record<string, unknown>;
  const set = (key: string, value: unknown) => onChange({ ...role, [key]: value });

  const groups = Array.isArray(role.responsibilityGroups) ? (role.responsibilityGroups as Record<string, unknown>[]) : [];
  const setGroups = (g: Record<string, unknown>[]) => onChange({ ...role, responsibilityGroups: g });

  return (
    <div className={cn("space-y-4", compact && "border-b border-line/50 pb-4")}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company" value={String(role.company ?? "")} onChange={(v) => set("company", v)} />
        <Field label="Role title" value={String(role.roleTitle ?? "")} onChange={(v) => set("roleTitle", v)} />
        <Field label="Period" value={String(role.period ?? "")} onChange={(v) => set("period", v)} />
        <Field label="Location" value={String(role.location ?? "")} onChange={(v) => set("location", v)} />
        <Field label="Tenure" value={String(role.tenure ?? "")} onChange={(v) => set("tenure", v)} />
        <Field label="Status" value={String(role.status ?? "previous")} onChange={(v) => set("status", v)} />
      </div>
      <Field label="Summary" value={String(role.summary ?? "")} onChange={(v) => set("summary", v)} rows={2} />

      <div>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">Responsibility groups</p>
        <div className="space-y-3">
          {groups.map((g, i) => {
            const items = Array.isArray(g.items) ? (g.items as string[]) : [];
            return (
              <div key={i} className="rounded-lg border border-line/60 bg-surface-2/40 p-3">
                <div className="flex items-center gap-2">
                  <input
                    value={String(g.title ?? "")}
                    onChange={(e) => setGroups(groups.map((it, idx) => (idx === i ? { ...it, title: e.target.value } : it)))}
                    placeholder="Group title"
                    className="w-full rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/60"
                  />
                  <GhostButton
                    title="Remove group"
                    onClick={() => setGroups(groups.filter((_, idx) => idx !== i))}
                  >
                    <Trash2 aria-hidden className="h-4 w-4" />
                  </GhostButton>
                </div>
                <textarea
                  value={items.join("\n")}
                  rows={Math.max(2, items.length + 1)}
                  onChange={(e) =>
                    setGroups(groups.map((it, idx) =>
                      idx === i ? { ...it, items: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean) } : it,
                    ))
                  }
                  placeholder="One item per line"
                  className="mt-2 w-full resize-y rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2 text-sm text-foreground outline-none focus:border-primary/60"
                />
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setGroups([...groups, { title: "", items: [] }])}
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary-bright"
        >
          <Plus aria-hidden className="h-4 w-4" />
          Add group
        </button>
      </div>
    </div>
  );
}
