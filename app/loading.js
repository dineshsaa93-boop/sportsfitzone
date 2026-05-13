export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#000814",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img
        src="/logo.png"
        alt="logo"
        style={{
          width: "180px",
          animation: "pulse 2s infinite"
        }}
      />

      <p
        style={{
          color: "#39ff14",
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "bold",
          letterSpacing: "2px"
        }}
      >
        SPORTS FIT ZONE
      </p>

      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }

          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
