"use client";

import { useRef, useState } from "react";
import { FileText, Upload, CheckCircle2, AlertCircle } from "lucide-react";
import { uploadCv } from "@/lib/supabase/content";
import { Card } from "@/components/admin/ui";

type Status =
  | { state: "idle" }
  | { state: "uploading" }
  | { state: "success"; url: string }
  | { state: "error"; message: string };

export function CvManager({
  cvUrl,
  onUploaded,
}: {
  cvUrl: string | null;
  onUploaded: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleFile(file: File | undefined) {
    if (!file) return;
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setStatus({ state: "error", message: "Only PDF files are allowed." });
      return;
    }
    setStatus({ state: "uploading" });
    try {
      const url = await uploadCv(file);
      setStatus({ state: "success", url });
      onUploaded(url);
    } catch (e) {
      setStatus({ state: "error", message: e instanceof Error ? e.message : "Upload failed." });
    }
  }

  return (
    <Card
      title="CV Management"
      subtitle="Upload a PDF to replace the currently downloadable CV. The public 'Download CV' button always points to the active CV."
    >
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-lg border border-line-strong bg-surface-2/60 px-3 py-2.5">
          <FileText aria-hidden className="h-4 w-4 shrink-0 text-primary-bright" />
          <span className="truncate font-mono text-xs text-muted">
            {cvUrl && /^https?:\/\//i.test(cvUrl)
              ? "Supabase CV (published)"
              : "Built-in CV (public/MD-Mahmudul-Hasan-CV.pdf)"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-bright"
        >
          <Upload aria-hidden className="h-4 w-4" />
          Upload PDF
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf,.pdf"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>

      {status.state === "uploading" ? (
        <p className="mt-3 flex items-center gap-2 text-sm text-muted">
          <span className="h-3 w-3 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          Uploading…
        </p>
      ) : null}

      {status.state === "success" ? (
        <p className="mt-3 flex items-center gap-2 text-sm text-primary-bright">
          <CheckCircle2 aria-hidden className="h-4 w-4" />
          CV uploaded — remember to Save draft and Publish.
        </p>
      ) : null}

      {status.state === "error" ? (
        <p className="mt-3 flex items-center gap-2 text-sm text-red-400">
          <AlertCircle aria-hidden className="h-4 w-4" />
          {status.message}
        </p>
      ) : null}

      {cvUrl && /^https?:\/\//i.test(cvUrl) ? (
        <p className="mt-3 break-all text-[11px] text-faint">{cvUrl}</p>
      ) : null}
    </Card>
  );
}
