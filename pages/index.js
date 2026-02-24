"use client";

import React, { useState } from "react";

export default function Base1000Clean() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="wrapper">
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background-color: #f8fafc;
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
          color: #1e293b;
        }
      `}</style>

      {/* Grid de fundo (estilo caderno de estudos) */}
      <div className="dot-grid" />

      <main className="container">
        <header className="brand">
          <h2 className="logo">
            BASE <span className="thousand">1000</span>
          </h2>
        </header>

        <section className="hero-card">
          <div className="status-badge">
            <span className="dot"></span> Em desenvolvimento
          </div>

          <h1 className="title">
            Onde a estratégia encontra a{" "}
            <span className="italic">comunidade.</span>
          </h1>

          <p className="description">
            O fórum definitivo para discutir temas de redação, compartilhar
            cronogramas e vivenciar a jornada dos vestibulares com quem entende
            o seu objetivo.
          </p>

          <div className="topics">
            <span>#redação</span>
            <span>#enem</span>
            <span>#medicina</span>
            <span>#foco</span>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="form-group">
              <input
                type="email"
                placeholder="Seu e-mail acadêmico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input"
              />
              <button type="submit" className="button">
                Quero meu acesso
              </button>
            </form>
          ) : (
            <div className="success-box">
              <span className="check">✓</span>
              Sua vaga na lista de espera foi reservada.
            </div>
          )}
        </section>

        <footer className="footer">
          <p>Prepare-se para o topo. Em breve.</p>
        </footer>
      </main>

      <style jsx>{`
        .wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 20px;
        }

        .dot-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
          background-size: 24px 24px;
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 700px;
          width: 100%;
          text-align: center;
        }

        .brand {
          margin-bottom: 2rem;
          animation: fadeInDown 0.8s ease;
        }

        .logo {
          font-size: 1.2rem;
          letter-spacing: 0.3em;
          font-weight: 800;
          color: #64748b;
        }

        .thousand {
          color: #0f172a;
          position: relative;
        }

        .thousand::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #10b981;
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 3.5rem 2.5rem;
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
          animation: fadeInUp 0.8s ease;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f1f5f9;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 1.5rem;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
        }

        .title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #0f172a;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .italic {
          font-style: italic;
          font-weight: 400;
          color: #10b981;
        }

        .description {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .topics {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 2.5rem;
        }

        .topics span {
          font-size: 0.85rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .form-group {
          display: flex;
          background: #fff;
          padding: 6px;
          border-radius: 16px;
          box-shadow:
            0 4px 6px -1px rgba(0, 0, 0, 0.05),
            0 10px 15px -3px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
          transition: border-color 0.2s;
        }

        .form-group:focus-within {
          border-color: #10b981;
        }

        .input {
          flex: 1;
          border: none;
          padding: 12px 16px;
          outline: none;
          font-size: 1rem;
          color: #1e293b;
          border-radius: 12px;
        }

        .button {
          background: #0f172a;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .button:hover {
          background: #1e293b;
          transform: scale(1.02);
        }

        .success-box {
          background: #f0fdf4;
          color: #166534;
          padding: 16px;
          border-radius: 16px;
          font-weight: 600;
          border: 1px solid #bbf7d0;
        }

        .check {
          margin-right: 8px;
        }

        .footer {
          margin-top: 2rem;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 600px) {
          .hero-card {
            padding: 2.5rem 1.5rem;
          }
          .form-group {
            flex-direction: column;
            background: transparent;
            box-shadow: none;
            border: none;
            padding: 0;
          }
          .input {
            background: #fff;
            border: 1px solid #e2e8f0;
            margin-bottom: 10px;
            padding: 16px;
          }
          .button {
            padding: 16px;
          }
          .topics {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}
