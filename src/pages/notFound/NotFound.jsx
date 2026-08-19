import { Link } from "react-router";

export default function NotFound() {
  return (
    <div
      style={{
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "64px", marginBottom: "16px" }}>🛍️</div>

      <h1
        style={{
          margin: "0 0 8px 0",
          color: "var(--accent, #aa3bff)",
          fontSize: "72px",
          fontWeight: "bold",
        }}
      >
        404
      </h1>

      <h2 style={{ margin: "0 0 12px 0", fontSize: "24px" }}>
        Page Not Found!
      </h2>

      <p
        style={{
          maxWidth: "420px",
          margin: "0 0 28px 0",
          color: "var(--text, #6b6375)",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        Oops! The product or page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 28px",
          backgroundColor: "var(--accent, #aa3bff)",
          color: "#ffffff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "16px",
          boxShadow: "var(--shadow)",
        }}
      >
        &larr; Back to Home
      </Link>
    </div>
  );
}