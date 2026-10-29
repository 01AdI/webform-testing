import React, { useEffect, useState } from "react";
import { ZOHO, SITE, BHK_OPTIONS } from "./zohoConfig.js";
import { captureTracking } from "./utm.js";

export default function App() {
  const [tracking, setTracking] = useState({});
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setTracking(captureTracking());
  }, []);

  const returnURL = ZOHO.returnURL || `${window.location.origin}/thank-you.html`;

  const descriptionText = [
    `Source: ${tracking.utm_source || "direct"}`,
    tracking.utm_medium && `Medium: ${tracking.utm_medium}`,
    tracking.utm_campaign && `Campaign: ${tracking.utm_campaign}`,
    tracking.utm_term && `Term: ${tracking.utm_term}`,
    tracking.utm_content && `Content: ${tracking.utm_content}`,
    tracking.gclid && `GCLID: ${tracking.gclid}`,
    `Page: ${window.location.origin}${window.location.pathname}`,
  ]
    .filter(Boolean)
    .join(" | ");

  // Light client-side validation before the browser posts the form to Zoho
  function handleSubmit(e) {
    const form = e.currentTarget;
    const phone = form.elements["phone_ui"].value.replace(/[\s-]/g, "");
    const ok = /^(\+91|91|0)?[6-9]\d{9}$/.test(phone);
    if (!ok) {
      e.preventDefault();
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    // Send the cleaned number to Zoho
    form.elements[ZOHO.fields.phone].value = phone.replace(/^(\+91|91|0)/, "");
    setError("");
    setSubmitting(true); // form now posts normally to Zoho, then Zoho redirects to returnURL
  }

  return (
    <div className="page" style={{ "--hero": `url(${SITE.heroImage})` }}>
      <header className="topbar">
        <span className="brand">{SITE.brand}</span>
      </header>

      <main className="hero">
        <section className="formCard" aria-label="Enquiry form">
          <h2>Get a Free Callback</h2>
          <p className="sub">Fill in your details and we'll reach out within the hour.</p>

          <form action={ZOHO.actionUrl} method="POST" onSubmit={handleSubmit} acceptCharset="UTF-8">
            {/* Zoho security fields */}
            <input type="hidden" name="xnQsjsdp" value={ZOHO.hidden.xnQsjsdp} />
            <input type="hidden" name="xmIwtLD" value={ZOHO.hidden.xmIwtLD} />
            <input type="hidden" name="actionType" value={ZOHO.hidden.actionType} />
            <input type="hidden" name="returnURL" value={returnURL} />

            {/* Lead source (only if configured) */}
            {ZOHO.leadSourceField && (
              <input type="hidden" name={ZOHO.leadSourceField} value={ZOHO.leadSourceValue} />
            )}

            {/* Hidden UTM fields -> custom Zoho fields (skipped while their name is empty) */}
            {Object.entries(ZOHO.utmFields)
              .filter(([, zohoName]) => zohoName)
              .map(([key, zohoName]) => (
                <input key={key} type="hidden" name={zohoName} value={tracking[key] || ""} />
              ))}

            {/* Temporary: put the source into the standard Description field */}
            {ZOHO.descriptionField && (
              <input type="hidden" name={ZOHO.descriptionField} value={descriptionText} />
            )}

            <label>
              Full Name
              <input type="text" name={ZOHO.fields.name} required maxLength={80} placeholder="Your name" autoComplete="name" />
            </label>

            <label>
              Mobile Number
              <input type="tel" name="phone_ui" required placeholder="10-digit mobile number" autoComplete="tel" inputMode="numeric" />
              {/* The cleaned number is copied into this field on submit */}
              <input type="hidden" name={ZOHO.fields.phone} />
            </label>

            <label>
              Email
              <input type="email" name={ZOHO.fields.email} required maxLength={100} placeholder="you@example.com" autoComplete="email" />
            </label>

            {ZOHO.fields.bhk && (
              <label>
                Interested In
                <select name={ZOHO.fields.bhk} defaultValue="">
                  <option value="" disabled>Select configuration</option>
                  {BHK_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </label>
            )}

            <label className="consent">
              <input type="checkbox" required />
              <span>I agree to be contacted by {SITE.brand} via call, SMS or WhatsApp regarding my enquiry.</span>
            </label>

            {error && <p className="error" role="alert">{error}</p>}

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
            {SITE.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="foot">&copy; {new Date().getFullYear()} {SITE.brand}. Test site.</footer>
    </div>
  );
}
