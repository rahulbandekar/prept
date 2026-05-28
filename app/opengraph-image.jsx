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
        fontFamily: "Georgia, serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-80px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Top — wordmark + badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#f5f5f4",
            letterSpacing: "-0.5px",
          }}
        >
          Prept
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "4px 14px",
            borderRadius: "999px",
            border: "1px solid rgba(251,191,36,0.3)",
            background: "rgba(251,191,36,0.08)",
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
            letterSpacing: "-2px",
            color: "#a8a29e",
          }}
        >
          Mock interviews
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #fcd34d, #f59e0b)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            that level you up.
          </span>
        </div>
        <p
          style={{
            fontSize: "22px",
            color: "#57534e",
            fontWeight: "400",
            fontFamily: "system-ui, sans-serif",
            maxWidth: "640px",
            lineHeight: "1.5",
          }}
        >
          Book sessions with senior engineers. Get AI feedback reports, HD
          video, and real-time chat.
        </p>
      </div>

      {/* Bottom — feature pills */}
      <div style={{ display: "flex", gap: "12px" }}>
        {[
          "🎥  HD Video Call",
          "🤖  AI Feedback Report",
          "💬  Persistent Chat",
          "📹  Recording & Playback",
        ].map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
              fontSize: "14px",
              color: "#a8a29e",
              fontFamily: "system-ui, sans-serif",
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
