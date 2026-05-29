import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prept — AI-Powered Mock Interviews";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "#09090b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
      }}
    >
      {/* Top — wordmark */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ fontSize: "28px", fontWeight: "700", color: "#f5f5f4" }}>
          Prept
        </span>
        <div
          style={{
            display: "flex",
            padding: "4px 14px",
            borderRadius: "999px",
            border: "1px solid rgba(251,191,36,0.4)",
            background: "rgba(251,191,36,0.1)",
          }}
        >
          <span style={{ fontSize: "13px", color: "#fbbf24" }}>AI-Powered</span>
        </div>
      </div>

      {/* Center — headline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            lineHeight: "1.05",
            color: "#f5f5f4",
          }}
        >
          Mock interviews that
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            lineHeight: "1.05",
            color: "#f59e0b",
          }}
        >
          level you up.
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#78716c",
            maxWidth: "640px",
            lineHeight: "1.5",
            marginTop: "8px",
          }}
        >
          Book sessions with senior engineers. Get AI feedback reports, HD
          video, and real-time chat.
        </div>
      </div>

      {/* Bottom — feature pills */}
      <div style={{ display: "flex", gap: "12px" }}>
        {[
          "🎥  HD Video",
          "🤖  AI Feedback",
          "💬  Persistent Chat",
          "📹  Recording",
        ].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              fontSize: "15px",
              color: "#a8a29e",
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>,
    { ...size }
  );
}
