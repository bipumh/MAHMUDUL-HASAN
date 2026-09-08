import { ImageResponse } from "next/og";

export const imageSize = { width: 1200, height: 630 };
export const imageContentType = "image/png";

export function buildOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px 100px",
          backgroundColor: "#05070d",
          backgroundImage: "linear-gradient(135deg, #05070d 0%, #0b1120 60%, #0e1626 100%)",
          color: "#e8edf6",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(76,139,245,0.16)",
              border: "1px solid rgba(76,139,245,0.5)",
              color: "#a7c4ff",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            MH
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#94a3b8",
              fontSize: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            <span>Enterprise IT Leadership</span>
            <span style={{ marginTop: 4 }}>Cybersecurity · Governance</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>
            MD. MAHMUDUL
          </span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
              backgroundImage: "linear-gradient(120deg, #6aa2ff 0%, #4c8bf5 45%, #2dd4ee 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            HASAN
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 34,
            fontSize: 28,
            fontWeight: 500,
            color: "#cbd8ea",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#2dd4ee",
              display: "flex",
            }}
          />
          IT & Cybersecurity Leader
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#64748b",
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          <span>SOC</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>NOC</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>ISO/IEC 27001</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>ITIL 4</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>13+ Years</span>
        </div>
      </div>
    ),
    imageSize,
  );
}
