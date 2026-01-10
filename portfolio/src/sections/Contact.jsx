
import React, { useState } from "react";


const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully. I’ll get back to you soon!");
          setFormState({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        padding: "90px 0",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "600",
          color: "#7c3aed",
          marginBottom: "20px",
        }}
      >
        Contact
      </h2>

      <p
        style={{
          maxWidth: "720px",
          margin: "0 auto 50px",
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#d1d1e0",
        }}
      >
        Have a question, opportunity, or project in mind? Let’s connect and
        build something great.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {["name", "email"].map((field) => (
          <div key={field} style={{ marginBottom: "26px" }}>
            <label style={{ color: "#e5e5e5", fontSize: "14px" }}>
              {field.toUpperCase()}
            </label>
            <input
              name={field}
              value={formState[field]}
              onChange={handleChange}
              required
              type={field === "email" ? "email" : "text"}
              placeholder={field === "email" ? "you@example.com" : "Your name"}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #333",
                background: "transparent",
                color: "#fff",
                outline: "none",
              }}
            />
          </div>
        ))}

        <div style={{ marginBottom: "34px" }}>
          <label style={{ color: "#e5e5e5", fontSize: "14px" }}>MESSAGE</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows="5"
            required
            placeholder="How can I help you?"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #333",
              background: "transparent",
              color: "#fff",
              outline: "none",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "30px",
            background: "#7c3aed",
            color: "#fff",
            fontSize: "15px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>

        {status && (
          <p
            style={{
              marginTop: "20px",
              color: status.includes("✅")
                ? "#22c55e"
                : status.includes("Sending")
                ? "#e5e5e5"
                : "#ef4444",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            {status}
          </p>
        )}

       
        <div className="contact-icons">
       
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <svg width="24" height="24" fill="currentColor">
              <path d="M4 3h4v18H4zM6 1a2 2 0 110 4 2 2 0 010-4zM10 7h4v2h.1c.6-1 2-2 4-2 4 0 5 3 5 6v8h-4v-7c0-2 0-4-2-4s-3 2-3 4v7h-4z" />
            </svg>
          </a>

          <a
            href="https://github.com/rohitsoni78"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <svg width="24" height="24" fill="currentColor">
              <path d="M12 1C5.9 1 1 5.9 1 12c0 4.9 3.2 9 7.6 10.5.6.1.8-.3.8-.6v-2c-3 .7-3.7-1.3-3.7-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 1.6 2.7 1.1.1-.7.4-1.1.7-1.4-2.4-.3-5-1.2-5-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1a10.5 10.5 0 015.4 0c2.1-.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.1-2.6 5-5 5.3.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11 11 0 0023 12c0-6.1-4.9-11-11-11z" />
            </svg>
          </a>
        </div>
      </form>

      <style>
        {`
          .contact-icons {
            margin-top: 30px;
            display: flex;
            justify-content: flex-end;
            gap: 24px;
            color: #e5e5e5;
          }

          .contact-icons a {
            transition: transform 0.25s ease;
            color: #e5e5e5;
            text-decoration: none;
          }

          .contact-icons a:hover {
            transform: scale(1.2);
          }

          @media (max-width: 768px) {
            .contact-icons {
              justify-content: center;
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
