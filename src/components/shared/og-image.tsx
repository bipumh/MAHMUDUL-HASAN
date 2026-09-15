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
          backgroundColor: "#171411",
          backgroundImage: "linear-gradient(135deg, #171411 0%, #201a16 55%, #2a211a 100%)",
          color: "#ece6db",
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
              backgroundColor: "rgba(196,122,68,0.16)",
              border: "1px solid rgba(196,122,68,0.5)",
              color: "#e0a56f",
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
              color: "#a89e8e",
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
              backgroundImage: "linear-gradient(120deg, #f0e3cd 0%, #ddb88d 45%, #c47a44 100%)",
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
            color: "#d8cfbe",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#c47a44",
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
            color: "#7a7161",
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
