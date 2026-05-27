import { Html, Body, Container, Text, Hr } from "@react-email/components";

export function BookingConfirmationEmail({
  recipientName,
  otherPersonName,
  otherPersonRole,
  date,
  time,
  duration,
}) {
  return (
    <Html>
      <Body style={{ fontFamily: "Georgia, serif", padding: "32px 16px" }}>
        <Container style={{ maxWidth: "480px", margin: "0 auto" }}>
          <Text
            style={{ fontSize: "22px", color: "#111827", margin: "0 0 4px" }}
          >
            Prept
          </Text>
          <Text
            style={{
              fontSize: "11px",
              color: "#6b7280",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 32px",
            }}
          >
            Session Confirmed
          </Text>

          <Text
            style={{ fontSize: "14px", color: "#374151", margin: "0 0 4px" }}
          >
            Hi <strong>{recipientName}</strong>, your session has been booked.
          </Text>

          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />

          {[
            [otherPersonRole, otherPersonName],
            ["Date", date],
            ["Time", time],
            ["Duration", duration],
          ].map(([k, v]) => (
            <Text
              key={k}
              style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 8px" }}
            >
              {k}:{" "}
              <span style={{ color: "#111827", fontWeight: "600" }}>{v}</span>
            </Text>
          ))}

          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />

          <Text style={{ fontSize: "12px", color: "#9ca3af", margin: "0" }}>
            You&apos;ll find your call link in the Appointments page when
            it&apos;s time to join.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
