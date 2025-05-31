import { useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("Click the button to check API");

  const checkApi = async () => {
    try {
      const res = await axios.get("https://mern-backend-gold.vercel.app/api");
      setStatus(res.data.message || "API is working!");
    } catch (error) {
      setStatus(
        "API call failed: " + (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 400,
        margin: "50px auto",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: 20 }}>Vite + React API Checker</h1>

      <button
        onClick={checkApi}
        style={{
          padding: "10px 20px",
          fontSize: 16,
          cursor: "pointer",
          borderRadius: 5,
          border: "1px solid #333",
          backgroundColor: "#f0f0f0",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ddd")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
      >
        Check API Status
      </button>

      <p style={{ marginTop: 20, fontSize: 16 }}>{status}</p>
    </div>
  );
}

export default App;