
import React, { useEffect, useState } from "react";
import { ZOHO, SITE, BHK_OPTIONS } from "./zohoConfig.js";

export default function App() {
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Initialize Zoho WebForm Analytics
  useEffect(() => {
    const { analytics } = ZOHO;

    if (!analytics || document.getElementById(analytics.scriptId)) {
      return;
    }

    window._wfa_fstprtcken = window._wfa_fstprtcken || {};

    window._wfa_fstprtcken[analytics.formId] =
      analytics.firstPartyTracking;

    const script = document.createElement("script");
    script.id = analytics.scriptId;
    script.src = analytics.scriptUrl;
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const returnURL =
    ZOHO.returnURL || `${window.location.origin}/thank-you.html`;

  // Validate phone number before submitting the form to Zoho
  function handleSubmit(e) {
    const form = e.currentTarget;

    const phone = form.elements["phone_ui"].value.replace(/[\s-]/g, "");
    const ok = /^(\+91|91|0)?[6-9]\d{9}$/.test(phone);

    if (!ok) {
      e.preventDefault();
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    // Send the cleaned phone number to Zoho
    form.elements[ZOHO.fields.phone].value = phone.replace(
      /^(\+91|91|0)/,
      ""
    );

    setError("");
    setSubmitting(true);
  }

  return (
    <div className="page" style={{ "--hero": `url(${SITE.heroImage})` }}>
      <header className="topbar">
        <span className="brand">{SITE.brand}</span>
      </header>

      <main className="hero">
        <section className="formCard" aria-label="Enquiry form">
          <h2>Get a Free Callback</h2>
          <p className="sub">
            Fill in your details and we'll reach out within the hour.
          </p>

          <form
            action={ZOHO.actionUrl}
            method="POST"
            onSubmit={handleSubmit}
            acceptCharset="UTF-8"
          >
            {/* Zoho security fields */}
            <input
              type="hidden"
              name="xnQsjsdp"
              value={ZOHO.hidden.xnQsjsdp}
            />

            <input type="hidden" name="zc_gad" value="" />

            <input
              type="hidden"
              name="xmIwtLD"
              value={ZOHO.hidden.xmIwtLD}
            />

            <input
              type="hidden"
              name="actionType"
              value={ZOHO.hidden.actionType}
            />

            <input
              type="hidden"
              name="returnURL"
              value={returnURL}
            />

            {/* Zoho honeypot field */}
            <input type="hidden" name="aG9uZXlwb3Q" value="" />

            {/* Lead source */}
            {ZOHO.leadSourceField && (
              <input
                type="hidden"
                name={ZOHO.leadSourceField}
                value={ZOHO.leadSourceValue}
              />
            )}

            <label>
              Full Name
              <input
                type="text"
                name={ZOHO.fields.name}
                required
                maxLength={80}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>

            <label>
              Mobile Number
              <input
                type="tel"
                name="phone_ui"
                required
                placeholder="10-digit mobile number"
                autoComplete="tel"
                inputMode="numeric"
              />

              {/* Cleaned number submitted to Zoho */}
              <input type="hidden" name={ZOHO.fields.phone} />
            </label>

            <label>
              Email
              <input
                type="email"
                name={ZOHO.fields.email}
                maxLength={100}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>

            {ZOHO.fields.bhk && (
              <label>
                Interested In
                <select name={ZOHO.fields.bhk} defaultValue="">
                  <option value="" disabled>
                    Select configuration
                  </option>

                  {BHK_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            )}

            {error && (
              <p className="error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Request Callback"}
            </button>
          </form>
        </section>

        <section className="copy">
          <p className="eyebrow">Now booking</p>
          <h1>{SITE.headline}</h1>
          <p className="tagline">{SITE.tagline}</p>

          <ul>
            {SITE.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="foot">
        &copy; {new Date().getFullYear()} {SITE.brand}. Test site.
      </footer>
    </div>
  );
}
